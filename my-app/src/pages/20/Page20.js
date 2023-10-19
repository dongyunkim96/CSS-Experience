import "./Page20.css";

const Page20 = () => {

    return(
        <div className="frame20">
            <input type="checkbox" id="cb" />
            <label htmlFor="cb" className="button">Send Mail</label>
            <label htmlFor="cb" className="button reset">Reset</label>
            <div className="circle20"></div>
            <div className="circle-outer"></div>
            <svg className="icon mail">
                <polyline points="119,1 119,69 1,69 1,1"></polyline>
                <polyline points="119,1 60,45 1,1 119,1"></polyline>
            </svg>
            <svg className="icon plane">
                <polyline points="119,1 1,59 106,80 119,1"></polyline>
                <polyline points="119,1 40,67 43,105 69,73"></polyline>
            </svg>
        </div>
    );
};

export default Page20;