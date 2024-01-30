import React, { useState } from 'react';
import {
    GlobalStyle27,
    Frame27,
    Center27,
    Top27,
    TopTitle27,
    Line27,
    List27,
    ListItem27,
    CheckboxInput27,
    CheckedCheckbox27,
    Text27,
} from './Page27.styled';

const Page27 = () => {
    const [checkboxes, setCheckboxes] = useState({
        myCheckbox1: false,
        myCheckbox2: false,
        myCheckbox3: false,
        myCheckbox4: false,
    });

    const handleCheckboxChange = (checkboxId) => {
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [checkboxId]: !prevCheckboxes[checkboxId],
        }));
    };

    return (
        <>
          <GlobalStyle27 />
          <Frame27>
            <Center27>
              <Top27>
                <TopTitle27>Saturday</TopTitle27>
                <div className="top-subtitle">January 27, 2024</div>
              </Top27>
              <Line27 />
              <List27>
                <ListItem27>
                  <CheckboxInput27 
                    id="myCheckbox1"
                    checked={checkboxes.myCheckbox1}
                    onChange={() => handleCheckboxChange('myCheckbox1')}
                  />
                  <CheckedCheckbox27 htmlFor="myCheckbox1" />
                  <Text27 isChecked={checkboxes.myCheckbox1}>Create a list</Text27>
                </ListItem27>
                <ListItem27>
                  <CheckboxInput27 
                    id="myCheckbox2"
                    checked={checkboxes.myCheckbox2}
                    onChange={() => handleCheckboxChange('myCheckbox2')}
                  />
                  <CheckedCheckbox27 htmlFor="myCheckbox2" />
                  <Text27 isChecked={checkboxes.myCheckbox2}>Complete first task</Text27>
                </ListItem27>
                <ListItem27>
                  <CheckboxInput27 
                    id="myCheckbox3"
                    checked={checkboxes.myCheckbox3}
                    onChange={() => handleCheckboxChange('myCheckbox3')}
                  />
                  <CheckedCheckbox27 htmlFor="myCheckbox3" />
                  <Text27 isChecked={checkboxes.myCheckbox3}>Write some CSS code</Text27>
                </ListItem27>
                <ListItem27>
                  <CheckboxInput27 
                    id="myCheckbox4"
                    checked={checkboxes.myCheckbox4}
                    onChange={() => handleCheckboxChange('myCheckbox4')}
                  />
                  <CheckedCheckbox27 htmlFor="myCheckbox4" />
                  <Text27 isChecked={checkboxes.myCheckbox4}>Amaze the world</Text27>
                </ListItem27>
              </List27>
            </Center27>
          </Frame27>
        </>
      );
};

export default Page27;