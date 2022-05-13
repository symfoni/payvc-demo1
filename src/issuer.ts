import { valid } from './payvc'
import { validateAndGetNationalIdentityVC, validateAndGetPayVC } from './shared'
import { IssuePresentation } from './types'

const isboardDirector = (identifier: string, organisation: string) => {
  return identifier && organisation ? true : false
}

export const issue = (presentation: IssuePresentation) => {
  const payVC = validateAndGetPayVC(presentation)
  const supportedVCtype = 'NOBoardDirector'
  if (payVC.requires.type === supportedVCtype) {
    if (valid(presentation.requisitionVC, true)) {
      const nationalIdentity = validateAndGetNationalIdentityVC(presentation)
      if (
        isboardDirector(
          nationalIdentity.identifier,
          payVC.requires.credentialSubject.boardDirectorOf,
        )
      ) {
        return {
          credentialSubject: {
            id: nationalIdentity.identifier,
            boardDirectorOf: payVC.requires.credentialSubject.boardDirectorOf,
          },
        }
      }
    }
  }
}
