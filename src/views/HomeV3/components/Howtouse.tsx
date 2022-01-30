import React from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import Lending from 'assets/v3/Use_Lending.svg'
import Multi from 'assets/v3/Use_Multi.svg'
import Trading  from 'assets/v3/Use_Trading.svg'
import Staking from 'assets/v3/Use_Staking.svg'


const Howtouse: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage
    // {/* {fmt({ id: "Investors" })} */}

    return (
        <Section>
            <Title>
                How to use dForce
            </Title>
            <List>
                <Item>
                    <Icon src={Lending}></Icon>
                    <SubTitle>Lending</SubTitle>
                    <Para>
                    Enabling decentralized lending and borrowing through smart contracts, automating the execution on the protocol. 
                    </Para>
                </Item>
                <Item>
                    <Icon src={Multi}></Icon>
                    <SubTitle>Multi-Currency Stablecoins</SubTitle>
                    <Para>
                    Over-collateralized stablecoins minted against a variety of interest-carrying collaterals, tracking the price of different fiat currencies. 
                    </Para>
                </Item>
                <Item>
                    <Icon src={Trading}></Icon>
                    <SubTitle>Trading</SubTitle>
                    <Para>
                    Peer-to-Peer marketplace with aggregated liquidity across different platforms with the best price.
                    </Para>
                </Item>
                <Item>
                    <Icon src={Staking}></Icon>
                    <SubTitle>Staking</SubTitle>
                    <Para>
                    A hybrid staking model for DF holders to capture fee income, inflationary rewards, ecosystem airdrop across the network.
                    </Para>
                </Item>
            </List>
        </Section>
    )
}
const Section = styled.section`
    display:flex;
    width:1200px;
    height:auto;
    overflow: hidden;
    margin: -450px auto 0;
    flex-direction:column;
    @media (max-width: 767px) {
        width:calc(100vw - 40px);
        margin: -240px auto 0;
    }
`
const Title = styled.div`
    text-align: center;
    font-size: 54px;
    font-weight: bold;
    color: #FFFFFF;
    margin: 0 auto 86px;
    @media (max-width: 767px) {
        font-size: 24px;
        margin: 0 auto 40px;
    }
`
const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
`
const Item = styled.li`
    width:50%;
    margin-bottom: 90px;
    &:nth-child(3),&:nth-child(4){
        margin-bottom: 0;
    }
    @media (max-width: 767px) {
        width:100%;
        margin-bottom: 40px;
        &:nth-child(3){
            margin-bottom: 40px;
        }
        &:nth-child(4){
            margin-bottom: 0;
        }
    }
`
const Icon = styled.img`
    width:90px;
    height:90px;
    margin-bottom: 20px;
    @media (max-width: 767px) {
        width:45px;
        height:45px;
        margin-bottom: 10px;
    }
`
const SubTitle = styled.div`
    font-size: 26px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 31px;
    margin-bottom:10px;
    @media (max-width: 767px) {
        font-size: 17px;
        line-height: 20px;
    }
`
const Para = styled.div`
    max-width: 550px;
    font-size: 18px;
    font-weight: normal;
    color: #FFFFFF;
    line-height: 32px;
    opacity: 0.7;
    @media (max-width: 767px) {
        max-width: 100%;
        font-size: 12px;
        line-height: 20px;
    }
`
export default Howtouse