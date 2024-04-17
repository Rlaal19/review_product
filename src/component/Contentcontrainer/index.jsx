import React, { useState } from 'react'
import Score from '../../assets/Score';
import Picture from '../../assets/Picture';
import Productname from '../../assets/Productname';
import Description from '../../assets/Description';
import Pink from '../../assets/link';

const Contentcontrainer = ({
    title: sectionTitle= "",
    data=[],
}) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});
    const SECTION_ID =`${sectionTitle}_section`
    return (
      <div id={SECTION_ID}>
        <div>{sectionTitle}</div>
        {
          data.map(({score,title,description,shoplink,picture}, index) => (
            <div
            key ={`${SECTION_ID}-${index}`}
              className={`grid grid-cols-[27%_73%] transition-all rounded-lg py-5 ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-pink-200 bg-opacity-75 " : ""} `}
              onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
              onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
            >
  
              <div className=' ml-5'>
                <div>
                  <Score rating={score} />
                </div>
                <Picture picture={picture} />
              </div>
              <div className='grid gap-3'>
                <Productname title={title} />
                {
                  description.map((e,i)=>(
  
                    <Description key={`${e}-description-${i}`} descript={e} />
                  ))
                }
                <div className='flex gap-4'>
                  {
                    shoplink.map((e,i) =>(
                      <Pink key={`${e}-shoplink-${i}`} code={e.type} link={e.link} />
                    ))
                  }
                </div>
              </div>
            </div>
  
          ))
        }
      </div>
    )
}

export default Contentcontrainer;
