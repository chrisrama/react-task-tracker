import React from 'react';

function Jokes(props) {
 return ( <div>
    <h2 style={{display: !props.quesion && "none" }}>Question : {props.question}</h2>
    
     <p style={{color : !props.quesion && "yellow"}}>Answer :  {props.joke}</p>
     <hr/>
  </div>
 )
}

export default Jokes;