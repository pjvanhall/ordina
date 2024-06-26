import { NextResponse, NextRequest } from 'next/server'
import { IPData } from './global/types';

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
    const ip = getIpFromRequest(request);   
        
    if (ip !== null) {
        const response = await fetch(`${process.env.IPDATA_API_URL}/${ip}?api-key=${process.env.IPDATA_API_KEY}`);
        
        const ipData: IPData = await response.json();

        const url = new URL(request.url);

        return NextResponse.redirect(`${request.url}\\${ipData.city}`);
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: "/currentweather",
}