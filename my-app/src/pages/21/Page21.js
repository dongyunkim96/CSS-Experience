import "./Page21.css";

const Page21 = () => {
    return(
        <div className="frame21">
            <div className="center21">
                <svg className="pacman" width="102" height="102" fill="none">
                    <circle r="25" cx="50" cy="50" />
                </svg>
                <svg className="eye" width="20" height="20">
                    <circle r="6" cx="10" cy="10" />
                </svg>
                <svg className="dots">
                    <line x1="0" y1="10" x2="200" y2="10" />
                </svg>
            </div>
        </div>
    );
};

export default Page21;