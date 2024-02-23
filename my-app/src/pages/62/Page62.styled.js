import styled from 'styled-components';

export const Frame62 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 420px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: lightgrey;
  color: #595e5a;
`;

export const Price62 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 10px 20px 10px;
`;

export const Tiers62 = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 20px;
  gap: 10px;
  justify-content: space-between;
`;

export const Tier62 = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 160px;
  background: white;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 5px 5px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);

    .tier-name {
        background: #3999e9;
    }
    
    .tier-pricing {
        color: #3999e9;
    }
  }
`;

export const TierName62 = styled.p`
  background: #67b1ee;
  font-weight: 600;
  font-size: 0.9rem;
  color: white;
  height: 40px;
  line-height: 40px;
  transition: all 0.3s;
`;

export const TierDesc62 = styled.div`
  flex-grow: 1;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px 0 15px;
  color: #595e5a;
  transition: all 0.3s;

  .tier-value {
    font-size: 1.8rem;
    font-weight: 600;
  }

  .tier-pricing {
    font-size: 0.7rem;
    margin-bottom: 15px;
  }

  .lines::after {
    display: inline-block;
    width: 80%;
  }
`;

export const TierInfo62 = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 3px 3px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Quantity62 = styled.div`
  display: flex;
  flex-direction: column;

  .scale-info {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    margin-bottom: 5px;
  }

  .scale {
    width: 100%;
    height: 10px;
    border-radius: 10px;
    background: #eeeded;
    overflow: hidden;

    &::after {
        content: "";
        display: block;
        background: #67b1ee;
        height: 100%;
        width: ${({ width }) => width || '0'};
        transition: all 0.3s;
    }
  }
`;