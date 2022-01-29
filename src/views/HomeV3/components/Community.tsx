import React from 'react'
import { useIntl } from 'react-intl'

import Community_Twitter from 'assets/v3/Community-Twitter.svg'
import Community_Medium from 'assets/v3/Community-Medium.svg'
import Community_Forum from 'assets/v3/Community-Forum.svg'
import Community_Telegram from 'assets/v3/Community-Telegram.svg'
import Community_Discord from 'assets/v3/Community-Discord.svg'
import Community_youtube from 'assets/v3/Community-youtube.png'



const Item: React.FC = () => {
    const intl = useIntl()
    const fmt = intl.formatMessage

    return (
        <>
            <div className={'Community'}>
                <div className={'Community-title'}>
                    {/* {fmt({ id: "Investors" })} */}
                    Community
                </div>
                <div className={'Community-title--sub'}>
                    Join our community to get updates on new products and features, engage in governance discussions, and reinvent finance together!
                </div>


                <div className={'Community-wrap'}>
                    <div className={'Community-item'}>
                        <div className={'Community-img-wrap'}>
                            <img src={Community_Twitter} alt="" />
                        </div>
                        <div className={'Community-item--title'}>Twitter</div>
                    </div>

                    <div className={'Community-item'}>
                        <div className={'Community-img-wrap'}>
                            <img src={Community_Medium} alt="" />
                        </div>
                        <div className={'Community-item--title'}>Medium</div>
                    </div>

                    <div className={'Community-item'}>
                        <div className={'Community-img-wrap'}>
                            <img src={Community_Forum} alt="" />
                        </div>
                        <div className={'Community-item--title'}>Forum</div>
                    </div>

                    <div className={'Community-item'}>
                        <div className={'Community-img-wrap'}>
                            <img src={Community_Telegram} alt="" />
                        </div>
                        <div className={'Community-item--title'}>Telegram</div>
                    </div>

                    <div className={'Community-item'}>
                        <div className={'Community-img-wrap'}>
                            <img src={Community_Discord} alt="" />
                        </div>
                        <div className={'Community-item--title'}>Discord</div>
                    </div>

                    <div className={'Community-item'}>
                        <div className={'Community-img-wrap'}>
                            <img src={Community_youtube} alt="" />
                        </div>
                        <div className={'Community-item--title'}>youtube</div>
                    </div>
                </div>



            </div>
        </>
    )
}
export default Item