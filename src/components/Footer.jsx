import { useState } from "react"
import { footer } from "../constant"
import { FaTwitter, FaDiscord, FaFacebook, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const [socials, setSocials] = useState([
    { icon: <FaTwitter/>, 
      url: 'https://twitter.com/home/'
    }, 
    { icon: <FaDiscord/>, 
      url: 'https://discord.com/'
    },
    { icon: <FaFacebook/>, 
      url: 'https://facebook.com/'
    },
    { icon: <FaYoutube/>, 
      url: 'https://youtube.com/'
    }])

  return (
    <section id="#footer">
      <div className="flex lg:justify-between justify-center items-end text-center">
        <div className="hidden lg:flex lg:w-[400px]">
          <img src="../../assets/footerimg1.png" alt="wallet2Img" />
        </div>
        <div>
          <ul className="flex flex-row text-4xl text-primary">
            {socials.map((social, index) => (
              <li key={index} className="px-4 hover:text-secondary"><a href={social.url} target="_blank">{social.icon}</a></li>
            ))}
          </ul>
          <div className="text-[17px] font-space font-bold text-primary flex text-center justify-center items-center py-9 gap-5"><a className="cursor-pointer hover:text-secondary">{footer.text1}</a><a className="cursor-pointer hover:text-secondary">{footer.text2}</a></div>
        </div>
        <div className="hidden lg:flex lg:w-[400px]">
          <img src="../../assets/footerimg2.png" alt="phoneImg" />
        </div>
      </div>
    </section>
  )
}

export default Footer