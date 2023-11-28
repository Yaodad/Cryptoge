import { BiWallet, BiPencil, BiLike, BiCheckCircle, BiMoney, BiCollection, } from 'react-icons/bi'
import { whyLeft, whyRight } from '../constant'
import { useState } from 'react'

const Why = () => {
  const [iconsLeft, setIconLeft] = useState([<BiWallet />, <BiPencil/>, <BiLike/>])
  const [iconsRight, setIconRight] = useState([<BiCheckCircle/>, <BiMoney/>, <BiCollection/>])

  return (
    <section id='choose' className='my-11 md:px-16'>
      <h1 className='mx-auto my-14 mt-[140px] sm:w-[630px] text-center font-extrabold sm:text-[70px] text-[60px] flex justify-center gradient-text gradient-brand-primary'>WHY CHOOSE US</h1>
      <div className='flex flex-col lg:flex-row justify-between items-center'>
        <ul>
          {whyLeft.map((words, index) => (
            <li key={index} className='flex justify-start border-2 border-secondary bg-white text-primary rounded-lg text-xl text-left font-space gap-10 my-6 p-4'>
              <div className='flex items-center justify-center border-2 border-secondary bg-secondary rounded-lg text-[28px] text-white px-3'>{iconsLeft[index]}</div>
              <div className='space-y-2'>
                <h4 className='font-extrabold text-[20px]'>{words.title}</h4>
                <p>{words.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className='w-[300px] lg:w-[500px] flex justify-center items-center align-middle p-6'>
          <img src="../../assets/whyimg.png" alt="wallet1Img" className='w-full mx-auto'/>
        </div>
        <ul>
          {whyRight.map((words, index) => (
            <li key={index} className='flex justify-start border-2 border-secondary bg-white text-primary rounded-lg text-xl text-left font-space gap-10 my-6 p-4'>
              <div className='flex items-center justify-center border-2 border-secondary bg-secondary rounded-lg text-[28px] text-white px-3'>{iconsRight[index]}</div>
              <div className='space-y-2'>
                <h4 className='font-extrabold text-[20px]'>{words.title}</h4>
                <p>{words.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Why