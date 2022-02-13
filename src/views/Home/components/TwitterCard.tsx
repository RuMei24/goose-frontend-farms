import React from 'react'
import { Card, CardBody, Heading, Text} from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`
const NewText = styled(Text)`
  font-size: 0.9rem;
  text-decoration: underline;
  color: rgb(106, 185, 212);
  
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`
const Test = styled.div`
  font-size: 1rem;
  margin-top: 0px;
`

const Block = styled.div`
  font-size: 1rem;
 
`

const Para = styled.div`
  display: grid;
  grid-template-columns: 3fr 1.5fr;
  margin-bottom: 16px;
`

const Title = styled.div`
  font-size: 1.75rem;
  margin-bottom: 16px;
  font-weight: 600;
  color: rgb(37, 52, 73)
`
const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Test>
        <text>Stay Ahead with our development</text>
        </Test>
        <Title>Protocol Status</Title>
        <Para>
          <Block>
          <text fontSize='1.1rem'>KYC Status</text>
          <NewText><a href="https://rugdoc.io/project/cronianswap/">RugDoc KYC Completed</a></NewText>
          </Block>
          <text fontSize='1.1rem'>Completed</text>
        </Para>
        <Para>
          <Block>
          <text fontSize='1.1rem'>Launch Status</text>
          <NewText><a href="https://rugdoc.io/project/cronianswap/">Launched. Awaiting Farming</a></NewText>
          </Block>
          <text fontSize='1.1rem'>Dex Listing Completed</text>
        </Para>
        <Para>
          <Block>
          <text fontSize='1.1rem'>APR Reset Status</text>
          <NewText><a href="https://rugdoc.io/project/cronianswap/">Redirect to APR Reset</a></NewText>
          </Block>
          <text fontSize='1.1rem'>7 Days Left</text>
        </Para>
        <Para>
          <Block>
          <text fontSize='1.1rem'>Liquidity Lock</text>
          <NewText><a href="https://rugdoc.io/project/cronianswap/">Locked With RugDoc</a></NewText>
          </Block>
          <text fontSize='1.1rem'>Locked with RugDoc Liquidity Lock</text>
        </Para>


      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
