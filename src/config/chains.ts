import { networks } from '@safe-global/safe-core-sdk-utils/dist/src/eip-3770/config'

/**
 * A static shortName<->chainId dictionary
 * E.g.:
 *
 * {
 *   eth: '1',
 *   gor: '5',
 *   ...
 * }
 */
type Chains = Record<string, string>

let chains = networks.reduce<Chains>((result, { shortName, chainId }) => {
  result[shortName] = chainId.toString()
  return result
}, {})

chains = {
  ...chains,
  smr: '148',
}

export default chains
