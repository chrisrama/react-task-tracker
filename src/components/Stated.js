
import React from 'react';


class Stated extends React.Component {
      constructor(){
          super()
          this.state = {
              name : "Christian",
              isLoggedIn : false
          }
      }

    render() {
     return (
         <div>
         <h1>{this.state.name}</h1>
         <h2>Your currently log ({this.state.isLoggedIn === true ? `in` :  `out`}) </h2>
         </div>
     )
    }
}
export default Stated;
 // <childComponent answer={this.state.//name} />