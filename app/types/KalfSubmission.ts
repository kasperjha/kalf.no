
interface KalfCredit {
  by: string,
  byLink?: string,
  date: string,
}

export interface KalfSubmission {
  svg: string
  credit: KalfCredit
}
