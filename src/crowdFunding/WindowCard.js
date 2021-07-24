import React ,{ useState } from 'react'
import  { useStateValue } from '../crowdFunding/redux/StateProvider'
import './CrowdFunding.css'


export default function WindowCard(props) {
    const [ {funding} , dispatch] = useStateValue()
    console.log("this is the total funding",funding)
    const addFunding = () => {
        dispatch({
            type:'INCREMENT',
            payload:parseInt(pledge),
        })
    }

    const [pledge, setpledge] = useState(0);
  
    return (
        <>
               {props.left !== 0 ?  <div className="window_card" > 
               <div className="upper_content">
               <div className="left_section">
                     <div className="selection" >
    <div className="selection__circle" >
        <div className="selection__radio " onClick={(e) => { 
            document.querySelectorAll('.window_card').forEach( item => item.classList.remove("selected_card"))
            document.querySelectorAll('.upper_content').forEach( item => item.classList.remove("selected_upper_content"))
            document.querySelectorAll('.selection__radio').forEach( item => item.classList.remove("selected_radio"))
            e.target.parentNode.parentNode.parentNode.parentNode.parentNode.classList.toggle("selected_card")
            e.target.parentNode.parentNode.parentNode.parentNode.classList.toggle("selected_upper_content")
            e.target.classList.toggle("selected_radio")}}></div>
    </div>
</div>
</div>
<div className="right_section">
    <div className="header_section">
<span className="bold" onClick={(e) => { 
            document.querySelectorAll('.window_card').forEach( item => item.classList.remove("selected_card"))
            document.querySelectorAll('.upper_content').forEach( item => item.classList.remove("selected_upper_content"))
            document.querySelectorAll('.selection__radio').forEach( item => item.classList.remove("selected_radio"))
            e.target.parentNode.parentNode.parentNode.parentNode.classList.toggle("selected_card")
            e.target.parentNode.parentNode.parentNode.classList.toggle("selected_upper_content")
            e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].childNodes[0].classList.toggle("selected_radio")}}>{props.title}</span>
<span className="Pledge">Pledge ${props.pledge} or more </span>

 {props.left ? <p> <span className="bold">{props.left}</span>left</p> : <p> <span className="bold">{props.left}</span></p>}  
</div>

<p> {props.description}.</p>
 </div>
 </div>
 <div className="lower_content">
     <div className="left"><p>Enter your pledge</p></div>
     <div className="right">
 <span className="donation"> 
            $
        <input type="number" min={props.min} max ={props.max} name="donation" onChange={(e) => setpledge(e.target.value)} autoFocus />
    </span>
 <button className=" btn_cyan continue_btn" onClick={() =>{addFunding();
document.querySelector(".InfoWindow_container").classList.toggle('disabled');
document.querySelector(".thanks_window").classList.toggle('disabled');
 }}>Continue</button> 
</div>
</div>

 </div>
    :  
<div className="window_card faded"> 
               <div className="upper_content">
               <div className="left_section">
                     <div className="selection" >
    <div className="selection__circle" >
        <div className="selection__radio " onClick={(e) => {
            e.target.querySelector(".window_card").classList.toggle("selected_card")
            e.target.querySelector(".upper_content").classList.toggle("selected_upper_content")
            e.target.querySelector(".selection__radio").classList.toggle("selected_radio")}}></div>
    </div>
</div>
</div>
<div className="right_section">
    <div className="header_section">
<span className="bold">{props.title}</span>
<span className="Pledge">Pledge ${props.pledge} or more </span>
<p> <span className="bold">{props.left}</span>left</p>
</div>

<p> {props.description}.</p>
 </div>
 </div>
 <div className="lower_content">
 <span className="donation"> 
            $
        <input type="number" min={props.min} max ={props.max} name="donation"  autoFocus />
    </span>
      <button className="btn_cyan continue_btn">Continue</button>  
  </div>

 </div>}       
            
        </>
    )
}
