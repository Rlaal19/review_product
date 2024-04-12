import React from 'react'
import "../Homepage/homepage.css"

let homeData ={
    title: "We've posted the location of good products for you here.",
    desc:"You can view products or talk here."
}
function Homepage() {
  return (
    <div className="home-bg">
        <div className="contrainer">
            <div className="home-con">
                <div className="home-text">
                    <h1>{homeData.title}</h1>
                    <p>
                        {homeData.desc}
                    </p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Homepage
