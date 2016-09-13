import React, {createElement} from 'react'
import CSSModules from 'react-css-modules'
import {Media, Caption, Player} from 'components/media'
import {InnerHTML, Ribbon} from 'components/misc'
import styles from './Video.css'

const {assign} = Object

function Video({caption, credit, ribbonCaption, ribbonTitle, ...player}) {
    const media = {}

    if (caption || credit) {
        assign(media, {
            caption: (
                <Caption>
                    <InnerHTML>
                        {caption}
                    </InnerHTML>
                </Caption>
            )
        })
    }

    return (
        <div>
            {ribbonTitle &&
                <Ribbon caption={ribbonCaption}>
                    {ribbonTitle}
                </Ribbon>
            }
            <Media {...media} >
                <Player {...player} />
            </Media>
        </div>
    )
}

function VideoSet({content}) {
    const {length} = content

    return (
        <div styleName='VideoSet'>
            {content.map(props => createElement(Video, props))}
        </div>
    )
}

export default CSSModules(VideoSet, styles)