import React from "react";
import { useNavigate } from "react-router-dom";

export default function About(){
    const navigate=useNavigate();
    const navigateToHome = ()=>{
        navigate("/");
    }
    const navigateToAbout = ()=>{
        navigate("/about");
    }
    const navigateToContact = ()=>{
        navigate("/contact");
    }


    const navigateToWhere = (url) =>{
        navigate(url);
    }

    const navigateToCond = (url) =>{
        let name="osama";
        if(name==="affan"){
            navigate(url);
        }
        else{
            alert("invalid");
        }
    }
    return (
      <div>About
<h1>Navigating Programmatically:</h1>
<h1>go back button</h1>
<button onClick={()=> navigate(-1)}>Go Back</button>


<h1>Navigating Programmatically:</h1>
<h1>navigation on button click</h1>
<button onClick={()=> navigate('/')}>Home</button>
<button onClick={()=>navigate('/about')}>About</button>
<button onClick={()=>navigate('/contact')}>Contact</button>

<h1>Navigating Programmatically:</h1>
<h1>navigation inside event handler</h1>
<button onClick={()=>navigateToHome()}>Home</button>
<button onClick={()=>navigateToAbout('/about')}>About</button>
<button onClick={()=>navigateToContact('/contact')}>Contact</button>

<h1>Navigating Programmatically:</h1>
<h1>navigation to multiple pages with single event handler</h1>
<button onClick={()=>navigateToWhere('/')}>Home</button>
<button onClick={()=>navigateToWhere('/about')}>About</button>
<button onClick={()=>navigateToWhere('/contact')}>Contact</button>

<h1>Navigating Programmatically:</h1>
<h1>condition based navigation</h1>
<button onClick={()=>navigateToCond('/')}>Home</button>
<button onClick={()=>navigateToCond('/about')}>About</button>
<button onClick={()=>navigateToCond('/contact')}>Contact</button>

        
      </div>
    )
  }
