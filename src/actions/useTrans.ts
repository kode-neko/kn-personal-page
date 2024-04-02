'use client'

import { useEffect, useState } from "react";
import { t } from "./lang";

function useT(key: string): string {
  const [trans, setTrans] = useState<string>(key)
  useEffect(() => {
    t(key)
      .then(setTrans)
      .catch(() => setTrans(key))
  },[])
  return trans;
}

function useTlistStr(keyList: string[], prefix = ''): Record<string, string> {
  const objInit: Record<string, string> = {}
  keyList.forEach(k => objInit[k] = k)
  const [objTrans, setObjTrans] = useState<Record<string, string>>(objInit)

  useEffect(() => {
    const promises: Promise<string>[] = []
    keyList.forEach(k => 
      promises.push(t(`${prefix}${k}`))
    )
    Promise.all(promises)
      .then(transList => {
        const objAux: Record<string, string> = {}
        transList.forEach((t, i) => objAux[keyList[i]] = t)
        setObjTrans(objAux)
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