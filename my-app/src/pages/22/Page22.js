import "./Page22.css";

const Page22 = () => {
    return (
        <div className="frame22">
          <div className="center22">
            <div className="headline22">
		  	  <div className="small">your daily</div>progress
		    </div>
		    <div className="circle-big22">
			  <div className="text22">
				2758<div className="small">kcal</div>
			  </div>
			  <svg className="svg22">
				<circle className="bg" cx="57" cy="57" r="52"/>
				<circle className="progress" cx="57" cy="57" r="52"/>
			  </svg>
		    </div>
		    <div className="circles-small22">
		  	  <div className="circle-small22">
				<div className="text22">
					8563<div className="small">steps</div>
				</div>
				<svg className="svg22">
					<circle className="bg" cx="40" cy="40" r="37"/>
					<circle className="progress one" cx="40" cy="40" r="37"/>
				</svg>
			  </div>
			  <div className="circle-small22">
				<div className="text22">
					6,2<div className="small">km</div>
				</div>
				<svg className="svg22">
					<circle className="bg" cx="40" cy="40" r="37"/>
					<circle className="progress two" cx="40" cy="40" r="37"/>
				</svg>
			  </div>
		    </div>
          </div>
        </div>
    );
};

export default Page22;