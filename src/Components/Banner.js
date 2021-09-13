import React from 'react'; 
import './Banner.css'; 
import BannerImage from '../images/illustration-hero.svg'

function Banner(props){
    return (
        <div className='Banner'>
            <img className="BannerImage" src={BannerImage}/>
        </div>
    )
}

export default Banner; 