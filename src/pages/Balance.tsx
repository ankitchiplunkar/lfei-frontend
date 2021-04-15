import { formatEther, formatUnits } from '@ethersproject/units'
import { useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core'
import styled from 'styled-components'
import { Slider } from '../components/base/Actions'
import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Button } from '../components/base/Button'
import { Label } from '../typography/Label'
import { TextInline } from '../typography/Text'
import { Title } from '../typography/Title'
import { feiAddress, usdcAddress, addressList } from '../components/Constants'

export function Balance() {
  const { activateBrowserWallet, deactivate, account } = useEthers()
  const userBalance = useEtherBalance(account)
  const feiBalance = useTokenBalance(feiAddress, account)
  const usdcBalance = useTokenBalance(usdcAddress, account)
  const lFei1Balance = useTokenBalance(addressList["1"], account)
  const lFei95Balance = useTokenBalance(addressList["0.95"], account)
  const lFei09Balance = useTokenBalance(addressList["0.9"], account)
  const lFei85Balance = useTokenBalance(addressList["0.85"], account)
  const lFei08Balance = useTokenBalance(addressList["0.8"], account)
  const lFei75Balance = useTokenBalance(addressList["0.75"], account)


  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
            <Title>User Balances</Title>
            {account ? (
              <Button onClick={() => deactivate()}>Disconnect</Button>
            ) : (
                <Button onClick={() => activateBrowserWallet()}>Connect</Button>
              )}
          </SectionRow>
          <Label>CONTRACTS ARE ONLY DEPLOYED ON ROPSTEN</Label>
          <ContentBlock>
            {account && (
              <ContentRow>
                <Label>Account:</Label> <TextInline>{account}</TextInline>
              </ContentRow>
            )}
            {userBalance && (
              <ContentRow>
                <Label>Ether balance:</Label> <TextInline>{formatEther(userBalance)}</TextInline> <Label>ETH</Label>
              </ContentRow>
            )}
            {feiBalance && (
              <ContentRow>
                <Label>Fei balance:</Label> <TextInline>{formatEther(feiBalance)}</TextInline> <Label>Fei</Label>
              </ContentRow>
            )}
            {usdcBalance && (
              <ContentRow>
                <Label>USDC balance:</Label> <TextInline>{formatUnits(usdcBalance, 6)}</TextInline> <Label>USDC</Label>
              </ContentRow>
            )}
            {lFei1Balance && (
              <ContentRow>
                <Label>Fei balance (in pool 1):</Label> <TextInline>{formatEther(lFei1Balance)}</TextInline> <Label>Fei</Label>
              </ContentRow>
            )}
            {lFei95Balance && (
              <ContentRow>
                <Label>Fei balance (in pool 0.95):</Label> <TextInline>{formatEther(lFei95Balance)}</TextInline> <Label>Fei</Label>
              </ContentRow>
            )}
            {lFei09Balance && (
              <ContentRow>
                <Label>Fei balance (in pool 0.9):</Label> <TextInline>{formatEther(lFei09Balance)}</TextInline> <Label>Fei</Label>
              </ContentRow>
            )}
            {lFei85Balance && (
              <ContentRow>
                <Label>Fei balance (in pool 0.85):</Label> <TextInline>{formatEther(lFei85Balance)}</TextInline> <Label>Fei</Label>
              </ContentRow>
            )}
            {lFei08Balance && (
              <ContentRow>
                <Label>Fei balance (in pool 0.8):</Label> <TextInline>{formatEther(lFei08Balance)}</TextInline> <Label>Fei</Label>
              </ContentRow>
            )}
            {lFei75Balance && (
              <ContentRow>
                <Label>Fei balance (in pool 0.75):</Label> <TextInline>{formatEther(lFei75Balance)}</TextInline> <Label>Fei</Label>
              </ContentRow>
            )}
          </ContentBlock>

          <SectionRow>
            <Title>Pool Actions</Title>
          </SectionRow>
          <Slider></Slider>
        </Section>
      </Container>
    </MainContent>
  )
}
