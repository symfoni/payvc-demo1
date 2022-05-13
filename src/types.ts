export type SupportPresentation = {
  nationalIdentityVC: {
    identifier: string
  }
  payVC: PayVC
}

export type IssuePresentation = {
  nationalIdentityVC: {
    identifier: string
  }
  requisitionVC: Requisition
  payVC: PayVC
}

export type PayVC = {
  wallet: string
  requires: {
    type: string
    credentialSubject: {
      [key: string]: string
    }
  }
}

export type NOBoardDirectorVC = {
  credentialSubject: {
    id: string
    boardDirectorOf: string
  }
}

export type Requisition = {
  id: string
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
