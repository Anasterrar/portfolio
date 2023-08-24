import React, { useState } from 'react';
import '../Homepage/Homepage.css';
import HomepageItem from './HomepageItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Homepage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [

        // 1
        {
            description: "A man with a laptop",
            icon: require("../../Media/man-technologist-medium-skin-tone-svgrepo-com.svg") ,
        },
        {
            description: "Books",
            icon: require("../../Media//books-svgrepo-com.svg") ,
        },
        {
            description: "Rogs",
            icon: require("../../Media/cog-gear-machine-svgrepo-com.svg") ,
        },

    ];
    return(
       
        <main>
             <section className='carousel'>
            <div className='inner'

            style={{ transform: `translate:(-${activeIndex * 100})` }}>

                {items.map((item) => {
                    return <HomepageItem item={item} />
                })}
            </div>
            <div className='Homepage-buttons'>
               <button className='button-arrow'>
                <span class="material-symbols-outlined">arrow_back_ios</span>
               </button>
               <div className='indicators'><span class="material-symbols-outlined"> <button className='indicator-button'></button> radio_button_checked</span></div>
               <button className='button-arrow'>
                <span class="material-symbols-outlined">arrow_forward_ios</span>
                </button>
            </div>
            </section>
        </main>
    );
}

export default Homepage;