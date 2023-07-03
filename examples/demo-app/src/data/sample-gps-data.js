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

const gps = `timestamp,location-lng,location-lat,ground-speed,heading,id,location-alt
2014-08-01 00:00:23.000,90.2266981,27.6162803,0.22,0.0,Thang Kaar Thuub (3552),3217.0
2014-08-01 00:10:07.000,90.2266713,27.6162513,0.27,140.9,Thang Kaar Thuub (3552),3212.3
2014-08-01 00:20:07.000,90.2267115,27.6162102,0.27,110.1,Thang Kaar Thuub (3552),3209.1
2014-08-01 00:30:07.000,90.2267409,27.6162514,0.32,0.0,Thang Kaar Thuub (3552),3206.2
2014-08-01 00:40:07.000,90.2265545,27.6163481,0.46,0.0,Thang Kaar Thuub (3552),3231.3
2014-08-01 00:50:07.000,90.2269491,27.6161884,0.51,0.0,Thang Kaar Thuub (3552),3178.8
2014-08-01 01:00:07.000,90.2265336,27.6163122,0.3,99.61,Thang Kaar Thuub (3552),3257.2
2014-08-01 01:10:07.000,90.2267568,27.6162647,0.33,0.0,Thang Kaar Thuub (3552),3192.5
2014-08-01 01:20:07.000,90.2267296,27.6163003,0.43,0.0,Thang Kaar Thuub (3552),3199.2
2014-08-01 01:30:16.000,90.2267121,27.6163019,0.09,172.36,Thang Kaar Thuub (3552),3222.9
2014-08-01 01:40:21.000,90.2267198,27.6163409,0.07,0.0,Thang Kaar Thuub (3552),3216.7
2014-08-01 01:50:06.000,90.2266872,27.6162974,0.26,105.51,Thang Kaar Thuub (3552),3215.5
2014-08-01 02:00:06.000,90.2266652,27.6162898,0.5,157.94,Thang Kaar Thuub (3552),3219.6
2014-08-01 02:10:07.000,90.2266452,27.6163351,0.18,160.56,Thang Kaar Thuub (3552),3220.4
2014-08-01 02:20:07.000,90.2266829,27.6162774,0.22,169.74,Thang Kaar Thuub (3552),3216.9
2014-08-01 02:30:07.000,90.2266533,27.6162986,0.25,145.49,Thang Kaar Thuub (3552),3224.0
2014-08-01 02:40:07.000,90.2267379,27.6162983,0.21,195.95,Thang Kaar Thuub (3552),3225.6
2014-08-01 02:50:07.000,90.226692,27.616304,0.19,0.0,Thang Kaar Thuub (3552),3211.8
2014-08-01 03:00:07.000,90.2266683,27.6163021,0.28,0.0,Thang Kaar Thuub (3552),3227.1
2014-08-01 03:10:06.000,90.2266718,27.6162954,0.24,138.94,Thang Kaar Thuub (3552),3225.1
2014-08-01 03:20:07.000,90.2267475,27.6162578,0.06,0.0,Thang Kaar Thuub (3552),3218.9
2014-08-01 03:30:07.000,90.2266495,27.6163363,0.05,0.0,Thang Kaar Thuub (3552),3209.9
2014-08-01 03:40:07.000,90.2266573,27.6162552,0.33,278.53,Thang Kaar Thuub (3552),3216.8
2014-08-01 03:50:06.000,90.200501,27.5963135,11.97,248.38,Thang Kaar Thuub (3552),3150.4
2014-08-01 04:00:23.000,90.2029316,27.592159,11.09,102.89,Thang Kaar Thuub (3552),3173.1
2014-08-01 04:10:06.000,90.1979269,27.5900334,14.89,226.1,Thang Kaar Thuub (3552),3078.8
2014-08-01 04:20:06.000,90.1599981,27.5889937,9.36,214.3,Thang Kaar Thuub (3552),3219.6
2014-08-01 04:30:06.000,90.1304977,27.5797384,17.17,256.9,Thang Kaar Thuub (3552),3066.5
2014-08-01 04:40:06.000,90.0803941,27.5599255,10.13,278.53,Thang Kaar Thuub (3552),3100.0
2014-08-01 04:50:06.000,90.0107878,27.5658968,11.39,235.93,Thang Kaar Thuub (3552),2666.8
2014-08-01 05:00:06.000,89.9490298,27.5345735,9.28,214.3,Thang Kaar Thuub (3552),2309.5
2014-08-01 06:42:41.000,82.1138274,27.4378974,15.95,64.23,Thang Kaar Ngang Ka (4002),966.3
2014-08-01 06:42:42.000,82.1139649,27.4379582,14.9,62.91,Thang Kaar Ngang Ka (4002),969.9
2014-08-01 06:42:43.000,82.1140881,27.4380211,13.67,58.33,Thang Kaar Ngang Ka (4002),972.8
2014-08-01 06:42:44.000,82.1141907,27.4380927,12.54,48.5,Thang Kaar Ngang Ka (4002),974.6
2014-08-01 06:42:45.000,82.114263,27.4381765,11.44,32.11,Thang Kaar Ngang Ka (4002),975.2
2014-08-01 06:42:46.000,82.1143013,27.438272,11.35,13.76,Thang Kaar Ngang Ka (4002),975.8
2014-08-01 06:42:47.000,82.11431,27.4383692,10.8,0.66,Thang Kaar Ngang Ka (4002),977.7
2014-08-01 06:42:48.000,82.1142962,27.4384518,8.76,346.69,Thang Kaar Ngang Ka (4002),980.6
2014-08-01 06:42:49.000,82.1142637,27.4385091,6.63,325.71,Thang Kaar Ngang Ka (4002),983.6
2014-08-01 06:42:50.000,82.1142176,27.4385368,5.34,292.95,Thang Kaar Ngang Ka (4002),985.9
2014-08-01 06:42:51.000,82.1141648,27.4385357,5.47,258.87,Thang Kaar Ngang Ka (4002),987.5
2014-08-01 06:42:52.000,82.1141123,27.4385072,6.58,232.0,Thang Kaar Ngang Ka (4002),988.8
2014-08-01 06:42:53.000,82.1140662,27.4384524,8.17,211.68,Thang Kaar Ngang Ka (4002),990.3
2014-08-01 06:42:54.000,82.1140376,27.4383744,9.62,192.68,Thang Kaar Ngang Ka (4002),992.1
2014-08-01 06:42:55.000,82.114036,27.4382797,10.99,176.29,Thang Kaar Ngang Ka (4002),994.3
2014-08-01 06:42:56.000,82.1140666,27.438175,12.55,161.22,Thang Kaar Ngang Ka (4002),996.5
2014-08-01 06:42:57.000,82.1141258,27.4380679,13.64,150.73,Thang Kaar Ngang Ka (4002),998.2
2014-08-01 06:42:58.000,82.1142042,27.4379617,14.34,144.83,Thang Kaar Ngang Ka (4002),999.3
2014-08-01 06:42:59.000,82.1142915,27.4378567,14.58,142.21,Thang Kaar Ngang Ka (4002),1000.9
2014-08-01 06:43:00.000,82.1143788,27.4377539,14.18,142.21,Thang Kaar Ngang Ka (4002),1002.5
2014-08-01 06:43:01.000,82.1144592,27.4376522,13.65,145.49,Thang Kaar Ngang Ka (4002),1004.0
2014-08-01 06:43:02.000,82.1145274,27.4375495,13.09,150.73,Thang Kaar Ngang Ka (4002),1004.7
2014-08-01 06:43:03.000,82.1145875,27.4374392,13.84,154.66,Thang Kaar Ngang Ka (4002),1005.1
2014-08-01 06:43:04.000,82.1146421,27.4373208,14.33,157.94,Thang Kaar Ngang Ka (4002),1006.1
2014-08-01 06:43:05.000,82.1146882,27.4372001,14.03,161.87,Thang Kaar Ngang Ka (4002),1007.5
2014-08-01 06:43:06.000,82.1147188,27.4370782,13.75,169.08,Thang Kaar Ngang Ka (4002),1009.8
2014-08-01 06:43:07.000,82.1147296,27.4369611,12.75,177.6,Thang Kaar Ngang Ka (4002),1012.1
2014-08-01 06:43:08.000,82.1147213,27.4368536,11.67,186.12,Thang Kaar Ngang Ka (4002),1014.2
2014-08-01 06:43:09.000,82.1146955,27.4367568,10.77,195.95,Thang Kaar Ngang Ka (4002),1017.1
2014-08-01 06:43:10.000,82.1146547,27.436676,9.5,207.75,Thang Kaar Ngang Ka (4002),1020.1
2014-08-01 06:43:11.000,82.1145999,27.4366146,8.5,222.82,Thang Kaar Ngang Ka (4002),1023.3
2014-08-01 06:43:12.000,82.1145381,27.4365653,8.12,230.03,Thang Kaar Ngang Ka (4002),1026.2
2014-08-01 06:43:13.000,82.1144759,27.4365206,7.87,230.69,Thang Kaar Ngang Ka (4002),1028.2
2014-08-01 06:43:14.000,82.1144131,27.4364746,8.14,230.03,Thang Kaar Ngang Ka (4002),1029.8
2014-08-01 06:43:15.000,82.1143506,27.43643,7.86,231.34,Thang Kaar Ngang Ka (4002),1030.8
2014-08-01 06:43:16.000,82.1142864,27.4363918,7.6,237.9,Thang Kaar Ngang Ka (4002),1031.0
2014-08-01 06:43:17.000,82.1142171,27.4363629,7.58,247.73,Thang Kaar Ngang Ka (4002),1031.9
2014-08-01 06:43:18.000,82.114145,27.4363437,7.43,255.59,Thang Kaar Ngang Ka (4002),1033.1
2014-08-01 06:43:19.000,82.1140733,27.4363307,7.17,259.52,Thang Kaar Ngang Ka (4002),1034.5
2014-08-01 06:43:20.000,82.114004,27.4363217,6.85,262.14,Thang Kaar Ngang Ka (4002),1035.6
2014-08-01 06:43:21.000,82.1139337,27.4363205,7.05,271.32,Thang Kaar Ngang Ka (4002),1036.6
2014-08-01 06:43:22.000,82.1138619,27.4363266,7.2,276.56,Thang Kaar Ngang Ka (4002),1037.3
2014-08-01 06:43:23.000,82.1137874,27.4363359,7.56,277.87,Thang Kaar Ngang Ka (4002),1038.6
2014-08-01 06:43:24.000,82.1137119,27.4363441,7.51,275.91,Thang Kaar Ngang Ka (4002),1040.2
2014-08-01 06:43:25.000,82.1136379,27.4363491,7.29,273.29,Thang Kaar Ngang Ka (4002),1041.4
2014-08-01 06:43:26.000,82.1135644,27.4363482,7.29,267.39,Thang Kaar Ngang Ka (4002),1043.2`;

export default gps;
