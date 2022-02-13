import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import Status from './components/Status'

const Hero = styled.div`
  
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin: auto auto 32px;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: left;
  margin-top: 62px;

  ${({ theme }) => theme.mediaQueries.lg} {
    
    
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const HeadingNew = styled(Heading)`
  color: #000000;
  font-size: 3rem;
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <HeadingNew >
         Coronian Swap Control
        </HeadingNew>
        <Text fontSize='1.75rem'>Weekly APR Reset through Governance</Text>
      </Hero>
      <div>
      <CakeStats/>
        <Cards>
          <FarmStakingCard />
          <Status/>
        </Cards>
      </div>
      
    </Page>
  )
}

export default Home
