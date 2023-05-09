import { HexString } from '@polkadot/util/types'

export const LOCAL_STORAGE = {
  ACCOUNT: 'account',
}

export const ENV = {
  NODE: import.meta.env.VITE_NODE_ADDRESS,
}

export const initialRegister = {
  programId: '' as HexString,
  programId2: '' as HexString,
  currentStep: 1,
}
