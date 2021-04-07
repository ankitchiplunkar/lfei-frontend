import { formatEther } from '@ethersproject/units'
import { useEtherBalance, useEthers } from '@usedapp/core'
import styled from 'styled-components'
import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Button } from '../components/base/Button'
import { DepositEth, WithdrawEth } from '../components/Notifications/Forms'
import { TokensList } from '../components/TokensList/TokensList'
import { Label } from '../typography/Label'
import { TextInline } from '../typography/Text'
import { Title } from '../typography/Title'

const STAKING_CONTRACT = '0x00000000219ab540356cBB839Cbe05303d7705Fa'

export function Balance() {
  const { activateBrowserWallet, deactivate, account, library } = useEthers()
  const userBalance = useEtherBalance(account)
  const stakingBalance = useEtherBalance(STAKING_CONTRACT)

  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
            <Title>Balance</Title>
            {account ? (
              <Button onClick={() => deactivate()}>Disconnect</Button>
            ) : (
                <Button onClick={() => activateBrowserWallet()}>Connect</Button>
              )}
          </SectionRow>
          <ContentBlock>
            {stakingBalance && (
              <ContentRow>
                <Label>ETH2 staking contract holds:</Label> <TextInline>{formatEther(stakingBalance)}</TextInline>{' '}
                <Label>ETH</Label>
              </ContentRow>
            )}
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
          </ContentBlock>
          <TokensContentBlock>
            <TokensList />
          </TokensContentBlock>
          <TableGrid>
            {account && library && <DepositEth account={account} library={library} />}
            {account && library && <WithdrawEth account={account} library={library} />}
            {account && library && <WithdrawEth account={account} library={library} />}
          </TableGrid>
        </Section>
      </Container>
    </MainContent>
  )
}

const TokensContentBlock = styled(ContentBlock)`
  padding: 16px 32px;
`

const TableGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1px;
`