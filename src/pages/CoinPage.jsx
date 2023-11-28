import { useEffect, useState } from "react"
import { SingleCoin } from "../config"
import { Link, useParams } from "react-router-dom"
import { FaHome } from 'react-icons/fa'
import { CoinChart } from "../components"
import { MutatingDots } from  'react-loader-spinner'

const CoinPage = () => {
  const [coinInfo, setCoinInfo] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    async function fetchSingleCoin() {
      try {
        const response = await fetch(SingleCoin(id))
        const data = await response.json()

        if (response.ok) {
          setCoinInfo(data)
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchSingleCoin()
  },[])

  // Number with comma format
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <section id="page">
      <div className="relative">
        <div className="fixed top-0 left-0 right-0 bg-white z-[100] shadow-lg">
          <div className="sm:px-16 px-6 flex justify-center items-center">
            <div className="xl:max-w-[1280px] w-full">
              <div className=" py-[24px] text-[45px] z-[1000] flex justify-center">
                <div className="flex-initial w-[45px] text-primary hover:text-secondary">
                  <Link to={"/"}><FaHome/></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:px-16 px-6 flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <div className="grid lg:grid-cols-4 justify-center items-center">
              {coinInfo ? 
                <div className="lg:text-start text-center font-space lg:text-[20px] md:text-[26px] sm:text-[20px] text-[16px] text-primary font-bold uppercase mx-auto flex flex-col lg:items-start sm:items-center items-start justify-center lg:h-screen lg:pr-8 lg:pt-0 pt-[140px] lg:pb-0 pb-9">
                  <div className="self-center">
                    <img src={coinInfo.image.large} alt="logoImg" className="md:w-[250px] w-[180px]"/>
                  </div>
                  <h1 className="font-extrabold lg:text-[32px] md:text-[45px] text-4xl self-center py-3">{coinInfo.name}</h1>
                  <h3>Rank: <span className="text-secondary lg:text-[20px] md:text-[26px]  sm:text-[20px] text-[16px]">{coinInfo.market_cap_rank}</span></h3>
                  <h3>Current Price: <span className="text-secondary lg:text-[20px] md:text-[26px] sm:text-[20px] text-[16px]">${numberWithCommas((coinInfo.market_data.current_price.usd).toFixed(2))}</span></h3>
                  <h3>Market Cap: <span className="text-secondary lg:text-[20px] md:text-[26px]  sm:text-[20px] text-[16px]">${numberWithCommas((coinInfo.market_data.market_cap.usd).toFixed(2))}</span></h3>
                </div>
                : 
                <div className='flex justify-center items-center'>
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
                </div>
              }
                <div className="lg:col-span-3 w-full lg:h-[520px] h-[600px] self-center pt-[35px]">
                  <CoinChart/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default CoinPage