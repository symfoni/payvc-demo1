import { issue } from './issuer'
import { IssuePresentation } from './types'
import { support } from './verifier'

export const handle = () => {
  // Some request for boardDirector 999 111 999
  const supportPresentation = {
    nationalIdentityVC: {
      identifier: '123456789',
    },
    payVC: {
      wallet: 'Wallet Y',
      requires: {
        type: 'NOBoardDirector',
        credentialSubject: {
          boardDirectorOf: '999 111 999',
        },
      },
    },
  }
  const supportedIssuers = support(supportPresentation)
  if (!supportedIssuers) throw new Error('No issuers found')
  const choosenIssuer = supportedIssuers[0]

  const issuePresentation: IssuePresentation = {
    nationalIdentityVC: {
      identifier: '123456789',
    },
    requisitionVC: choosenIssuer.requisition,
  }
  const issued = issue(issuePresentation)
  return supportedIssuers
}
