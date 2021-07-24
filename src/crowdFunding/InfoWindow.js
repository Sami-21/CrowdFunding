import React  from 'react'
import './CrowdFunding.css'
import { useStateValue } from './redux/StateProvider';
import WindowCard from './WindowCard';

export default function InfoWindow() {
    const [ { bamboo , black_edition} ] = useStateValue()

    
    return (
        <div className="dark_overlay">
          <div className="InfoWindow_container white_container">
          <span className="bold">Back this project</span>
 <p> Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
<svg onClick={()=>{document.querySelector(".dark_overlay").classList.remove('enabled')}} width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="evenodd" opacity=".4"/></svg>
   <WindowCard  title=" no rewards" pledge={5} min={5} max={24} description="Choose to support us without a reward if you simply believe in our project. As a backer, 
  you will be signed up to receive product updates via email." />
 <WindowCard  title="Bamboo Stand" left={bamboo} pledge={25} min={25} max={74} description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list." />
   <WindowCard   title="Black Edition Stand" left={black_edition} min={75} max={199} pledge={75} description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
  member list. Shipping is included." />
  <WindowCard   title="Mahogany Special Edition" left={0} min={200} pledge={200} description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
  to our Backer member list. Shipping is included." />     
       </div>
       <div className="thanks_window white_container disabled">
       <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#3CB3AB" cx="32" cy="32" r="32"/><path stroke="#FFF" strokeWidth="5" d="M20 31.86L28.093 40 44 24"/></g></svg>
             <p><span className="bold"> Thanks for your support! </span></p>
 <p> Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
  an email once our campaign is completed.
  Got it!</p>
  <button className="btn_cyan" onClick={() =>document.querySelector(".dark_overlay").classList.remove('enabled')}>Got it!</button>
       </div>
            
        </div>
    )
}
