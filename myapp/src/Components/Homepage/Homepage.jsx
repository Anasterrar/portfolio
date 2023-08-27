import React, { useState } from 'react';
import '../Homepage/Homepage.css';
import HomepageItem from './HomepageItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Homepage() {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [

        // 1
        {
            description: "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos perspiciatis, dolorum possimus necessitatibus laboriosam, est assumenda rem molestias fugit, vel odio magnam architecto. In optio omnis enim eligendi illo. Unde.",
            icon: require("../../Media/backgroud/undraw_developer_activity_re_39tg.svg") ,
        },
        {
            description: "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos perspiciatis, dolorum possimus necessitatibus laboriosam, est assumenda rem molestias fugit, vel odio magnam architecto. In optio omnis enim eligendi illo. Unde.",
            icon: require("../../Media/backgroud/undraw_programming_re_kg9v.svg") ,
        },
        {
            description: "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos perspiciatis, dolorum possimus necessitatibus laboriosam, est assumenda rem molestias fugit, vel odio magnam architecto. In optio omnis enim eligendi illo. Unde.",
            icon: require("../../Media/backgroud/undraw_static_website_re_x70h.svg") ,
        },

    ];

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
          newIndex = 0;
        } else if (newIndex >= items.length) {
          newIndex = items.length - 1;
        }
    
        setActiveIndex(newIndex);
      };
    return(
       
        <main>
             <section className='carousel'>
            <div className='inner'
            style={{ transform: `translate(-${activeIndex * 100}%)`}}>

                {items.map((item) => {
                    return <HomepageItem item={item} width={"100%"} />
                })}
            </div>
            <div className='Homepage-buttons'>

               <button onClick={()=>{
                updateIndex(activeIndex -1)
               }} className='button-arrow'>
                <span class="material-symbols-outlined">arrow_back_ios</span>
               </button>
               
               <div className='indicators'>
                {items.map((item,index)=>{
                    return(
                        <button onClick={()=>{
                            updateIndex(index)
                           }} className='indicator-button'>
                        <span className={`material-symbols-outlined ${index === activeIndex? "indicator-symbol-active": "indicator-symbol"}`}>radio_button_checked</span>
                        </button> 
                    );
                })}
                   
                </div>
               <button onClick={()=>{
                updateIndex(activeIndex + 1)
               }} className='button-arrow'>
                <span class="material-symbols-outlined">arrow_forward_ios</span>
                </button>

            </div>
            </section>
        </main>
    );
}

export default Homepage;