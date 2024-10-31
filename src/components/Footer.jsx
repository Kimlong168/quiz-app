

import facebook from '../assets/facebook.png'
import tiktok from '../assets/tiktok.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
const Footer = () => {
  return (
    <div className='text-white text-center p-20 mb-10' id='footer' >
        <p className='text-sm mb-3 text-blue-600'>Powered by: @ChannKimlong</p>
        <p className='mb-3 text-sm'>Follow me on:</p>
        <div className='flex gap-3 justify-center'>
            <a href='https://www.facebook.com/phnompenhcrown.fc.7?mibextid=ZbWKwL' className='text-xl w-10 h-10 grid place-items-center cursor-pointer'><img className='hover:border rounded-lg' alt='socialMediaIcon' src={facebook}/></a>
            <a href='https://www.facebook.com/phnompenhcrown.fc.7?mibextid=ZbWKwL' className='text-xl w-10 h-10 grid place-items-center cursor-pointer'><img className='hover:border rounded-lg' alt='socialMediaIcon' src={twitter}/></a>
            <a href='https://instagram.com/kimlonggggggg_101?igshid=ZGUzMzM3NWJiOQ==' className='text-xl w-10 h-10 grid place-items-center cursor-pointer'><img className='hover:border rounded-lg' alt='socialMediaIcon' src={instagram}/></a>
            <a href='https://vt.tiktok.com/ZSLR33obr/' className='text-xl w-10 h-10 grid place-items-center cursor-pointer'><img className='hover:border rounded-lg' alt='socialMediaIcon' src={tiktok}/></a>
        </div>
    </div>
  )
}

export default Footer