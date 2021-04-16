import { useState } from 'react'
import { formatEther, formatUnits } from '@ethersproject/units'
import { Label } from '../../typography/Label'
import styled from 'styled-components'
import { Text, TextBold } from '../../typography/Text'
import { SectionRow, ContentRow, ContentBlock } from './base'
import {addressList, feiAddress, usdcAddress } from '../Constants'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { ApproveFei, DepositFei, WithdrawFei, WithdrawUSDC } from '../Notifications/Forms'

export const Slider = () => {
    const { account, library } = useEthers()
    const [value, setValue] = useState('0.9')
    

    function changeAddress(value: string): string {
        return addressList[value]
    }

    let address = changeAddress(value)
    let feiPoolBalance = useTokenBalance(feiAddress, address)
    let usdcPoolBalance = useTokenBalance(usdcAddress, address)

    return (
        <div>
            <SectionRow>
                <ContentBlock>
                    <ContentRow>
                        <Label>Choose limit order pool</Label>
                    </ContentRow>
                    <ContentRow>
                        <input
                            onChange={(e) => {
                                setValue(e.currentTarget.value)
                                address = changeAddress(e.currentTarget.value)
                                feiPoolBalance = useTokenBalance(feiAddress, account)
                                usdcPoolBalance = useTokenBalance(usdcAddress, account)
                            }}
                            type={"range"}
                            min={0.9}
                            defaultValue={0.9}
                            max={1.0}
                            step={0.1}
                            list={"tick-list"} />
                        <datalist id="tick-list">
                            <option>0.9</option>
                            <option>1.0</option>
                        </datalist>
                        <span id="output">{value}</span>
                    </ContentRow>
                    <ContentRow>
                        <Text>Pool address: {address}</Text>
                        <Text>Pool conversion rate: 1 Fei : {value} USDC</Text>
                        {feiPoolBalance && (<Text>Pool Fei balance: {formatEther(feiPoolBalance)}</Text>)}
                        {usdcPoolBalance && (<Text>Pool USDC balance: {formatUnits(usdcPoolBalance, 6)}</Text>)}
                    </ContentRow>
                </ContentBlock>
            </SectionRow>
            <ContentBlock>
                {account && library && <ApproveFei poolAddress={address} account={account} library={library} />}
                {account && library && <DepositFei poolAddress={address} account={account} library={library} />}
                {account && library && <WithdrawFei poolAddress={address} account={account} library={library} />}
                {account && library && <WithdrawUSDC poolAddress={address} account={account} library={library} />}
            </ContentBlock>
        </div>
    )
}


const TableGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
`