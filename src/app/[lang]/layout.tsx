import { changeLang } from "@/actions";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

const RootLayout = ({
  children,
  params
}: any ) => {
  changeLang(params.lang)
  return <>{children}</>;
}

export default RootLayout