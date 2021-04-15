import React from 'react';
/*function StudentList (props){
     return (
       <div>
         <h2>Name : {props.List.name}</h2>
         <h3>from : {props.List.classs}</h3>
         <h3>Teacher name: {props.List.teacher}</h3>
         <h4>Student number : {props.List.studentNum}</h4>
         <hr/>
       </div>

     );


}*/

class StudentList extends React.Component {
      yourclasshere() {
       return ( console.timeLog('hello world') );
      }

    render(){
         this.yourclasshere();
        return (
            <div>
           
            <h2>Name : {this.props.List.name}</h2>
            <h3>from : {this.props.List.classs}</h3>
            <h3>Teacher name: {this.props.List.teacher}</h3>
            <h4>Student number : {this.props.List.studentNum}</h4>
            <hr/>
          </div>  
        );
    }
}
export default StudentList;