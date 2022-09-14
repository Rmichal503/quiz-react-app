import React from 'react'
import { SingleQuestion } from '../single_question/single-question.component';
import { ScoreContext } from '../../context/score.context';
import { useContext } from 'react';

export const Questions = ({quest}) => {
const {currentScore} = useContext(ScoreContext)
    // console.log(quest)
  return (
    <div>
      <h3>Score</h3>
      {currentScore}
      {quest.map((x)=>{
          // console.log(x)
          return(
              <div>
                <SingleQuestion singleQuestion={x}/>
              </div>
          )
      })}
    </div>
  )
}
