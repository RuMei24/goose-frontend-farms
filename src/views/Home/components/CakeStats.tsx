import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(4, minmax(0px, 1fr));
  border-radius: 16px;
  display: grid;
  margin: 5px auto 30px;
`

const Row = styled.div`
  width:100%;
  font-size: 14px;
  margin-bottom: 8px;
  grid-column: span 1 / auto;
  text-align: center;
  padding: 20px;
  font-weight: 600;
`


const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const eggPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);

  let eggPerBlock = 0;
  if(farms && farms[0] && farms[0].eggPerBlock){
    eggPerBlock = new BigNumber(farms[0].eggPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeStats>

       
        <Row>
          <Text fontSize="1rem">Market Cap</Text>
          <Text bold fontSize="1.75rem" >$22,211</Text>
        </Row>
        <Row>
          <Text fontSize="1rem">Circulating SUpply</Text>
          <Text bold fontSize="1.75rem" >134,073</Text>
        </Row>
        <Row>
          <Text fontSize="1rem">Total Value Locked (TVL)</Text>
          <Text bold fontSize="1.75rem" >$58,026</Text>
        </Row>
        <Row>
          <Text fontSize="1rem">Cronian</Text>
          <Text bold fontSize="1.75rem" >$0.166</Text>
        </Row>
        <Row>
          <Text fontSize="1rem">Emission Rate</Text>
          <Text bold fontSize="1.75rem">0.01/second</Text>
        </Row>
        <Row>
          <Text fontSize="1rem">Protocol Status</Text>
          <Text bold fontSize="1.75rem">Launched. Awaiting Farming</Text>
        </Row>
        <Row>
          <Text fontSize="1rem">Burnt</Text>
          <Text bold fontSize="1.75rem">36,700</Text>
        </Row>
        <Row>
          <Text fontSize="1rem">APR Cycle</Text>
          <Text bold fontSize="1.75rem">Cycle #1</Text>
        </Row>
      
    </StyledCakeStats>
  )
}

export default CakeStats
