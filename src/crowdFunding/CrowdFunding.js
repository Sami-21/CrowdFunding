import React, {useState} from 'react'
import './CrowdFunding.css'
import FundingCard from './FundingCard';
import InfoWindow from './InfoWindow';
import Navigation from './Navigation'
import { useStateValue } from './redux/StateProvider';

export default function CrowdFunding(){
    
    const [ {funding , backers , days , bamboo , black_edition} ] = useStateValue()
    const [bookchecked, setbookchecked] = useState(false)
    


    return (
        <div className="CrowdFunding_global_container">
            <Navigation />

            <div className="header_container white_container">
            <svg className="logo" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#000" cx="28" cy="28" r="28"/><g fillRule="nonzero"><path d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z" fill="#444"/><path d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z" fill="#FFF"/></g></g></svg>
 <h1> Mastercraft Bamboo Monitor Riser</h1>
 <p> A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        <div className="btns_container">
  <button className="btn_cyan" onClick={()=>{document.querySelector(".dark_overlay").classList.add('enabled')}}> Back this project</button>
  {bookchecked ===false ?   <button className="bookmark" onClick={() => setbookchecked(!bookchecked)}><svg   width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>   </button>
:   <button className="bookchecked" onClick={() => setbookchecked(!bookchecked)}><svg    width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="hsl(176, 72%, 28%)" cx="28" cy="28" r="28"/><path fill="#FFF" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>   </button>
}
        </div>
            </div>




        <div className="statistics_container white_container">
            <div>
       <p className="borderless"><span className="bold"> ${funding}</span> <br/> of $100,000 backed</p>
        <p><span className="bold">{backers} </span> <br/>total backers</p>
        <p><span className="bold">{days}</span><br/> days left</p>
        </div>
       
        <div className="progress_container">
    <div className="progress_bar" style={{width:`${funding / 1000}%`}}>      
    </div>
</div>
        </div>

        <div className="About_section white_container">
            
  <span className="bold"> About this project</span>

<p> The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
 <br/>
<p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
to allow notepads, pens, and USB sticks to be stored under the stand. </p>
    <FundingCard title="Bamboo Stand" pledge="Pledge $ 25 or more" description=" You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list." left={bamboo} />
  <FundingCard title=" Black Edition Stand" pledge="Pledge $ 75 or more" description=" You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
  member list. Shipping is included." left={black_edition} />
<FundingCard title="Mahogany Special Edition" pledge="Pledge $ 200 or more"description=" You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
  to our Backer member list. Shipping is included." left={0} />
        </div>
        <InfoWindow  />

        </div>
    )
}
