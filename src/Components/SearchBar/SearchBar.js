import React from 'react';
import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SearchBar = props =>{
    return(
        <div className='searchBar'>
            <div className='ims-left'>
         
            {/* <img src="./assets/burger-pic.jpg" className="name-logo" alt='logo' /> */}
            </div>
            <div className="center-content">
                <input type='text' placeholder=' &#x1F50D;search' />
            </div>
            <div className='imgs-right'>
            Favorite Food: <FontAwesomeIcon icon="stroopwafel" />
            
            </div>

        </div>
    )
}

export default SearchBar; 