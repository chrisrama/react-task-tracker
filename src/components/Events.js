import React from 'react';

function handlclick (){
    console.log('button was clicked');
}

class HandleClick extends React.Component {

    render(){
        return (
          <div>
          <h1>Christian Ramazani </h1>
          <br/>
          <img onMouseOver={handlclick} src="https://www.fillmurray.com/200/100" alt="nothing" />
 
          <button onClick={handlclick} >Click Me</button>

          </div>
        );

    }
}

export default HandleClick; 
