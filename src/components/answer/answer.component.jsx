import React,{useContext} from 'react'
import { ScoreContext } from '../../context/score.context';

export const Answer = ({answers,correct_answer}) => {
    const {currentScore,setCurrentScore} = useContext(ScoreContext)
    const timer = (e,c)=>{
        e.target.classList.add(c);
        e.target.parentElement.classList.add('delete');
        setTimeout(()=>{
            e.target.parentElement.remove();
        },1500)
    }
  return (
    answers.map((answer)=>{
        return(
                <div className='answer'onClick={(e)=>{
                    console.log(e)
                    if(answer ===atob(correct_answer)){
                        alert("prawidłowa odp")
                        timer(e,'correct')
                        setCurrentScore(currentScore+1);
                        console.log(currentScore);
                        return
                    }
                        alert('nieprawidłowa odpowiedź');
                        timer(e,'incorrect');
                        setCurrentScore(currentScore-1);
                        console.log(currentScore);
                }}>{answer}</div>
        )
    })
  )
}
