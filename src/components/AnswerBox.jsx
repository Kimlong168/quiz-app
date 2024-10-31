

const AnswerBox = ({answer, no, isCorrect, toggleSelect, selectedIndex,setChooseCorrect}) => {

  const correct = isCorrect ? 'text-red-500' : '';
  const selectedAnswer = selectedIndex === no - 1 ? 'bg-green-500 disable' : '';
 
  return (
    <p className='w-100 md:w-96 flex text-white mb-2 cursor-pointer hover:border' onClick={() => {
        toggleSelect(no-1);
  
        if(isCorrect){
          setChooseCorrect(true);
        }
        console.log(selectedIndex)
    }}>
        <div className='w-14 grid place-items-center bg-pink-600'>{no}</div>
        <div className={`bg-blue-600 p-4 w-full ${correct} ${selectedAnswer}`}>{answer}</div>
    </p>
  )
}

export default AnswerBox