import React, { useState } from "react";
import { Frame62, Price62, Quantity62, Tier62, TierDesc62, TierInfo62, TierName62, Tiers62 } from "./Page62.styled";

const Page62 = () => {
    const [selectedTier, setSelectedTier] = useState(null);

    const handleTierClick = (tierName) => {
        setSelectedTier(tierName);
    };

    return (
        <Frame62>
            <Price62>
                <Tiers62>
                    <Tier62 className={selectedTier === 'basic' ? 'selected' : ''} onClick={() => handleTierClick('basic')}>
                        <TierName62 className="tier-name">Basic</TierName62>
                        <TierDesc62 className="tier-desc">
                            <p className="tier-pricing"><span className="tier-value">$5</span><br />per month</p>
                            <div className="lines"></div>
                        </TierDesc62>
                    </Tier62>
                    <Tier62 className={selectedTier === 'pro' ? 'selected' : ''} onClick={() => handleTierClick('pro')}>
                        <TierName62 className="tier-name">Pro</TierName62>
                        <TierDesc62 className="tier-desc">
                            <p className="tier-pricing"><span className="tier-value">$10</span><br />per month</p>
                            <div className="lines"></div>
                        </TierDesc62>
                    </Tier62>
                    <Tier62 className={selectedTier === 'premium' ? 'selected' : ''} onClick={() => handleTierClick('premium')}>
                        <TierName62 className="tier-name">Premium</TierName62>
                        <TierDesc62 className="tier-desc">
                            <p className="tier-pricing"><span className="tier-value">$20</span><br />per month</p>
                            <div className="lines"></div>
                        </TierDesc62>
                    </Tier62>
                </Tiers62>
                <TierInfo62 className="tier-info">
                    <Quantity62 className="user-detail" width={selectedTier === 'basic' ? '5%' : selectedTier === 'pro' ? '30%' : selectedTier === 'premium' ? '100%' : '0%'}>
                        <div className="scale-info">
                            <p>5 Users</p>
                            <p>100 Users</p>
                        </div>
                        <div className="scale"></div>
                    </Quantity62>
                    <Quantity62 className="space-detail" width={selectedTier === 'basic' ? '20%' : selectedTier === 'pro' ? '70%' : selectedTier === 'premium' ? '100%' : '0%'}>
                        <div className="scale-info">
                            <p>20 GB</p>
                            <p>200 GB</p>
                        </div>
                        <div className="scale"></div>
                    </Quantity62>
                    <Quantity62 className="project-detail" width={selectedTier === 'basic' ? '1%' : selectedTier === 'pro' ? '50%' : selectedTier === 'premium' ? '100%' : '0%'}>
                        <div className="scale-info">
                            <p>1 Project</p>
                            <p>50 Projects</p>
                        </div>
                        <div className="scale"></div>
                    </Quantity62>
                </TierInfo62>
            </Price62>
        </Frame62>
    );
};

export default Page62;