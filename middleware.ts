import { NextResponse, NextRequest } from 'next/server'
import { IPData } from './global/types';
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['en-US', 'nl-NL', 'nl']
 
// Get the preferred locale, similar to the above or using a library
const getLocale = (request: NextRequest) => { 
    const headers = { 'accept-language': 'en-US,en;q=0.5' }
    const languages = new Negotiator({ headers }).languages()
    const defaultLocale = 'en-US'
 
    return match(languages, locales, defaultLocale)
}

const pathnameHasLocale = (request: NextRequest) => { 
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl;
            
    return locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
}


const getIpFromRequest = (request: NextRequest) => {
    const myDefaultIp = '77.170.219.184';

    const ip = request.ip 
        ?? (request.headers.get('x-real-ip') 
            ?? (request.headers.get('x-forwarded-for')?.split(',').at(0) || null)
        )
    
    if (ip === '::1' || ip === '127.0.0.1') {
        return myDefaultIp;
    }

    return ip;
}
 
export async function middleware(request: NextRequest) {
    if (!pathnameHasLocale(request)) {
        // Redirect if there is no locale
        const locale = getLocale(request);
        
        request.nextUrl.pathname = `/${locale}${request.nextUrl.pathname}`;
        
        return NextResponse.redirect(request.nextUrl);
    }

    if (request.nextUrl.pathname.endsWith('/currentweather')) {
        const ip = getIpFromRequest(request);   
            
        if (ip !== null) {
            const response = await fetch(`${process.env.IPDATA_API_URL}/${ip}?api-key=${process.env.IPDATA_API_KEY}`);
            
            const ipData: IPData = await response.json();

            const url = new URL(request.url);

            return NextResponse.redirect(`${request.url}\\${ipData.city}`);
        }
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: [
      // Skip all internal paths (_next) and svg files
      '/((?!_next|.*\\.svg$).*)',
    ],
  }