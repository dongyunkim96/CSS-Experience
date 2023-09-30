import React from 'react';
import {
    Container,
    Center,
    Scenery,
    Circle,
    Moon,
    Spots,
    Report,
    Temp,
    Num,
    Deg,
    Weather,
    DaysInfo,
    DayInfo,
    TempInfo,
    TempOne,
    OneNum,
    OneDeg,
    Raindrops,
    raindropAnimation
} from './Page9.styled';

const Page9 = () => {
    return (
        <Container>
            <Center>
                <Scenery>
                    <Circle className="circle-back-left" height={150} backgroundColor="#25314F" top={230} left={-10} zIndex={3} />
                    <Circle className="circle-back-right" height={200} backgroundColor="#25314F" top={220} left={200} zIndex={3} />
                    <Circle className="circle-front-left" height={200} backgroundColor="#303C5D" top={290} left={-100} zIndex={3} />
                    <Circle className="circle-front-right" height={200} backgroundColor="#303C5D" top={280} left={300} zIndex={3} />
                    <Circle className="circle-front-center" height={150} backgroundColor="#303C5D" top={245} left={80} zIndex={3} />
                    <Moon>
                        <Spots className="one" width={15} height={15} top={8} left={23} />
                        <Spots className="two" width={15} height={15} top={18} left={-3} />
                        <Spots className="three" width={8} height={8} top={15} left={45} />
                        <Spots className="four" width={9} height={9} top={18} left={60} />
                        <Spots className="five" width={5} height={5} top={27} left={18} />
                        <Spots className="six" width={7} height={7} top={32} left={29} />
                        <Spots className="seven" width={5} height={5} top={39} left={40} />
                        <Spots className="eight" width={8} height={8} top={40} left={50} />
                        <Spots className="nine" width={7} height={7} top={42} left={20} />
                        <Spots className="ten" width={7} height={7} top={53} left={35} />
                        <Spots className="eleven" width={15} height={15} top={62} left={15} />                        
                    </Moon>
                    <Raindrops>
                        {[...Array(10).keys()].map((i) => (
                            <div
                              key={i}
                              className={`raindrop small raindrop-${i+1}`}
                              style={{
                                animation: `${raindropAnimation} ${1.9 + Math.random() * 0.2}s linear ${Math.random() * 2}s infinite`,
                                left: `${(400 / 10) * (i + 1)}px`,
                              }}>
                            </div>
                        ))}
                    </Raindrops>
                </Scenery>
                <Report>
                    <Temp>
                        <Num className="num">12</Num>
                        <Deg className="deg"></Deg>
                    </Temp>
                    <Weather>
                        <div className="env">Wind: E 7 Km/h</div>
                        <div className="env">Humidity: 87%</div>
                    </Weather>
                    <DaysInfo>
                        <DayInfo>
                            <div className="day">TUE</div>
                            <TempInfo>
                                <TempOne>
                                    <OneNum className="one-num">21</OneNum>
                                    <OneDeg className="one-deg"></OneDeg>
                                </TempOne>
                                <div>/</div>
                                <TempOne>
                                    <OneNum className="one-num">9</OneNum>
                                    <OneDeg className="one-deg"></OneDeg>
                                </TempOne>
                            </TempInfo>
                        </DayInfo>
                        <DayInfo>
                            <div className="day">WED</div>
                            <TempInfo>
                                <TempOne>
                                    <OneNum className="one-num">23</OneNum>
                                    <OneDeg className="one-deg"></OneDeg>
                                </TempOne>
                                <div>/</div>
                                <TempOne>
                                    <OneNum className="one-num">10</OneNum>
                                    <OneDeg className="one-deg"></OneDeg>
                                </TempOne>
                            </TempInfo>
                        </DayInfo>
                    </DaysInfo>
                </Report>
            </Center>
        </Container>
    )
}

export default Page9;