import { Issuer, IssuerListInput, Requisition, VC } from './types'

const vcs: VC[] = [
  {
    type: 'NOBoardDirector',
    cost: {
      amount: 50,
      currency: 'NOK',
    },
  },
]

const issuers: Issuer[] = [
  {
    name: 'BRREG',
    supports: vcs,
    endpoints: {
      issue: 'http://localhost:3000/issuer/issue',
    },
  },
]

export const supportedIssuers = (input: IssuerListInput) => {
  return issuers
    .filter((issuer) => issuer.supports.find((vc) => vc.type === input.vc.type))
    .filter((issuer) =>
      issuer.supports.find(
        (vc) =>
          vc.cost.amount < input.payment.max &&
          vc.cost.currency === input.payment.currency,
      ),
    )
    .map((issuer) => {
      return {
        issuer: issuer,
        requisition: {
          id: '123',
          ...input.requisitionRequest,
        },
      }
    })
}

export const valid = (requisition: Requisition, fullfill = false) => {
  return true
}

export const consume = (requisition: Requisition, fullfill = false) => {
  return true
}
