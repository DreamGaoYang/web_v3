import React from 'react'
import { useIntl } from 'react-intl'

import gov_1 from 'assets/v3/gov-1.svg'
import gov_2 from 'assets/v3/gov-2.svg'
import bg_logo from 'assets/v3/bg-logo.svg'



const Item: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage
    // {/* {fmt({ id: "Investors" })} */}

    return (
        <>
            <div className={'Gov-wrap'}>
                <div className={'Gov--subpics'}>
                    <img src={bg_logo} alt="" />
                </div>

                <div className={'Gov'}>
                    <div className={'Gov-title'}>Governance</div>
                    <div className={'Gov-title-sub'}>
                        Handing over the control of dForce to a distributed community united by DF tokens.
                    </div>

                    <div className={'Gov-item-wrap'}>
                        <div className={'Gov-item'}>
                            <div className={'Gov-proiect-name'}>
                                <img src={gov_1} alt="" />
                            </div>
                            <div className={'Gov-proiect-content'}>
                                Discussions around how to shape the future of dForce.
                            </div>
                            <div className={'Gov-proiect-link-wrap'}>
                                <a className={'Gov-proiect-link'} href="https://forum.dforce.network" target="_blank" rel="noreferrer">
                                    Forum
                                </a>
                            </div>
                        </div>

                        <div className={'Gov-item'}>
                            <div className={'Gov-proiect-name'}>
                                <img src={gov_2} alt="" />
                            </div>
                            <div className={'Gov-proiect-content'}>
                                Collectively decide on proposed protocol changes.
                            </div>
                            <div className={'Gov-proiect-link-wrap'}>
                                <a className={'Gov-proiect-link'} href="https://snapshot.org/#/dforcenet.eth" target="_blank" rel="noreferrer">
                                    Snapshot
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item