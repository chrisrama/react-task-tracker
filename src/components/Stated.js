
import React from 'react';


class Stated extends React.Component {
      constructor(){
          super()
          this.state = {
              isLoggedIn : false
          }
      }

    render() {
     return (
         <div>
         <h1>Your currently log ({this.state.isLoggedIn === true ? `in` :  `out`}) </h1>
         </div>
     )
    }
}
export default Stated;
 // <childComponent answer={this.state.//name} />