import { LangList, LangSel } from "@/actions"
import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = LangList.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return
 
  request.nextUrl.pathname = `/${LangSel.EN}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}