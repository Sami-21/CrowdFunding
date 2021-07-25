import React from 'react'
import './CrowdFunding.css'

export default function funding_card(props) {
 
    return (   
    
           <>
               {props.left !== 0 ?  <div className="funding_card"> <div className="top_section">
           <span className="bold">{props.title}</span>
 <span className="Pledge">{props.pledge}</span>
 </div>
<p> {props.description}.</p>
 <div className="bot_section">
{props.left ? <p> <span className="bold">{props.left}</span>left</p> :
<p> <span className="bold">{props.left}</span></p> }
 <button className="btn_cyan" onClick={()=>{document.querySelector(".dark_overlay").classList.add('enabled')}}>Select Reward</button> 
 </div> </div> :  
 <div className="funding_card faded"> <div className="top_section">
           <span className="bold">{props.title}</span>
 <span className="Pledge">{props.pledge}</span>
 </div>
<p> {props.description}.</p>
 <div className="bot_section">
<p> <span className="bold">{props.left}</span>left</p>
 <button className="btn_cyan">Select Reward</button> 
 </div> </div>}       
 </>
    )
}
