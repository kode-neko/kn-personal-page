import dics from '../dictionaries'

enum LangSel {
  EN = 'en',
  ES = 'es'
}
const LangList = Object.values(LangSel);

let currentLang = LangSel.EN;

function changeLang(lang: LangSel) {
  currentLang = lang
}

function getCurrentLang(): LangSel {
  return currentLang;
}

function getKey(
  dics: any, 
  keys: string[]
): {[key:string]: string} {
  if (keys.length == 1) return dics[keys[0]]
  return getKey(dics[keys[0]], keys.slice(1))
}

function t(strKey: string) {
  const keys = strKey.split('.')
  return getKey(dics, keys)
}

export {
  LangSel,
  LangList,
  t
}

