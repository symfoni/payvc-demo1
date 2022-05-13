export type SupportPresentation = {
  nationalIdentityVC: {
    identifier: string
  }
  payVC: {
    wallet: string
    requires: {
      type: string
      credentialSubject: {
        [key: string]: string
      }
    }
  }
}

export type IssuePresentation = {
  nationalIdentityVC: {
    identifier: string
  }
  requisitionVC?: Requisition
}

export type Requisition = {
  id: '123'
  credentialSubject: {
    id: string
    [key: string]: string
  }
}

export type RequisitionRequest = Omit<Requisition, 'id'>

export type IssuerListInput = {
  vc: {
    type: string
    issuer?: string
  }
  requisitionRequest: RequisitionRequest
  payment: MaxPayment
}

export type Issuer = {
  name: string
  supports: VC[]
  endpoints: {
    issue: string
  }
}

export type VC = {
  type: string
  cost: Payment
}

export type Currencies = 'NOK' | 'USD' | 'ETH'
export type Payment = {
  amount: number
  currency: Currencies
}
export type MaxPayment = {
  max: number
  currency: Currencies
}
