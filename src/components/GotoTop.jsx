
const GotoTop = () => {
  return (
    <a href='#header' className='w-10 h-10 rounded-full text-white grid place-items-center bg-blue-600 fixed bottom-4 right-4' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
        </svg>
    </a>
  )
}

export default GotoTop