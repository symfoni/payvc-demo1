import { supportedIssuers } from './payvc'
import { validateAndGetNationalIdentityVC, validateAndGetPayVC } from './shared'
import { SupportPresentation } from './types'

// Function to return a list of issuers that support
export const support = (presentation: SupportPresentation) => {
  // Define requirments
  // if it request board director VC
  // if user has valid NatioanlIdentityVC
  // I will pay MAX amount for VC that proofs board director credentials of company X
  // return list of issuers that I support and requisition notes
  const supportedVCtype = 'NOBoardDirector'
  const payVC = validateAndGetPayVC(presentation)

  if (payVC.requires.type === supportedVCtype) {
    const nationalIdentity = validateAndGetNationalIdentityVC(presentation)
    const maxPaymenAmountNOK = 100
    return supportedIssuers({
      vc: {
        type: payVC.requires.type,
      },
      requisitionRequest: {
        credentialSubject: {
          id: nationalIdentity.identifier,
          ...payVC.requires.credentialSubject,
        },
      },
      payment: {
        max: maxPaymenAmountNOK,
        currency: 'NOK',
      },
    })
  }
}

// function verify(presentation) {
//   // if VC is board director VC
//   // if board director VC is signed by BRREG,
//   // if board director VC subject is === NatioanlIdentityVC.subject
//   // if board director VC issuer is === NatioanlIdentityVC.issuer
// }
