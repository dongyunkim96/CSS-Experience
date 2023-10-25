import "./Page24.css";

const Page24 = () => {
    return (
        <div className="body24">
          <div className="frame24">
            <input type="checkbox" id="botton24" className="hidden24" />
            <label className="botton24" htmlFor="botton24">Finish
            <img src="https://100dayscss.com/codepen/checkmark-green.svg" alt="checkmark"/></label>
            <svg className="circulo">
                <circle cx="30" cy="30" r="29"></circle>
            </svg>
          </div>
        </div>
    );
};

export default Page24;