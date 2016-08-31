import React from 'react'
import {Image} from 'components/misc'
import {Tab, TabSet} from 'components/tab'
import {Article} from 'components/page'
import Tutorial from './Tutorial'
import {Loop} from 'components/weather'

export default function Precipitation() {
    return (
        <Article title='Precipitation'>
            <TabSet>
                <Tab title='1h (HR)'>
                    <Loop type='AC_HRDPS_BC-LAM_1hr-precip' />
                </Tab>
                <Tab title='1h BC (HR)'>
                    <Loop type='AC_HRDPS_BC_wms-1hr-precip' />
                </Tab>
                <Tab title='Type (R)'>
                    <Image src='http://avalanche.ca/assets/images/weather/precipitation-precip_type.png' />
                </Tab>
                <Tab title='Tutorial'>
                    <Tutorial uid='precipitation' />
                </Tab>
            </TabSet>
        </Article>
    )
}