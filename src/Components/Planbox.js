import React from 'react'; 
import './Planbox.css'
import IconMusic from '../images/icon-music.svg'; 

function Planbox(){
    return(
        <div className="Planbox">
            <img className="ImageIconMusic" src={IconMusic} alt=""/>
            <div className="ContainerPlanPrice">
                <p className="Annualplan">Annual Plan</p>
                <p className="PlanPrice">$59.99/year</p>
            </div>
            <a className="ChangePlanLink" href="#">Change</a>
        </div>
    )
}

export default Planbox; 