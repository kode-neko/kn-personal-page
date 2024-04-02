import { throws } from 'assert';
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

class ErrorGetTrans extends Error {
  constructor() {
    super('Translation not found');
  }
}

function getKey(
  dics: any, 
  keys: string[]
): {[key:string]: string} | never {
  const subDic = dics[keys[0]]
  if (!subDic) throw new ErrorGetTrans();
  if (keys.length === 1) return dics
  const subKeys = keys.slice(1)
  return getKey(subDic, subKeys)
}

function t(strKey: string) {
  const keys = strKey.split('.')
  let transFound
  try{
    const dicLang = dics[currentLang]
    const lastKey = keys[keys.length - 1]
    transFound = getKey(dicLang, keys)[lastKey]
  }
  catch(e) {
    console.log('error', strKey)
    transFound = strKey
  }
  return transFound
}

export {
  LangSel,
  LangList,
  changeLang,
  getCurrentLang,
  t
}
