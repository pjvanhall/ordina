import { redirect } from "next/navigation";
export default async function Home({ params }: { params: { lang: string } }) {
  redirect(`${params.lang}/currentweather`);
}
