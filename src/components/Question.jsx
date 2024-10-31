import AnswerBox from "./AnswerBox";
import { useState} from 'react';
import Instrcution from "./Instrcution";
const Question = ({no,question,answerChoices,correctIndex,addScore,showCorrectAnswer}) => {
 
    const [selected,setSelected] = useState(-1);

    const [chooseCorrect,setChooseCorrect] = useState(false);
    let score = 0;

    function toggleSelect(select){
        
        if(select==correctIndex && selected!==select){
            if(!chooseCorrect){
                score = 1;
            }else{
                score = 0;
            }
        }else{
            if(chooseCorrect && selected!==select){
                score = -1;
                setChooseCorrect(false);
            }else{
                score = 0;
            }
        }

        setSelected(select);
    }
    console.log('dfdfdf' + selected);
    const answers = answerChoices.map((answer,index) => {

        let isCorrect = correctIndex === index && showCorrectAnswer ? true : false;
 
        return (
            <AnswerBox 
                key={index} 
                answer={answer} 
                no={index+1} 
                isCorrect={isCorrect} 
                toggleSelect={toggleSelect} 
                selectedIndex={selected}
                setChooseCorrect={setChooseCorrect}
            />
        )

    });


  return (
    <div onClick={() => addScore(score)}>
        <h1 className='font-semibold p-4'>{no}. {question}</h1>
        <div>
            {answers}
        </div>
    </div>
  )
}

export default Question


