import React from 'react';
import '../Homepage/Homepage.css';
import HomepageItem from './HomepageItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Homepage() {

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

    ]
    return(
        <main className='carousel'>
            <div className='inner'>
                {items.map((item) => {
                    return <HomepageItem item={item} />
                })}
            </div>
        </main>
    );
}

export default Homepage;