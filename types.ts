export interface IHARF {
  name: string
  weight: number
  value: string
  description?: string
  color?: string
  encoding?: string
}
export interface IKALEMAT {
  horuf: IHARF[]
}
export interface IAYA {
  Kalemat: IkALEMAT[]
}
export interface ISURA {
  Ayat: IAYA[]
}
export interface IQuran {
  Surah: ISURA[]
}
export interface ISTATE {
  quran: IQuran
  Surah: ISURA[]
  Index: IQuran
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IQ2B {
  state: ISTATE
}
