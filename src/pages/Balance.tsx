import { formatEther } from '@ethersproject/units'
import { useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core'
import styled from 'styled-components'
import { Slider } from '../components/base/Actions'
import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Button } from '../components/base/Button'
import { Label } from '../typography/Label'
import { TextInline } from '../typography/Text'
import { Title } from '../typography/Title'
import { feiAddress, usdcAddress } from '../components/Constants'

export function Balance() {
  const { activateBrowserWallet, deactivate, account } = useEthers()
  const userBalance = useEtherBalance(account)
  const feiBalance = useTokenBalance(feiAddress, account)
  const usdcBalance = useTokenBalance(usdcAddress, account)

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
                <Label>USDC balance:</Label> <TextInline>{formatEther(usdcBalance)}</TextInline> <Label>USDC</Label>
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
