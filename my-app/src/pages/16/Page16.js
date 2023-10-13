import './Page16.css';

const Page16 = () => {
    return(
        <div class="frame">
         <div class="blobb"></div>
	     <div class="blobb-ring"></div>
	     <svg class="octagon">
		   <polygon points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30" />
	     </svg>
	     <svg class="triangle">
		   <polygon points="53,0 106,90 0,90"/>
	     </svg>
	     <div class="octa-sparkles">
		   <div class="sparkle s1"></div>
		   <div class="sparkle s2"></div>
		   <div class="sparkle s3"></div>
		   <div class="sparkle s4"></div>
	     </div>
	     <div class="triangle-sparkles">
	       <div class="sparkle s1"></div>
		   <div class="sparkle s2"></div>
		   <div class="sparkle s3"></div>
	    </div>
</div>
    )
}

export default Page16;