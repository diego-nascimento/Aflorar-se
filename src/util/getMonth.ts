const mesesExtenso = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
]
export const getMonth = (month: number):string | null =>{
  return month > 11 || month < 0? mesesExtenso[month]: null
}