import React from 'react';
import vschoolProducts from './components/vschoolProducts';
import StudentList from './components/StudentList';
import './index.css';

function App() {
  const info = vschoolProducts.map(details => {
    return (<StudentList key={details.id} List={details}/>);
    });

  return (
       <div>
        {info}
       </div>
  );
}

export default App;

//<div className="todo-list">
    

  //    </div>
  /*const questions = {
     one : 'what the hell?',
     two : 'What is the wheater?',
     four : 'do you like me?',
     three: 'well that means what?'
};
const joke = {
    one : 'Nothing at all',
    two : 'it 25 degrees outside',
    three : 'I like Gabriel so much',
    four : 'I like gabriel'

};*/
 /* <div className="jokes">
       <Jokes question={questions.one} joke={joke.one} />
       <Jokes question={questions.two} joke={joke.two} /> 
       <Jokes question={questions.three} joke={joke.three} />
       <Jokes question={questions.four} joke={joke.four} />
       <Jokes question={questions.four} joke={joke.one} />
       <Jokes  joke={joke.four} />
    </div> */




