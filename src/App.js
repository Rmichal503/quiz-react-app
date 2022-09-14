
import './App.css';
import { useEffect, useState, useContext } from 'react';
import { Questions } from './components/questions/questions';
import {ScoreContext} from './context/score.context'

function App() {
  const [value, setValue] = useState(false)
  const [questions, setQuestions] = useState()
  const [category, setCategory] = useState({
    'cat':'',
    'difficulty':'',
  })
  const {setCurrentScore} = useContext(ScoreContext);
  const fetchQuestions = async()=>{
    const response = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=${category.difficulty}&category=${category.cat}&encode=base64`)
    const question = await response.json()
    setQuestions(question);
    setCurrentScore(0);
    console.log(questions);
  }
  // useEffect(()=>{
  //   fetch('https://opentdb.com/api.php?amount=10&encode=base64')
  //   .then((response)=>response.json()).then((quest)=>{
  //     return setQuestions(quest);
  //   })
  // },[])
  // setCurrentScore(0);
  // console.log(questions, value);
  const handleChange = e =>{
    const {name, value} = e.target;
    setCategory({...category, [name]: value})
}

  return (
    <div className="App">
      <form>
        <select id='cat' name='cat' onChange={handleChange} >
          <option value={'11'}>Movies</option>
          <option value={'10'}>Books</option>
          <option value={'15'}>Video Games</option>
          <option value={'12'}>Movies</option>
        </select>
        <select id='difficulty' name='difficulty' onChange={handleChange}>
          <option value={'easy'}>Easy</option>
          <option value={'medium'}>Medium</option>
          <option value={'hard'}>Hard</option>
        </select>
      </form>
      <button onClick={fetchQuestions
      }>Generate</button>
      <button onClick={()=>{
        setValue(!value)
      }}>Show Questions</button>
      <div className="questions">
        {value?<Questions quest={questions.results}/>:null}
      </div>
    </div>
    
  );
}

export default App;
