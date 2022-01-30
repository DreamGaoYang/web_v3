import React from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import bg from 'assets/v3/Features_bg.svg'
import Vault from 'assets/v3/Features_Vault.svg'
import Bridge from 'assets/v3/Features_Bridge.svg'
import PDLP from 'assets/v3/Features_PDLP.svg'
import POO from 'assets/v3/Features_POO.svg'



const Features: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage
    const intl_locale = intl.locale

    return (
        <SectionWrap>
        <Section>
            <LeftSection>
                <Title>Features</Title>
                <Item>
                    <Icon src={Vault}></Icon>
                    <Sec>
                        <SubTitle>Valut</SubTitle>
                        <Para>
                        Expanding USX’s collateral to a broader category of assets with isolated pools and customized risk parameters.
                        </Para>
                    </Sec>
                </Item>
                <Item>
                    <Icon src={PDLP}></Icon>
                    <Sec>
                        <SubTitle>Bridge</SubTitle>
                        <Para>
                        Enable immediate swaps of dForce-backed assets between different blockchain ecosystems. 
                        </Para>
                    </Sec>
                </Item>
            </LeftSection>
            <RightSection>
                <Item>
                    <Icon src={Bridge}></Icon>
                    <Sec>
                        <SubTitle>Protocol-Direct-Liquidity-Provision (PDLP)</SubTitle>
                        <Para>
                        Combat USX and EUX liquidity shortage for whitelisted protocols integrated with USX and EUX.
                        </Para>
                    </Sec>
                </Item>
                <Item>
                    <Icon src={POO}></Icon>
                    <Sec>
                        <SubTitle>Protocol-Owned-Operator (POO)</SubTitle>
                        <Para>
                        Leverage protocol owned liquidity to ensure supply and demand are in equilibrium with optimized efficiency.
                        </Para>
                    </Sec>
                </Item>
            </RightSection>
        </Section>
        </SectionWrap>
    )
}
const SectionWrap = styled.div`
    display:flex;
    width:1920px;
    height:auto;
    justify-content: center;
    position:relative;
    left: 50%;
    transform: translateX(-50%);
    flex-direction:column;
    align-items: center;
    background-image: url(${bg});
    background-position:center top;
    background-size: cover;
    @media (max-width: 767px) {
        width:100vw;
    }
`
const Section = styled.section`
    display:flex;
    width:1200px;
    height:auto;
    overflow: hidden;
    margin: 0 auto 180px;
    @media (max-width: 767px) {
        width:calc(100vw - 60px);
        flex-direction:column;
        margin: 0;
    }
`
const LeftSection = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right:32px;
    @media (max-width: 767px) {
        margin-right:0;
    }
`
const Title = styled.div`
    font-size: 70px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 85px;
    margin-bottom:60px;
    @media (max-width: 767px) {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 25px;
        text-align: center;
    }
`
const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width:584px;
    height:550px;
    padding:50px 40px 50px;
    box-sizing: border-box;
    background: linear-gradient(136deg, #0A0B1F 0%, rgba(17, 18, 43, 0.08) 100%);
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    margin-bottom:36px;
    @media (max-width: 767px) {
        width:calc(100vw - 60px);
        height:290px;
        padding:25px 20px 25px;
        flex-direction:column;
    }
`
const Icon = styled.img`
    width:120px;
    height:130px;
    @media (max-width: 767px) {
        width:60px;
        height:65px;
    }
`
const Sec =styled.div`

`
const SubTitle = styled.div`
    color:#fff;
    font-size: 40px;
    font-weight: bold;
    line-height: 48px;
    margin-bottom:21px;
    @media (max-width: 767px) {
        font-size: 24px;
        line-height: 27px;
        margin-bottom:10px;
    }
`
const Para = styled.div`
    max-width: 485px;
    color:#fff;
    line-height: 38px;
    font-size: 20px;
    font-weight: 500;
    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 23px;
    }
`
const RightSection = styled.section`
    display:flex;
    flex-direction: column;
`
export default Features