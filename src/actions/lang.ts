'use server'
import { LangSel } from '@/globals';
import dics from '../dictionaries'

let currentLang = LangSel.EN;

async function changeLang(lang: string) {
  currentLang = lang
}

async function getCurrentLang(): Promise<string> {
  return currentLang;
}

class ErrorGetTrans extends Error {
  constructor() {
    super('Translation not found');
  }
}

async function getKey(
  dics: Record<string, any>, 
  keys: string[]
): Promise<string> {
  const subDic = dics[keys[0]]
  if (!subDic) throw new ErrorGetTrans();
  if (keys.length === 1) return dics[keys[0]]
  const subKeys = keys.slice(1)
  return getKey(subDic, subKeys)
}

async function t(strKey: string): Promise<string> {
  const keys = strKey.split('.')
  let transFound
  try{
    const dicLang = (dics as Record<string, any>)[currentLang]
    transFound = await getKey(dicLang, keys)
  }
  catch(e) {
    transFound = strKey
  }
  return transFound
}

export {
  changeLang,
  getCurrentLang,
  t
}
