import './Page16.css';

const Page16 = () => {
    return(
        <div className="frame16">
         <div className="blobb"></div>
	     <div className="blobb-ring"></div>
	     <svg className="octagon">
		   <polygon points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30" />
	     </svg>
	     <svg className="triangle">
		   <polygon points="53,0 106,90 0,90"/>
	     </svg>
	     <div className="octa-sparkles">
		   <div className="sparkle s1"></div>
		   <div className="sparkle s2"></div>
		   <div className="sparkle s3"></div>
		   <div className="sparkle s4"></div>
	     </div>
	     <div className="triangle-sparkles">
	       <div className="sparkle s1"></div>
		   <div className="sparkle s2"></div>
		   <div className="sparkle s3"></div>
	    </div>
</div>
    )
}

export default Page16;