import { IssuePresentation, SupportPresentation } from './types'

export const validateAndGetNationalIdentityVC = (
  presentation: SupportPresentation,
) => {
  // Check if valid
  return presentation.nationalIdentityVC
}

export const validateAndGetPayVC = (
  presentation: SupportPresentation | IssuePresentation,
) => {
  // Check if valid
  return presentation.payVC
}
