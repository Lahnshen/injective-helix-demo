import { AccountAddress, ChainId } from '@injectivelabs/ts-types'
import { Web3Strategy } from '@injectivelabs/web3-strategy'
import { transactionConsumer } from '~/app/singletons/TransactionConsumer'
import { getWeb3Strategy } from '~/app/web3'

export class TxProvider {
  private message: any

  private address: string

  private web3Strategy: Web3Strategy

  private chainId: ChainId

  constructor({
    message,
    address,
    chainId
  }: {
    message: any
    address: AccountAddress
    chainId: ChainId
  }) {
    this.message = message
    this.address = address
    this.chainId = chainId
    this.web3Strategy = getWeb3Strategy()
  }

  async prepare() {
    const { chainId, address, message } = this

    return await transactionConsumer.prepareTxRequest({
      address,
      message,
      chainId
    })
  }

  async sign() {
    const { address, web3Strategy } = this
    const txResponse = await this.prepare()
    const signature = await web3Strategy.signTypedDataV4(
      txResponse.getData(),
      address
    )

    return { signature, txResponse }
  }

  async broadcast() {
    const { message, chainId } = this
    const { signature, txResponse } = await this.sign()

    return await transactionConsumer.broadcastTxRequest({
      signature,
      message,
      chainId,
      pubKeyType: txResponse.getPubKeyType(),
      typedData: txResponse.getData()
    })
  }
}