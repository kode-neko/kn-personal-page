'use client'

import { useEffect, useState } from "react";
import { t, tList } from "./lang";

function useT(key: string): string {
  const [trans, setTrans] = useState<string>('')

  useEffect(() => {
    t(key)
      .then(setTrans)
      .catch(() => setTrans(key))
  },[])
  return trans;
}

function useTlistStr(keyList: string[], prefix = ''): Record<string, string> {
  const objInit: Record<string, string> = {}
  const keyListPrefix = keyList.map(k => `${prefix}${k}`)
  keyListPrefix.forEach(k => objInit[k] = '')
  const [objTrans, setObjTrans] = useState<Record<string, string>>(objInit)

  useEffect(() => {
    tList(keyListPrefix).then(resTrans => {
      const objTransMod: Record<string, string> = {}
      keyList.forEach((k, i) => objTransMod[k] = resTrans[keyListPrefix[i]])
      setObjTrans(objTransMod)
    })
  }, [])

  return objTrans;
}

function useTlistObj(objList: any[], prefix = '', idName = 'id'): Record<string, string> {
  const keyList = objList.map(o => o[idName])
  return useTlistStr(keyList, prefix)
}

export {
  useT,
  useTlistStr,
  useTlistObj
};