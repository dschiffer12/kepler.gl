// Copyright (c) 2023 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Base} from '../base';

export default class ScenegraphLayerIcon extends Component {
  static propTypes = {
    /** Set the height of the icon, ex. '16px' */
    height: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    height: '16px',
    predefinedClassName: 'scenegraph-layer-icon',
    totalColor: 3
  };

  render() {
    return (
      <Base {...this.props}>
        <g transform="translate(-20, -99)" id="layer1">
          <g transform="matrix(0.26458333,0,0,0.26458333,-191.59545,42.388813)" id="g3042">
            <ellipse
              id="path2999"
              cx="931.42627"
              cy="431.70096"
              rx="62.283249"
              ry="3.8673975"
              transform="matrix(1.0332818,0,0,0.76491127,-30.674511,101.23938)"
            />
            <g id="g7696" transform="translate(525.68251,-207.68859)">
              <path
                id="path7668"
                d="m 393.98828,480.0918 c -10.68594,0.80336 -21.57673,7.18633 -28.60547,16.5332 -1.00324,0.62224 -3.5626,2.19214 -5.32812,2.97656 -2.56279,1.13864 -5.17733,2.74246 -7.98047,2.66016 -1.90943,-0.0561 -3.53566,-1.4477 -5.32031,-2.12891 -4.53998,-1.72443 -9.58546,-5.01773 -13.83594,-1.06445 -1.06796,1.52824 -0.66318,3.76636 -0.26563,5.58789 0.61739,2.82883 2.18398,5.45191 3.99024,7.71484 2.3163,2.9019 8.51367,7.1836 8.51367,7.1836 0,0 -5.90097,1.56898 -7.18164,3.99023 -0.45797,0.86587 -0.24013,2.08692 0.26562,2.92578 1.09219,1.81161 3.30762,2.80797 5.32032,3.45899 4.02627,1.30232 8.51745,-0.13838 12.67968,0.625 1.31495,0.24117 2.49566,1.01912 3.81446,1.23828 0.60636,0.10077 1.45382,0.0869 2.07422,0.0664 1.72295,3.33668 4.08103,6.36876 7.15625,8.80468 0,0 -2.22425,5.11025 -3.72266,7.44532 -8.94053,13.58909 -24.40686,25.32714 -26.73438,43.99218 0.0505,12.91431 6.57316,25.37407 16.24415,32.82422 16.96401,13.06839 41.70379,15.60258 62.9414,12.85938 19.21169,-2.48152 39.64942,-10.88975 52.11328,-25.71875 8.24478,-9.80932 10.46731,-24.07583 10.82813,-36.88477 0.29354,-10.4205 0.0459,-22.87017 -7.10547,-30.45508 -2.17907,-2.31118 -6.14999,-3.78838 -9.13672,-2.70703 -3.82412,1.38452 -4.00601,7.16466 -6.76758,10.15039 -2.72735,2.94875 -5.62298,6.30576 -9.47461,7.44531 -2.38943,0.70694 -5.03518,-0.0449 -7.44531,-0.67773 -7.17835,-1.88468 -13.0331,-7.65187 -20.30469,-9.13672 -5.52704,-1.1286 -16.91992,0.33984 -16.91992,0.33984 l 6.0918,-3.38476 c 0,0 10.28858,-6.55346 13.53515,-11.50586 4.26486,-6.50575 7.12111,-14.56296 6.76758,-22.33398 -0.86105,-19.16955 -13.62762,-32.46378 -36.20703,-32.82422 z"
              />
              <path
                id="path7007"
                d="m 338.82884,592.10146 c 2.32751,-18.66504 17.79291,-30.40265 26.73344,-43.99174 1.49841,-2.33507 3.72237,-7.44474 3.72237,-7.44474 -9.72152,-7.70054 -12.30749,-21.34514 -10.15193,-31.80941 4.68877,-15.70277 19.97053,-27.64482 34.85497,-28.76382 22.57941,0.36044 35.34754,13.65505 36.20859,32.8246 0.35353,7.77102 -2.5031,15.82851 -6.76796,22.33426 -3.24657,4.9524 -13.53592,11.50552 -13.53592,11.50552 l -6.09116,3.38399 c 0,0 11.39286,-1.467 16.9199,-0.3384 7.27159,1.48485 13.12552,7.25206 20.30387,9.13674 2.41013,0.63278 5.05533,1.38374 7.44476,0.6768 3.85163,-1.13955 6.74779,-4.496 9.47514,-7.44475 2.76157,-2.98573 2.94384,-8.76743 6.76796,-10.15195 2.98673,-1.08135 6.95767,0.39601 9.13674,2.70719 7.15138,7.58491 7.3999,20.03532 7.10636,30.45582 -0.36082,12.80894 -2.58395,27.07605 -10.82873,36.88537 -12.46386,14.829 -32.9016,23.23673 -52.11329,25.71825 -21.23761,2.7432 -45.97799,0.20927 -62.942,-12.85912 -9.67099,-7.45015 -16.19266,-19.9103 -16.24311,-32.82461 z"
              />
              <path
                id="path7009"
                d="m 338.82929,592.10139 c 0.0504,12.91431 6.57076,25.37435 16.24175,32.82449 16.96402,13.0684 41.70592,15.60201 62.94353,12.85882 16.49647,-2.13082 33.88089,-8.64571 46.3608,-19.82886 -11.1421,7.01421 -24.41974,11.29014 -37.17209,12.93733 -21.23762,2.74319 -45.97952,0.20958 -62.94353,-12.85882 -9.67099,-7.45014 -16.19132,-13.1378 -16.24175,-26.05211 1.29011,-12.22719 20.91701,-42.26515 18.15858,-41.25572 -2.75843,1.00943 -27.16334,24.82083 -27.34729,41.37487 z"
              />
              <path
                id="path7019"
                d="m 377.39451,569.59751 c 5.20454,-4.30421 12.0709,-7.93589 18.81215,-7.52486 10.1405,0.6183 16.82414,12.34588 26.71325,14.67347 9.16319,2.15674 28.21822,-1.12873 28.21822,-1.12873 0,0 -5.26736,15.74679 -10.91105,21.44586 -7.06529,7.13462 -16.80867,12.27156 -26.71325,13.92098 -8.25808,1.37523 -17.24717,-0.21883 -24.83203,-3.76243 -6.52035,-3.04627 -12.9578,-7.86122 -16.17845,-14.29723 -2.08339,-4.16338 -2.25437,-9.40356 -1.12872,-13.92099 0.90003,-3.61206 3.15128,-7.0337 6.01988,-9.40607 z"
              />
              <circle
                transform="matrix(1.0416624,0,0,1.0416624,-10.12887,-52.065753)"
                r="8"
                cy="542.64807"
                cx="388.79144"
                id="path7031"
              />
              <circle
                transform="matrix(1.1485883,0,0,1.1485883,-51.700726,-110.08886)"
                id="circle7125"
                cx="384.53302"
                cy="599.31769"
                r="8"
              />
              <path
                id="path7130"
                d="m 362.8314,531.83625 c 0,0 -1.86312,0.10762 -2.77606,-0.0441 -1.3188,-0.21916 -2.50024,-0.99563 -3.81519,-1.2368 -4.16223,-0.76338 -8.65327,0.67681 -12.67954,-0.62551 -2.0127,-0.65102 -4.22868,-1.64695 -5.32087,-3.45856 -0.50575,-0.83886 -0.72402,-2.06062 -0.26605,-2.92649 1.28067,-2.42125 7.18318,-3.99065 7.18318,-3.99065 0,0 -6.1971,-4.28129 -8.5134,-7.18319 -1.80626,-2.26293 -3.37327,-4.88645 -3.99066,-7.71528 -0.39755,-1.82153 -0.80191,-4.05867 0.26605,-5.58691 4.25048,-3.95328 9.29431,-0.66025 13.83429,1.06418 1.78465,0.68121 3.41144,2.07223 5.32087,2.12834 2.80314,0.0823 5.41853,-1.5218 7.98132,-2.66044 2.14112,-0.9513 6.11901,-3.45857 6.11901,-3.45857 0,0 -2.51761,3.36571 -3.19252,5.32088 -0.6999,2.02751 -0.77532,4.24025 -0.79815,6.38505 -0.0274,2.58533 0.36815,5.1658 0.79815,7.71527 0.51514,3.05437 2.24347,5.95014 2.12834,9.0455 -0.0938,2.52426 -2.27877,7.22725 -2.27877,7.22725 z"
              />
              <ellipse
                transform="rotate(-70.917917)"
                ry="8.876749"
                rx="11.292704"
                cy="523.04565"
                cx="-351.69467"
                id="path7132"
              />
              <ellipse
                id="ellipse7134"
                cx="-371.65863"
                cy="539.63354"
                rx="6.4400997"
                ry="5.6922021"
                transform="matrix(0.3727878,-0.92791662,0.95838646,0.28547397,0,0)"
              />
              <ellipse
                transform="matrix(1.2858994,0,0,1.2858994,493.87481,-538.72884)"
                ry="1.7910415"
                rx="1.877719"
                cy="810.7829"
                cx="-89.047676"
                id="path7136"
              />
              <path
                transform="matrix(1.1485883,0,0,1.1485883,-51.700726,-110.08886)"
                id="path7198"
                d="m 383.88781,586.81856 c 0,0 4.75583,1.20253 7.03749,2.08594 2.91222,1.12756 8.43329,4.0806 8.43329,4.0806 l 2.17633,-1.0882 c 0,0 -6.13833,-5.82773 -10.06554,-6.2569 -5.46591,-0.59732 -7.58157,1.17856 -7.58157,1.17856 z"
              />
              <path
                transform="matrix(1.1485883,0,0,1.1485883,-51.700726,-110.08886)"
                id="path7248"
                d="m 397.87853,516.42095 v 2 c 11.54716,4.14107 17.99592,13.80846 18.56055,26.37891 9.2e-4,0.0202 9.5e-4,0.0404 0.002,0.0605 0.0245,-0.68856 0.0292,-1.37543 -0.002,-2.06054 -0.56463,-12.57045 -7.01339,-22.23784 -18.56055,-26.37891 z m -43.76562,25.92578 c -0.13422,1.35759 -0.19199,2.74885 -0.14649,4.16016 0.0423,-1.42272 0.18091,-2.81599 0.4043,-4.16016 z"
              />
              <ellipse
                transform="matrix(1.1796431,0.18084016,-0.22761203,0.93723889,-70.598803,-9.4836272)"
                ry="2.1433234"
                rx="6.0402751"
                cy="433.62253"
                cx="484.71768"
                id="path7276"
              />
              <path
                transform="matrix(1.1485883,0,0,1.1485883,-51.700726,-110.08886)"
                id="path7358"
                d="m 450.56176,570.21133 c 0.31422,-0.51687 0.84685,-1.08434 1.45172,-1.08879 0.8227,-0.006 1.51933,0.78122 1.99611,1.45172 1.20869,1.69982 1.81464,5.98831 1.81464,5.98831 0,0 -4.7514,-2.00855 -5.62539,-4.17367 -0.27546,-0.68237 -0.0193,-1.54878 0.36292,-2.17757 z"
              />
              <path
                transform="matrix(1.1485883,0,0,1.1485883,-51.700726,-110.08886)"
                id="path7436"
                d="m 399.55635,576.28702 c 0,0 5.77103,-0.38519 8.54224,0.27556 7.19511,1.71555 13.03674,7.22358 20.1156,9.36891 2.31239,0.7008 7.16446,1.10222 7.16446,1.10222 0,0 -9.1879,1.00957 -13.50225,-0.27555 -4.98282,-1.48424 -8.43433,-6.25057 -13.22669,-8.26669 -2.87487,-1.20944 -9.09336,-2.20445 -9.09336,-2.20445 z"
              />
            </g>
          </g>
        </g>
      </Base>
    );
  }
}
