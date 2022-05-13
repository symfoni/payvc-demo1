import { expect } from 'earljs'
import { handle } from '../src/wallet'

describe('payVC', () => {
  it('should receive supported issuers', () => {
    const res = handle()
    console.log(res)
    expect(res).toBeDefined()
    expect(res).toBeAnObjectWith({
      credentialSubject: { id: '123456789', boardDirectorOf: '999 111 999' },
    })
  })
})
