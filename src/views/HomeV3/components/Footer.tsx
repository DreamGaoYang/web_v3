import React from 'react'
import { useIntl } from 'react-intl'

import df_logo from 'assets/v3/df-logo.svg'



const Item: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage

    return (
        <>
            <div className={'Footer-wrap'}>
                <div className={'Footer'}>
                    <div className={'Footer-left'}>
                        {/* {fmt({ id: "Investors" })} */}
                        <div className={'logo-wrap'}>
                            <a href="#">
                                <img src={df_logo} alt="" />
                            </a>
                        </div>
                        <div className={'logo-contact'}>
                            <a href="#">
                                contact@dforce.network
                            </a>
                        </div>
                    </div>


                    <div className={'Footer-rightWrap'}>
                        <div className={'Footer-rightItem'}>
                            <div className={'Footer-right--title'}>
                                Resources
                            </div>
                            <div className={'Footer-right--itemwrap'}>
                                <div className={'Footer-right--item'}>
                                    <a href="#">
                                        Protocols
                                    </a>
                                </div>
                                <div className={'Footer-right--item'}>
                                    <a href="#">
                                        Documentation
                                    </a>
                                </div>
                                <div className={'Footer-right--item'}>
                                    <a href="#">
                                        Medium
                                    </a>
                                </div>
                                <div className={'Footer-right--item'}>
                                    <a href="#">
                                        FAQs
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={'Footer-rightItem'}>
                            <div className={'Footer-right--title'}>
                                Developer
                            </div>
                            <div className={'Footer-right--itemwrap'}>
                                <div className={'Footer-right--item'}>
                                    <a href="#">
                                        GitHub
                                    </a>
                                </div>
                                <div className={'Footer-right--item'}>
                                    <a href="#">
                                        Integration Guides
                                    </a>
                                </div>
                                <div className={'Footer-right--item'}>
                                    <a href="#">
                                        Audit Reports
                                    </a>
                                </div>
                                <div className={'Footer-right--item'}>
                                    <a href="#">
                                        Bug Bounty
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={'Footer-rightItem'}>
                            <div className={'Footer-right--title'}>
                                Governance
                            </div>
                            <div className={'Footer-right--itemwrap'}>
                                <div className={'Footer-right--item'}>
                                    <a href="#">
                                        Snapshot
                                    </a>
                                </div>
                                <div className={'Footer-right--item'}>
                                    <a href="#">
                                        Forum
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item