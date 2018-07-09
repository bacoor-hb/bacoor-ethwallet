import ethers from 'ethers'
const { HDNode, providers, utils, Wallet } = ethers

export const generateMnemonics = () => {
  return HDNode.entropyToMnemonic(utils.randomBytes(16)).split(' ');
}