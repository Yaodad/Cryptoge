import { useState } from "react"
import { navLinks } from "../constant"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"


const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-center items-center relative shadow-lg'>
      <div className="sm:px-16 px-6 bg-white flex justify-between items-center xl:max-w-[1280px] w-full">
        <a href="/" className="font-space text-[30px] gradient-brand-primary gradient-text font-bold">CRYPTOGE</a>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((link, index) => (
            <li key={link.id} className={`font-space text-primary font-extrabold text-[20px] hover:text-secondary ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10' }`}>
                <a href={`#${link.id}`} className="">
                  {link.title}
                </a>
            </li>
          ))}
        </ul>
        
        <div className="sm:hidden flex justify-end items-center text-[28px] text-primary cursor-pointer" onClick={() => setToggle(prev => !prev)}>
            {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} sm:hidden p-6 h-screen absolute top-[92px] right-0 w-full rounded-b-xl bg-white z-[-1]`}>
        <ul className="list-none flex-col">
          {navLinks.map((link, index) => (
            <li key={link.id} className={`font-space text-primary text-[20px] font-extrabold ${index === navLinks.length - 1 ? 'mb-4' : 'mb-3' }`}>
                <a href={`#${link.id}`} className="scroll-smooth" onClick={() => setToggle((prev) => !prev)}>
                  {link.title}
                </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar