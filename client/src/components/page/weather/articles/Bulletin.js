import React, {PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Bulletin.css'

function Bulletin({ children }) {
    return (
        <section styleName='Bulletin'>
            <br />LONG RANGE PRECIPITATION FORECAST
            <br />Created at Fri Apr 29 02:45:13 PDT 2016
            <br />
            <br /># Time periods are defined as:
            <br /># Today:  12Z - 00Z (12 hours)
            <br /># Night:  00Z - 15Z (15 hours)
            <br /># Day2:   15Z - 06Z (15 hours)
            <br /># Day3:   06Z - 06Z (24 hours)
            <br /># Day4:   06Z - 06Z (24 hours)
            <br /># Day5:   06Z - 06Z (24 hours)
            <br /># Day6:   06Z - 06Z (24 hours)
            <br /># Day7:   06Z - 06Z (24 hours)
            <br /># Day8:   06Z - 06Z (24 hours)
            <br /># Day9:   06Z - 06Z (24 hours)
            <br /># Day10:  06Z - 06Z (24 hours)
            <br /># Based on mixed matrice: SCRIBE.MATRICE.04.29.06Z.m
            <br />
            <br />NORTH COASTAL/NORTHWESTERN
            <br />ID  Station              Today Night  Day2  Day3  Day4  Day5  Day6  Day7  Day8  Day9 Day10
            <br />------------------------------------------------------------------------------------------
            <br />YPR PRINCE RUPERT          1.1   0.0   8.8  14.2  10.3   2.6   0.9   0.6   6.7  12.1   6.0
            <br />RBS RAINBOW SUMMIT         2.1   0.0   9.1  10.8  12.2   4.8   1.8   0.9   6.7  13.1   6.2
            <br />YXT TERRACE                0.3   0.0   0.3   2.5   4.4  10.9   1.5   1.1   2.9   6.2   4.3
            <br />HSW STEWART                1.9   0.1   8.7  24.6   6.4   5.3   0.5   0.5   3.3   8.8   4.3
            <br />HDS DISRAELI  RAWS         1.0   2.3  28.0  53.8  12.5   4.9   1.6   1.0   5.8  15.3   6.3
            <br />V47 BEAR PASS              0.2   0.0   3.6   9.2   2.7   5.2   0.5   0.4   2.2   5.1   3.3
            <br />HBC BELLA COOLA RAWS       1.7   0.0   0.0   0.0   0.0   1.9   2.1   1.4   2.6   4.7   4.3
            <br />V24 SCAR CREEK             0.0   0.0   0.0   0.0   0.0   2.0   2.8   1.3   2.3   5.0   4.5
            <br />YZP SANDSPIT               1.5   1.1   7.4  10.8   6.1   1.4   0.5   1.2   6.1   6.8   1.4
            <br />HKM KITIMAT                0.5   0.0   1.2   4.3   6.3  12.2   2.1   1.2   4.0   8.5   5.9
            <br />AF2 BELLA BELLA            0.0   0.0   0.0   0.0   1.9   7.3   1.6   0.8   3.8  11.7   8.0
            <br />YBD BELLA COOLA AIRPORT    1.3   0.0   0.0   0.0   0.0   1.7   2.0   1.5   2.6   4.3   4.1
            <br />FAN ANAHIM LAKE            0.0   0.0   0.0   0.0   0.0   0.9   2.8   1.8   2.0   1.7   1.9
            <br />WPU PUNTZI MOUNTAIN        0.5   0.1   0.0   0.0   0.0   1.3   2.1   2.1   1.6   1.7   1.1
            <br />YYD SMITHERS               0.0   0.0   0.1   0.0   0.0   0.7   1.4   1.0   1.9   3.7   2.3
            <br />------------------------------------------------------------------------------------------
            <br />
            <br />NORTHWESTERN/HAINES-SKAGWAY
            <br />ID  Station              Today Night  Day2  Day3  Day4  Day5  Day6  Day7  Day8  Day9 Day10
            <br />------------------------------------------------------------------------------------------
            <br />HFR FRASER                 0.5   0.5   6.8   3.0  11.3   0.7   1.7   0.9   1.6   2.0   1.3
            <br />HAT ATLIN                  0.2   0.0   1.0   0.5   1.8   0.3   0.3   0.4   0.8   2.1   1.4
            <br />HLK CHILKAT PASS           4.8   3.1   9.8   3.9  12.5   1.9   2.1   1.2   2.2   2.6   1.3
            <br />HPC PLEASANT CAMP          3.0   4.1  16.5  10.1  22.6   3.8   2.9   1.9   3.6   4.4   2.5
            <br />FA4 CARCROSS               0.0   0.0   2.2   0.1   1.1   0.2   0.3   0.3   0.9   1.6   0.8
            <br />------------------------------------------------------------------------------------------
            <br />
            <br />DEASE LAKE/CASSIAR
            <br />ID  Station              Today Night  Day2  Day3  Day4  Day5  Day6  Day7  Day8  Day9 Day10
            <br />------------------------------------------------------------------------------------------
            <br />HCR CASSIAR                1.3   0.4   1.9   0.0   0.4   4.1   0.9   0.7   1.1   3.6   2.8
            <br />WDL DEASE LAKE             2.7   0.3   1.4   0.3   0.3   5.8   1.7   1.2   1.2   3.2   1.7
            <br />HTL TELEGRAPH CRK          0.0   0.1   0.3   0.2   0.1   1.8   1.1   0.5   1.3   2.2   1.1
            <br />HTA TATOGGA LAKE           0.2   0.0   1.4   0.2   0.7   6.9   1.8   1.6   1.8   2.2   2.2
            <br />HMG NINGUNSAW PASS         1.7   0.1   1.8   2.9   2.1   4.5   0.8   0.5   1.8   3.3   2.6
            <br />------------------------------------------------------------------------------------------
            <br />
            <br />SOUTH COASTAL
            <br />ID  Station              Today Night  Day2  Day3  Day4  Day5  Day6  Day7  Day8  Day9 Day10
            <br />------------------------------------------------------------------------------------------
            <br />WAE WHISTLER BLACKCOMB     1.1   0.1   0.0   0.0   0.0   5.9   3.2   2.0   1.4   4.3   3.8
            <br />VOA WHISTLER MNTN HIGH     0.9   0.1   0.0   0.0   0.0   5.8   3.5   2.1   1.5   4.4   4.0
            <br />VOD CALLAGHAN VALLEY       0.0   0.0   0.0   0.0   0.0   6.4   3.4   1.7   1.6   4.3   4.2
            <br />V43 BLACKCOMB              1.7   0.2   0.0   0.0   0.0   4.8   3.1   2.1   1.6   4.4   3.6
            <br />WGP PEMBERTON              0.5   0.2   0.0   0.0   0.0   3.9   2.4   1.9   1.2   3.0   3.4
            <br />WSK SQUAMISH               1.8   0.1   0.0   0.0   0.0   6.0   3.9   2.2   2.3   6.1   4.5
            <br />K21 SEYMOUR PK             0.6   0.0   0.0   0.0   0.0   2.8   2.3   1.8   2.4   5.5   3.3
            <br />V44 NORTHSHORE             0.3   0.0   0.0   0.0   0.0   3.1   2.7   1.3   2.3   5.1   3.3
            <br />WHC VANCOUVER HARBOUR      0.0   0.0   0.0   0.0   0.0   2.2   2.0   1.3   2.2   4.4   2.8
            <br />YVR VANCOUVER INTL         0.0   0.0   0.0   0.0   0.0   1.6   1.6   1.0   1.9   3.6   2.4
            <br />V40 PORT MANN              0.0   0.0   0.0   0.0   0.0   2.0   1.6   1.8   2.3   4.8   3.0
            <br />V21 UBC RESEARCH           0.5   0.1   0.0   0.0   0.0   2.3   1.9   2.3   2.7   5.7   3.8
            <br />YXX ABBOTSFORD             0.2   0.0   0.0   0.0   0.0   1.8   1.9   2.1   2.4   4.7   3.4
            <br />YHE HOPE                   2.4   1.1   0.0   0.0   0.0   0.4   1.6   2.0   1.5   3.3   2.3
            <br />K20 MT BAKER               6.3   0.7   0.0   0.0   0.0   0.6   3.0   3.7   3.0   3.5   3.1
            <br />HCS COQUIHALLA SUMMIT      3.3   0.5   0.0   0.0   0.0   0.2   1.2   2.6   1.4   1.8   1.0
            <br />HAL ALLISON PASS           1.1   0.3   0.0   0.0   0.0   0.2   1.4   3.0   2.3   1.2   1.0
            <br />WKV HOPE SLIDE             3.0   0.8   0.0   0.0   0.0   0.2   1.7   3.1   1.9   2.3   1.6
            <br />K19 HEMLOCK VALLEY         1.4   1.2   0.0   0.0   0.0   1.1   2.3   2.3   1.8   4.6   4.4
            <br />V12 SOOKE-CAMP BARNARD     0.0   0.0   0.0   0.0   0.0   0.3   1.6   0.3   1.7   1.7   1.6
            <br />V41 GIBSONS                0.1   0.0   0.0   0.0   0.0   2.0   2.8   0.9   2.1   4.2   2.9
            <br />V17 SALTSPRING             0.0   0.0   0.0   0.0   0.0   0.3   1.1   0.8   1.4   1.4   1.5
            <br />V14 SECHELT                0.0   0.0   0.0   0.0   0.0   2.0   3.2   0.8   2.1   4.2   3.1
            <br />YPW POWELL RIVER           0.0   0.0   0.0   0.0   0.0   1.5   4.3   1.4   1.9   3.2   3.7
            <br />------------------------------------------------------------------------------------------
            <br />
            <br />VANCOUVER ISLAND
            <br />ID  Station              Today Night  Day2  Day3  Day4  Day5  Day6  Day7  Day8  Day9 Day10
            <br />------------------------------------------------------------------------------------------
            <br />YYJ VICTORIA INTL          0.0   0.1   0.0   0.0   0.0   0.2   1.1   0.8   1.0   0.9   1.3
            <br />WLM GONZALES               0.0   0.0   0.0   0.0   0.0   0.1   1.0   0.7   0.9   0.7   0.8
            <br />HMW MT. WASHINGTON         0.1   0.0   0.0   0.0   0.0   1.1   1.3   1.9   4.0   2.9   3.7
            <br />YAZ TOFINO                 0.1   0.0   0.0   0.0   0.0   0.9   1.8   1.4   6.8   3.1   4.8
            <br />YQQ COMOX                  0.0   0.0   0.0   0.0   0.0   1.2   1.9   1.7   2.8   2.3   2.7
            <br />WQC PORT ALBERNI           1.8   0.0   0.0   0.0   0.0   0.8   1.7   1.5   4.0   2.5   2.3
            <br />YCD NANAIMO                0.0   0.0   0.0   0.0   0.0   0.5   1.7   0.5   2.0   2.5   1.8
            <br />YZT PORT HARDY             0.0   0.0   0.0   0.0   0.1   6.0   2.6   0.8   3.2   5.1   6.6
            <br />V04 WOSS CAMP              0.4   0.0   0.0   0.0   0.0   6.5   3.0   1.7   3.8   4.7   6.3
            <br />WEB ESTEVAN POINT          0.1   0.0   0.0   0.0   0.0   2.2   2.0   1.0   5.7   4.6   6.7
            <br />V15 BOWSER                 0.0   0.0   0.0   0.0   0.0   1.0   2.0   1.3   2.7   2.5   2.1
            <br />------------------------------------------------------------------------------------------
            <br />
            <br />CARIBOO MOUNTAINS/CENTRAL INTR
            <br />ID  Station              Today Night  Day2  Day3  Day4  Day5  Day6  Day7  Day8  Day9 Day10
            <br />------------------------------------------------------------------------------------------
            <br />YXS PRINCE GEORGE          0.0   0.0   0.0   0.0   0.0   0.8   2.1   2.6   1.3   0.8   1.1
            <br />HVD VANDERHOOF             0.0   0.0   0.0   0.0   0.0   0.5   1.3   2.0   1.4   1.1   2.4
            <br />WPZ BURNS LAKE             0.0   0.0   0.0   0.0   0.0   0.4   1.6   1.2   1.7   2.1   1.9
            <br />FLK LIKLEY                 0.0   0.0   0.0   0.0   0.0   1.6   3.0   3.2   1.3   2.4   1.5
            <br />HSK SLIM CREEK             0.3   0.0   0.0   0.0   0.0   0.7   2.2   4.4   1.5   1.8   1.9
            <br />FVA VALEMONT               0.6   2.0   0.0   0.0   0.0   0.6   4.5   4.3   1.4   2.2   4.3
            <br />HMB MCBRIDE                0.4   0.0   0.0   0.0   0.0   0.7   3.5   4.3   1.6   1.4   2.7
            <br />YWL WILLIAMS LAKE          0.0   0.0   0.0   0.0   0.0   0.4   1.4   2.5   1.0   2.2   1.6
            <br />YQZ QUESNEL                0.0   0.0   0.0   0.0   0.0   0.5   2.0   2.7   1.3   1.1   1.1
            <br />HBS BEGBIE SUMMIT          0.0   0.0   0.0   0.0   0.0   0.4   1.5   2.8   1.3   1.2   1.4
            <br />HAC ALEXIS CREEK           0.0   0.0   0.0   0.0   0.0   0.3   1.3   1.9   1.0   1.6   1.1
            <br />WCL CLINTON                0.1   0.0   0.0   0.0   0.0   0.4   0.9   2.5   1.7   1.4   1.7
            <br />------------------------------------------------------------------------------------------
            <br />
            <br />NORTH COLUMBIA/N THOMPSON
            <br />ID  Station              Today Night  Day2  Day3  Day4  Day5  Day6  Day7  Day8  Day9 Day10
            <br />------------------------------------------------------------------------------------------
            <br />HWE WELLS                  0.1   0.0   0.0   0.0   0.0   1.1   3.9   4.0   1.3   1.8   1.7
            <br />HBR BARRIERE               0.1   0.0   0.0   0.0   0.0   0.3   3.3   4.2   2.0   1.3   2.0
            <br />YCP BLUE RIVER             1.9   0.1   0.0   0.0   0.0   0.4   3.7   3.5   0.6   2.6   2.1
            <br />FCL CLEARWATER             0.0   0.0   0.0   0.0   0.0   0.4   3.9   4.2   1.6   2.5   2.3
            <br />BCR CARIBOU RIDGE          1.2   1.0   0.0   0.0   0.0   0.6   4.1   4.1   1.2   2.5   3.7
            <br />HFL FRED LAING             1.0   2.8   0.0   0.0   0.0   0.7   3.4   3.8   0.7   1.9   1.6
            <br />BAR ADAMANT RIDGE          1.0   2.5   0.5   0.0   0.0   1.8   3.6   4.2   1.4   2.1   2.2
            <br />BRP ROGERS PASS            2.0   6.1   0.6   0.0   0.0   1.4   3.2   4.3   3.0   3.0   3.3
            <br />HMC MICA                   1.0   1.7   0.0   0.0   0.0   0.7   3.5   3.8   0.7   2.0   1.6
            <br />HML 50 MILE                0.9   0.6   0.0   0.0   0.0   1.6   4.3   5.3   1.0   2.3   2.3
            <br />------------------------------------------------------------------------------------------
            <br />
            <br />SOUTH COLUMBIA/ KOOTENAYS
            <br />ID  Station              Today Night  Day2  Day3  Day4  Day5  Day6  Day7  Day8  Day9 Day10
            <br />------------------------------------------------------------------------------------------
            <br />YRV REVELSTOKE             0.6   3.2   0.2   0.0   0.0   1.8   4.7   4.7   2.7   2.7   3.1
            <br />YGE GOLDEN                 4.7   6.2   0.7   0.0   0.0   0.4   1.9   3.7   4.3   4.1   3.2
            <br />HKG KICKING HORSE MTN      5.0   5.4   1.1   0.0   0.0   0.3   1.7   3.4   4.3   4.4   3.2
            <br />WNP NAKUSP                 1.4   4.9   0.2   0.0   0.0   0.6   4.0   4.3   4.1   3.2   2.9
            <br />HTR TROUT LAKE             0.9   8.9   0.2   0.0   0.0   0.8   4.0   4.2   5.2   3.0   3.7
            <br />HFS FISH LAKE              9.1   8.6   0.2   0.0   0.0   0.4   2.8   2.7   2.7   4.7   5.0
            <br />HPW PANORAMA               5.8   4.1   0.0   0.0   0.0   0.0   0.6   1.7   3.5   5.1   3.5
            <br />HSP STAG LEAP              6.4   3.7   0.4   0.0   0.0   0.4   1.3   2.2   2.0   4.0   2.3
            <br />YCG CASTLEGAR              7.9   9.8   0.0   0.0   0.0   0.3   1.5   2.1   2.7   3.6   3.2
            <br />WJR CRESTON                3.7   0.0   0.3   0.0   0.0   0.2   0.8   1.9   2.2   4.4   1.7
            <br />WNM NELSON                10.3   8.7   0.0   0.0   0.0   0.4   1.8   2.2   2.2   3.9   4.4
            <br />HWT WHITEWATER            11.4   7.1   0.0   0.0   0.0   0.4   1.6   2.2   2.2   4.2   3.9
            <br />HRD ROSSLAND               3.7   7.5   0.0   0.0   0.0   0.1   1.3   2.1   3.5   3.4   2.5
            <br />HPL PAULSON SUMMIT         5.7   6.8   0.0   0.0   0.0   0.1   1.6   2.6   3.0   3.5   1.9
            <br />HGF GRAND FORKS            3.1   0.8   0.0   0.0   0.0   0.0   1.2   2.5   3.0   3.0   1.3
            <br />------------------------------------------------------------------------------------------
            <br />
            <br />OKANAGAN SOUTHERN INTERIOR
            <br />ID  Station              Today Night  Day2  Day3  Day4  Day5  Day6  Day7  Day8  Day9 Day10
            <br />------------------------------------------------------------------------------------------
            <br />K14 SILVER STAR            0.1   0.0   0.0   0.0   0.0   1.0   3.1   4.2   1.7   2.0   1.9
            <br />K13 SUN PEAKS              0.1   0.0   0.0   0.0   0.0   0.4   3.1   4.2   2.2   1.1   1.9
            <br />WJV VERNON                 0.3   0.0   0.0   0.0   0.0   0.7   2.7   4.4   2.1   1.9   1.7
            <br />HKK KALAMALKA LOOKOUT      0.3   0.0   0.0   0.0   0.0   0.6   2.5   4.4   2.2   1.7   1.6
            <br />K15 BIG WHITE              0.6   0.1   0.0   0.0   0.0   0.2   2.1   2.5   2.3   2.0   2.1
            <br />YLW KELOWNA                0.5   0.0   0.0   0.0   0.0   0.4   2.3   3.5   2.5   2.0   1.7
            <br />YYF PENTICTON              0.3   0.2   0.0   0.0   0.0   0.3   2.0   2.7   3.9   2.7   1.5
            <br />HAX APEX                   0.8   1.0   0.0   0.0   0.0   0.4   1.6   2.1   3.2   2.2   1.3
            <br />WSL SALMON ARM             0.4   0.0   0.0   0.0   0.0   1.2   3.8   5.5   1.8   2.1   2.1
            <br />MLK MALAKWA                0.7   0.6   0.0   0.0   0.0   1.7   4.3   5.0   1.3   2.9   2.7
            <br />YKA KAMLOOPS               0.1   0.0   0.0   0.0   0.0   0.3   2.3   4.3   2.3   1.1   1.5
            <br />HLA LARSON HILL            3.5   0.0   0.0   0.0   0.0   0.2   1.4   2.6   1.3   1.6   1.2
            <br />HOC PENNASK SUMMIT         0.8   0.6   0.0   0.0   0.0   0.5   2.0   2.1   2.6   2.1   1.3
            <br />FMT MERRITT                1.7   0.0   0.0   0.0   0.0   0.3   1.8   2.6   1.7   1.4   1.4
            <br />WLY LYTTON                 5.5   0.0   0.0   0.0   0.0   0.3   1.0   1.9   1.1   1.9   2.0
            <br />WKF LILLOOET               3.2   0.1   0.0   0.0   0.0   0.5   0.8   2.5   1.6   1.5   2.1
            <br />HJS JACKASS                4.1   0.1   0.0   0.0   0.0   0.3   1.0   1.7   1.0   2.3   1.9
            <br />V31 BOSTON BAR             3.6   0.4   0.0   0.0   0.0   0.2   0.8   1.6   1.3   2.1   1.7
            <br />------------------------------------------------------------------------------------------
            <br />
            <br />NORTHERN ROCKIES
            <br />ID  Station              Today Night  Day2  Day3  Day4  Day5  Day6  Day7  Day8  Day9 Day10
            <br />------------------------------------------------------------------------------------------
            <br />HPP PINE PASS              0.0   0.0   0.0   0.0   0.0   0.4   1.3   1.7   2.3   2.2   2.6
            <br />YDQ DAWSON CREEK           0.7   0.0   0.0   0.0   0.0   0.3   1.3   3.0   3.1   1.9   0.5
            <br />YCQ CHETWYND               0.0   0.0   0.0   0.0   0.0   0.3   1.5   1.7   2.6   2.1   0.7
            <br />BX7 TUMBLER RIDGE          0.0   0.0   0.0   0.0   0.0   0.4   2.3   2.3   2.4   2.7   0.6
            <br />YXJ FORT ST JOHN           0.0   0.0   0.0   0.0   0.0   0.3   1.3   2.1   2.6   1.5   0.4
            <br />YYE FORT NELSON            2.2   0.0   0.0   0.0   0.1   0.6   0.9   2.5   2.8   1.2   1.8
            <br />WKS SIKANNI CHIEF          0.0   0.0   0.0   0.0   0.0   0.4   2.3   4.7   3.0   1.3   1.4
            <br />YZY MACKENZIE ARPT         0.0   0.0   0.0   0.0   0.0   0.6   1.0   2.1   2.5   2.3   3.1
            <br />WWQ MUNCHO LAKE            5.5   0.0   0.3   0.0   0.0   4.8   2.0   2.3   1.5   2.1   2.6
            <br />WTH TETSA RIVER           12.8   0.0   0.0   0.0   0.0   0.5   1.6   4.7   2.9   3.0   4.3
            <br />HPS PRESPATOU              0.0   0.0   0.0   0.0   0.0   0.4   1.5   2.0   1.9   0.7   1.1
            <br />CFH HUDSONS HOPE           0.0   0.0   0.0   0.0   0.0   0.2   1.3   2.3   3.6   1.4   1.0
            <br />------------------------------------------------------------------------------------------
            <br />
            <br />CENTRAL ROCKIES
            <br />ID  Station              Today Night  Day2  Day3  Day4  Day5  Day6  Day7  Day8  Day9 Day10
            <br />------------------------------------------------------------------------------------------
            <br />WJA JASPER                 0.3   2.2   0.0   0.0   0.0   0.0   3.8   3.8   2.7   2.1   3.5
            <br />WBA BANFF                  3.3   0.3   0.8   0.0   0.0   0.0   1.4   1.9   4.1   6.0   3.5
            <br />WYL YOHO PARK              3.4   2.3   1.5   0.0   0.0   0.0   1.7   2.8   3.8   5.6   2.9
            <br />YYC CALGARY INTL           0.0   0.0   0.1   0.0   0.0   0.0   0.5   1.6   2.4   3.3   2.8
            <br />------------------------------------------------------------------------------------------
            <br />
            <br />SOUTH ROCKIES
            <br />ID  Station              Today Night  Day2  Day3  Day4  Day5  Day6  Day7  Day8  Day9 Day10
            <br />------------------------------------------------------------------------------------------
            <br />HFE FERNIE                 0.7   0.4   0.0   0.0   0.0   0.2   0.5   1.3   3.2   4.4   1.9
            <br />HIV INVERMERE              3.6   3.2   0.0   0.0   0.0   0.0   0.4   1.7   4.0   5.6   3.3
            <br />WSW SPARWOOD               0.2   0.6   1.0   0.0   0.0   0.0   0.3   1.2   3.2   4.3   2.0
            <br />YXC CRANBROOK              0.8   2.1   0.0   0.0   0.0   0.0   0.4   1.0   3.2   5.2   2.0
            <br />K12 FORDING COAL MTN       0.7   0.0   0.0   0.0   0.0   0.1   0.4   1.1   3.1   4.5   1.8
            <br />K17 KIMBERLY               2.0   0.6   0.1   0.0   0.0   0.0   0.4   1.1   3.0   5.5   2.3
            <br />------------------------------------------------------------------------------------------
            <br />
            <br />ALBERTA ROCKIES
            <br />ID  Station              Today Night  Day2  Day3  Day4  Day5  Day6  Day7  Day8  Day9 Day10
            <br />------------------------------------------------------------------------------------------
            <br />ZPC PINCHER CREEK          0.0   0.0   0.0   0.0   0.0   0.0   0.1   0.9   3.4   3.6   1.8
            <br />YYC CALGARY INTL           0.0   0.0   0.1   0.0   0.0   0.0   0.5   1.6   2.4   3.3   2.8
            <br />------------------------------------------------------------------------------------------
            <br />
            <br />NORTHERN YUKON
            <br />ID  Station              Today Night  Day2  Day3  Day4  Day5  Day6  Day7  Day8  Day9 Day10
            <br />------------------------------------------------------------------------------------------
            <br />YOC OLD CROW               0.0   0.1   0.2   0.5   4.1   6.5   1.6   0.6   1.1   0.7   1.2
            <br />WRR ROCK RIVER             0.0   0.0   0.0   0.1   6.8   5.5   2.5   1.6   1.1   0.8   1.1
            <br />ZFM FORT MCPHERSON         0.0   0.2   0.2   0.4   9.7   3.9   1.4   0.7   0.8   1.0   3.2
            <br />------------------------------------------------------------------------------------------
            <br />
            <br />CENTRAL YUKON
            <br />ID  Station              Today Night  Day2  Day3  Day4  Day5  Day6  Day7  Day8  Day9 Day10
            <br />------------------------------------------------------------------------------------------
            <br />KNO KENO                   0.0   0.1   0.8   0.1   7.0   1.9   3.7   1.0   1.1   2.0   1.9
            <br />YDA DAWSON                 1.2   1.8   0.7   0.0  15.4   2.6   5.2   1.2   0.7   2.3   2.0
            <br />YMA MAYO                   0.0   0.0   1.0   0.0   4.4   1.3   2.9   0.9   1.4   1.7   2.2
            <br />FQ6 PELLY CROSSING         0.0   0.7   1.3   0.0   1.0   0.7   3.1   1.6   0.6   1.6   2.5
            <br />YXQ BEAVER CREEK           0.4   0.0   0.0   1.7   1.1   1.4   3.1   0.7   0.4   2.9   3.3
            <br />STC STEWART CROSSING       0.0   0.4   1.2   0.0   1.4   1.1   3.7   1.0   0.5   1.4   1.6
            <br />EX4 CARMACKS               0.0   0.0   0.4   0.0   0.3   0.8   3.0   0.9   0.4   1.1   1.8
            <br />WUM FARO                   0.0   0.0   0.9   0.0   1.0   0.8   2.0   1.5   0.2   1.6   1.6
            <br />------------------------------------------------------------------------------------------
            <br />
            <br />SOUTHERN YUKON
            <br />ID  Station              Today Night  Day2  Day3  Day4  Day5  Day6  Day7  Day8  Day9 Day10
            <br />------------------------------------------------------------------------------------------
            <br />YDB BURWASH                1.4   0.0   0.1   0.0   1.3   1.1   1.9   1.2   0.3   1.5   1.3
            <br />WHT HAINES JUNCTION        0.0   0.0   3.1   0.1   4.1   0.3   1.0   0.8   0.8   1.6   0.8
            <br />PTM PILOT MOUNTAIN         0.0   0.0   1.8   0.0   0.0   0.4   1.3   0.7   0.3   0.9   1.1
            <br />YXY WHITEHORSE             0.0   0.0   2.0   0.0   0.0   0.3   0.7   0.7   0.8   1.5   1.1
            <br />TGS TAGISH                 0.0   0.0   0.9   0.0   0.2   0.3   0.4   0.4   1.0   1.8   1.0
            <br />WZW TESLIN                 0.0   0.0   0.8   0.1   0.3   0.6   0.7   0.9   0.6   2.1   1.9
            <br />YQH WATSON LAKE            1.0   0.0   0.7   0.1   0.0   0.6   1.4   1.0   1.6   3.2   3.7
            <br />------------------------------------------------------------------------------------------
        </section>
    )
}

export default CSSModules(Bulletin, styles)
