import { formatEther } from '@ethersproject/units'
import { useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core'
import styled from 'styled-components'
import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Button } from '../components/base/Button'
import { DepositEth, WithdrawEth } from '../components/Notifications/Forms'
import { Label } from '../typography/Label'
import { TextInline } from '../typography/Text'
import { Title } from '../typography/Title'

export function Balance() {
  const { activateBrowserWallet, deactivate, account, library } = useEthers()
  const userBalance = useEtherBalance(account)
  const feiAddress = "0x85539BBcC27Ec15C8763ceC68a99C14903420E34"
  const usdcAddress = "0xb2cDD6A87B147e32c8e279e989101e373Ae90782"
  const feiBalance = useTokenBalance(feiAddress, account)
  const usdcBalance = useTokenBalance(usdcAddress, account)
  console.log(feiBalance, usdcBalance)

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
            {feiBalance && (
              <ContentRow>
                <Label>USDC balance:</Label> <TextInline>{formatEther(feiBalance)}</TextInline> <Label>USDC</Label>
              </ContentRow>
            )}
          </ContentBlock>
          <TableGrid>
            {account && library && <DepositEth account={account} library={library} />}
            {account && library && <WithdrawEth account={account} library={library} />}
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
  grid-template-columns: 1fr 1fr;
  gap: 1px;
`