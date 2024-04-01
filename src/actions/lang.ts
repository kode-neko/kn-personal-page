enum LangSel {
  EN = 'en',
  ES = 'es'
}
const LangList = Object.values(LangSel);

let currentLang = LangSel.EN;

export {
  LangSel,
  LangList
}