import { useState } from 'react';
import './App.css';
import { ReactComponent as Sun } from './assets/Sun_fill.svg'
import{hero,check,Fimoon,Limoon,menu} from './assets/index'
import { ReactComponent as Logo } from './assets/alarado-icon-homepage.svg'

function App() {
  const [isButton1Active, setIsButton1Active] = useState(false);
  const [toogle,setToggle]=useState(false);

  const toggleColor = () => {
    setIsButton1Active((prev) => !prev);
  };
  const handleToggle =()=>{
    setToggle(!toogle);
  }

  return (
    <div className={`App ${isButton1Active ? 'night' : ''}`}>
     <div className="navbar">
     <Logo  fill={!isButton1Active ?'#223344':'white'} />

      <div className="navbar__links">
     
        <a href='/'>About us</a>
        <a href='/'>Products</a>
        <a href='/'>Resource</a>
        <a href='/'>contact</a>
      </div>
      <div className="navbar__switch">
        {isButton1Active ?
        <>
         <img className='active'
         onClick={toggleColor} src={Fimoon}alt="" />
         <Sun onClick={toggleColor}  fill='#fff' stroke='#fff' />
         
         </>
         :
         <>
          <img
         onClick={toggleColor} src={Limoon}alt="" />
          <Sun className='active' onClick={toggleColor} fill='#223344' stroke='#223344'/>
        
         </>

        }

      </div>
      <img src={menu} alt="menu" className='menu' onClick={handleToggle} />
     {toogle &&(
      
     <div className= {`toggle__navbar ${isButton1Active ? 'toggle__navbar-night' : ''}`}>
      <p className='close' onClick={handleToggle}>x</p>
     <div className="navbar__links ">
     
     <a href='https://google.com'>About us</a>
     <a href='https://google.com'>Products</a>
     <a href='https://google.com'>Resource</a>
     <a href='https://google.com'>contact</a>
   </div>
   <div className="navbar__switch">
     {isButton1Active ?
     <>
      <img className='active'
      onClick={toggleColor} src={Fimoon}alt="" />
      <Sun onClick={toggleColor}  fill='
#fff' stroke='#fff' />
      
      </>:
      <>
       <img
      onClick={toggleColor} src={Limoon}alt="" />
       <Sun className='active' onClick={toggleColor} fill='#223344' stroke='#223344
'
/>
     
      </>

     }

   </div>
     </div>
     )}
     </div>
     
     <div className="hero__wrapper">
    <div className="content__wrapper">
  <p className= "content__wrapper-heading">😎 Simple way to communicate</p>
  <h1  >Actions for Accessibility in Design</h1>
  <p className='content__wrapper-desc'>The fastest way to build and deploy websites with resusable components.</p>

   <div className="buttons__wrap">
    <div className='button'>Get started</div>
    <p>Get live demo</p>
   </div>
   <div className="details">
   <img src={check} alt="" /> <p>No credit card required</p>
    <img src={check} alt="" /> <p>No software to install</p></div>
 
    </div>
    <div className="image__wrapper">
      <img src={hero} alt="" />
    </div>


     </div>

    </div>
  );
}

export default App;
