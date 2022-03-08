
interface Address {
  street: string,
  city: string,
  postCode: string,
  country: string
}

interface Item {
  name: string,
  price: number,
  quantity: number,
  total: number
}

export interface Invoice {
  clientAddress: Address,
  clientEmail: string,
  clientName: string,
  createdAt: string,
  description: string,
  id: string,
  items: Item[],
  paymentDue: string,
  paymentTerms: number,
  senderAddress: Address,
  status: string,
  total: number
}