import { expect } from 'earljs'
import { handle } from '../src/wallet'

describe('payVC', () => {
  it('should receive supported issuers', () => {
    const res = handle()
    expect(res).toBeDefined()
  })
})
