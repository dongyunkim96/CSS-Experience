import React from 'react';

import {
  Days,
  Day,
  Frame,
  Center,
  Card,
  CardHeader,
  Date,
  Svg,
  Polyline,
  BluePoint,
  Tooltip,
  Line,
  Statistic,
  Hint,
  RedBar,
  RedPoint,
  Hints,
  CardBody,
  Revenue,
  BlueBar,
  RedData,
  BlueData
} from './Page5.styled';

const Page5 = () => {
    return (
      <Frame>
        <Center>
          <Card>
            <CardHeader>
              <Date>
                <h2>WEEKLY REPORT</h2>
                <p>01. Feb - 07. Feb</p>
              </Date>
              <Revenue>
                <p>Revenue</p>
                <h2>$ 3621.79</h2>
              </Revenue>
            </CardHeader>
            <CardBody>
              <Hints>
                <Hint>
                  <RedBar />
                  Views
                </Hint>
                <Hint>
                  <BlueBar />
                  Purchases
                </Hint>
              </Hints>
              <Statistic>
                <Line className="line-1" />
                <Line className="line-2" />
                <Line className="line-3" />
                <RedData>
                  <Svg>
                    <Polyline points="9,46 50,12 90,23 130,11 171,38 211,48 251,19"></Polyline>
                  </Svg>
                  <div className="points">
                    <RedPoint className="point-1">
                      <Tooltip>458</Tooltip>
                    </RedPoint>
                    <RedPoint className="point-2">
                      <Tooltip>812</Tooltip>
                    </RedPoint>
                    <RedPoint className="point-3">
                      <Tooltip>746</Tooltip>
                    </RedPoint>
                    <RedPoint className="point-4">
                      <Tooltip>877</Tooltip>
                    </RedPoint>
                    <RedPoint className="point-5">
                      <Tooltip>517</Tooltip>
                    </RedPoint>
                    <RedPoint className="point-6">
                      <Tooltip>434</Tooltip>
                    </RedPoint>
                    <RedPoint className="point-7">
                      <Tooltip>458</Tooltip>
                    </RedPoint>
                  </div>
                </RedData>
                <BlueData>
                  <Svg>
                    <Polyline points="9,61 50,50 90,65 130,55 171,61 211,74 251,64"></Polyline>
                  </Svg>
                  <div className="points">
                    <BluePoint className="point-1">
                      <Tooltip>26</Tooltip>
                    </BluePoint>
                    <BluePoint className="point-2">
                      <Tooltip>41</Tooltip>
                    </BluePoint>
                    <BluePoint className="point-3">
                      <Tooltip>22</Tooltip>
                    </BluePoint>
                    <BluePoint className="point-4">
                      <Tooltip>36</Tooltip>
                    </BluePoint>
                    <BluePoint className="point-5">
                      <Tooltip>25</Tooltip>
                    </BluePoint>
                    <BluePoint className="point-6">
                      <Tooltip>13</Tooltip>
                    </BluePoint>
                    <BluePoint className="point-7">
                      <Tooltip>20</Tooltip>
                    </BluePoint>
                  </div>
                </BlueData>
              </Statistic>
              <Days>
                <Day>Mon</Day>
                <Day>Tue</Day>
                <Day>Wed</Day>
                <Day>Thu</Day>
                <Day>Fri</Day>
                <Day>Sat</Day>
                <Day>Sun</Day>
              </Days>
            </CardBody>
          </Card>
        </Center>
      </Frame>
    );
  };
  
  export default Page5;