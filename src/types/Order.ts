export interface Order {
  _id: string
  table: string
  status: 'DONE' | 'IN_PRODUCTION' | 'WAITING' | 'CANCELED'
  products: {
    _id: string
    quantity: number
    product: {
      name: string
      imagePath: string
      price: number
    }
  }[]
}
