import React from 'react';

class Timer extends React.Component {
    constructor(){
        super()
        this.state = {
             count : 0
       } 
       this.handleclick = this.handleclick.bind(this);
       this.decrease = this.decrease.bind(this);
    }
    handleclick(id){
       this.setState( prevstate => {
           return { count : prevstate.count + 5}
       })
      };

    decrease(){
        this.setState(prestate => {
            return {count : prestate.count - 1}
        })
    };  
    render() { 
            

        return (
            <div style={{textAlign : 'center', fontSize: '80px'}}>
            <h1 onMouseOver={this.decrease}>{this.state.count}</h1>
            <button onClick={this.handleclick}>Increase</button>
            <childComponent count={this.state.count} />
            </div>
        );
    }
}
export default Timer;