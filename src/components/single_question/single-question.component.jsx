import React from 'react'
import { Answer } from '../answer/answer.component'

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
      // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

export const SingleQuestion = ({singleQuestion}) => {
    const {question,correct_answer,incorrect_answers} = singleQuestion
    // console.log("cos", question, correct_answer, incorrect_answers);
    const answers = incorrect_answers.concat(correct_answer);
    console.log(answers);
    
    shuffle(answers);
    const encodeAnswers = answers.map(answer=>{
        return atob(answer)
    })
    const encodeQuestions = atob(question)
    // let answers
    // singleQuest.map(el=>{
    //     return answers = el.incorrect_answers.push(el.correct_answer)
    // })
  return (
    <div className='singleQuestion'>
        <h2>{encodeQuestions}</h2>
        <Answer answers={encodeAnswers} correct_answer={correct_answer}/>
        <button className='skipQuestion' onClick={(e)=>{
          e.target.parentElement.classList.add('delete');
          setTimeout(()=>{
              e.target.parentElement.remove();
          },1500)
        }}>SKIP</button>
    </div>
  )
}
