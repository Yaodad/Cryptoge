import { useEffect, useState } from "react"
import { heroHeader } from "../constant"
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { CryptoCoins } from "../config"
import { MutatingDots } from  'react-loader-spinner'
import { Link } from "react-router-dom"

const Hero = () => {
  const [carouselCoins, setCarouselCoins] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => { 
    async function fetchTrending() {
      setLoader(true)
      try {
        const response = await fetch(CryptoCoins())
        const data = await response.json()

        if (response.ok) {
          setCarouselCoins(data)
          setLoader(false)
        }

      } catch(err) {
        console.log(err);
      }
      
    }
    fetchTrending()
  },[])

  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: {
        items: 1,
    },
    320: {
      items: 2,
      itemsFit: 'contain'
    },
    700: {
      items: 3,
      itemsFit: 'contain'
    },
    1024: {
        items: 5,
        itemsFit: 'contain',
    }
  }

  // Number with comma format
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Carousel items
  const items = carouselCoins.slice(0,10).map((coin, index) => (
    <Link to={`/coin/${coin.id}`} key={index} className="my-10 flex justify-center items-center uppercase">
      <div className="w-[150px] h-[100px] my-10">
        <div className="w-[150px] flex justify-center items-center">
          <img src={coin.image} onDragStart={handleDragStart} role="presentation" className="w-[95px]"/>
        </div>
        <div className="flex-col justify-center text-center items-center">
          <div className="my-2 font-space">
            <p className="font-bold text-[#444444]">{coin.symbol} <span className={coin.market_cap_change_percentage_24h < 0 ? 'text-red-600 text-sm' : 'text-green-600 text-sm'} >{(coin.market_cap_change_percentage_24h).toFixed(3)} %</span></p>
          </div>
          <p className="text-lg font-bold text-[#444444]">$ {numberWithCommas((coin.current_price).toFixed(2))}</p>
        </div>
      </div>
    </Link>
  ))

  return (
    <section id="home" className="flex-col justify-center items-center text-center pt-44 leading-tight mb-11">
      <div className="flex justify-center items-center gap-14">
        <div className="w-[100px] hidden lg:block">
          <img src="../../assets/btcicon.png" alt="btc"/>
        </div>
        <h1 className="font-space gradient-brand-primary gradient-text font-bold sm:text-[138px] ss:text-[90px] text-[60px]">
          {heroHeader.name}
        </h1>
        <div className="w-[100px] hidden lg:block">
          <img src="../../assets/ethicon.png" alt="btc"/>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <p className="font-space font-bold sm:text-[25px] ss:text-[18px] text-[11px] text-secondary bg-primary xs:px-3 px-1 py-1">{heroHeader.mssg}</p>
      </div>

      <div className="sm:px-16 px-6 mx-auto w-full flex-col items-center justify-center text-center">
        <AliceCarousel autoPlay autoPlayInterval={1000} animationDuration={2000} infinite mouseTracking responsive={responsive} disableButtonsControls disableDotsControls items={items}/>
        {loader && <div className='flex justify-center mt-[28px]'>
          <MutatingDots 
            height="100"
            width="100"
            color="#163d5d"
            secondaryColor= '#00C5C1'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>}
      </div>
      
    </section>
  )
}

export default Hero