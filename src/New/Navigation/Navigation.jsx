import React from 'react';
import { useSelector } from 'react-redux';

const Navigation = () => {
    const navSelector = useSelector((store) => store.NavigationReducer)
    console.log(navSelector);
    return (
        <div> 
            <nav>
                {/* <a href="">Google</a>
                {navSelector.map((item, index) => {
                    return (
                        <a href={item.link} target={item.target} key={index}>
                            {item.name}
                       </a>
                   )
               })} */}
           </nav>
        </div>
    );
};

export default Navigation;