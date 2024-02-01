import React, { useState } from "react";
import { FaUser, FaComments, FaBell, FaSearch } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { 
    AlignLeft36,
    Center36,
    Container36,
    Content36,
    Frame36,
    Icon36,
    Line36,
    Tab36,
    TabsContainer36,
    Title36,
 } from "./Page36.styled";

const Page36 = () => {
    const [selectedTab, setSelectedTab] = useState(1);

    const changeTab = (tabNumber) => {
        if (tabNumber !== selectedTab) {
            setSelectedTab(tabNumber);
        }
    };

    const getIconName = (tabNumber) => {
        const iconNames = [FaUser, FaComments, FaBell, FaGear];
        return iconNames[tabNumber - 1];
    };

    const getTabTitle = (tabNumber) => {
        const tabTitles = ["Dashboard", "Comments", "Notifications", "Settings"];
        return tabTitles[tabNumber - 1];
    };

    return (
        <Frame36>
                <Container36>
                    <TabsContainer36>
                        <AlignLeft36>
                            {[1, 2, 3, 4].map((tabNumber) => (
                                <Tab36
                                  key={tabNumber}
                                  isSelected={selectedTab === tabNumber}
                                  onClick={() => changeTab(tabNumber)}
                                >
                                    <Icon36>
                                        <Center36>
                                          {getIconName(tabNumber)()}
                                        </Center36>
                                    </Icon36>
                                </Tab36>
                            ))}
                        </AlignLeft36>
                        <div>
                            <Tab36>
                                <Icon36>
                                    <Center36>
                                      <FaSearch />
                                    </Center36>
                                </Icon36>
                            </Tab36>
                        </div>
                    </TabsContainer36>
                    {[1, 2, 3, 4].map((tabNumber) => (
                        <Content36
                          key={tabNumber}
                          isSelected={selectedTab === tabNumber}
                        >
                            <Title36> {getTabTitle(tabNumber)} </Title36>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                                <Line36 key={item} style={{ width: `${Math.random() * (100 - 50) + 50}%`}} />
                            ))}
                        </Content36>
                    ))}
                </Container36>
        </Frame36>
    );
};

export default Page36;