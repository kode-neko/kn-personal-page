import { changeLang } from "@/actions";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

const RootLayout = async ({
  children,
  params
}: any ) => {
  await changeLang(params.lang)
  return <>{children}</>;
}

export default RootLayout