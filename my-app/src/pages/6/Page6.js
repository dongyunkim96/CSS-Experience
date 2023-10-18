import React from 'react';
import {
    Frame6,
    Center6
} from './Page6.styled.js';

const Page6 = () => {
    return (
      <Frame6>
        <Center6>
          <div className="card">
            <div className="profile">
              <div className="image">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <img src="https://100dayscss.com/codepen/jessica-potter.jpg" alt="Profile" />
              </div>
              <div className="info">
                <div className="content">
                  <h5>Jessica Potter</h5>
                  <p>Visual Artist</p>
                </div>
              </div>
              <div className="actions">
                <button className="btn">Follow</button>
                <button className="btn">Message</button>
              </div>
            </div>
            <div className="statistic">
              <div className="mini-card">
                <h3>523</h3>
                <p>Posts</p>
              </div>
              <div className="mini-card middle">
                <h3>1387</h3>
                <p>Likes</p>
              </div>
              <div className="mini-card">
                <h3>146</h3>
                <p>Follower</p>
              </div>
            </div>
          </div>
        </Center6>
      </Frame6>
    );
  };
  
  export default Page6;