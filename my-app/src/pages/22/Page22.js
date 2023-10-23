import "./Page22.css";

const Page22 = () => {
    return (
        <div className="frame22">
        <div className="square22">
            <h1 className="title22">My Daily</h1>
            <h2 className="sec-title22">Progress</h2>
            <div className="circle-container">
                <div className="main-circle">
                    <p className="numb">2163</p>
                    <p className="cal">Kcal</p>
                </div>
                <svg>
                    <circle className="bg" cx="57" cy="57" r="52" />
                    <circle className="progress" cx="57" cy="57" r="52" />
                </svg>
                <div className="second-container">
                    <div className="sec">
                        <div className="text-container">
                            <p className="numb">7843</p>
                            <p className="ste">steps</p>
                        </div>
                        <svg>
                          <circle className="bg" cx="40" cy="40" r="37" />
                          <circle className="progress one" cx="40" cy="40" r="37" />
                        </svg>
                    </div>
                    <div className="sec">
                        <div className="text-container-2">
                            <p className="numb">4.6</p>
                            <p className="km">Km</p>
                        </div>
                        <svg>
                          <circle className="bg" cx="40" cy="40" r="37" />
                          <circle className="progress two" cx="40" cy="40" r="37" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Page22;