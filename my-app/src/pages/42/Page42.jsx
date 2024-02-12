import React from 'react';
import {
    Container42,
    Sky42,
    Star42,
    Meteor42,
} from './Page42.styled';

const Page42 = () => {
    return (
    <Container42>
        <Sky42>
          <Star42 className="star star1" size={3} style={{ top: '50px', left: '100px' }} />
          <Star42 className="star star2" size={2} style={{ top: '100px', left: '50px' }} />
          <Star42 className="star star3" size={1} style={{ top: '190px', left: '50px' }} />
          <Star42 className="star star4" size={1} style={{ top: '80px', left: '30px' }} />
          <Star42 className="star star5" size={1} style={{ top: '90px', left: '120px' }} />
          <Star42 className="star star6" size={1} style={{ top: '120px', left: '90px' }} />
          <Star42 className="star star7" size={2} style={{ top: '200px', left: '150px' }} />
          <Star42 className="star star8" size={1} style={{ top: '150px', left: '130px' }} />
          <Star42 className="star star9" size={1} style={{ top: '200px', left: '100px' }} />
          <Star42 className="star star10" size={1} style={{ top: '100px', left: '200px' }} />
          <Star42 className="star star11" size={1} style={{ top: '210px', left: '250px' }} />
          <Star42 className="star star12" size={2} style={{ top: '240px', left: '120px' }} />
          <Star42 className="star star13" size={1} style={{ top: '120px', left: '240px' }} />
          <Star42 className="star star14" size={1} style={{ top: '130px', left: '200px' }} />
          <Star42 className="star star15" size={1} style={{ top: '50px', left: '130px' }} />
          <Star42 className="star star16" size={2} style={{ top: '20px', left: '100px' }} />
          <Star42 className="star star17" size={1} style={{ top: '30px', left: '150px' }} />
          <Star42 className="star star18" size={1} style={{ top: '40px', left: '200px' }} />
          <Star42 className="star star19" size={1} style={{ top: '130px', left: '40px' }} />
          <Star42 className="star star20" size={1} style={{ top: '250px', left: '170px' }} />
          <Star42 className="star star21" size={1} style={{ top: '180px', left: '220px' }} />
          <Meteor42 className="meteor meteor1" style={{ top: '40px', left: '-100px' }} />
          <Meteor42 className="meteor meteor2" style={{ top: '-30px', left: '-70px' }} />
        </Sky42>
    </Container42>
  );
};

export default Page42;  