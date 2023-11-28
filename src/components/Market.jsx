import React, { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { CryptoCoins } from '../config'
import { tableHead } from '../constant'
import { MutatingDots } from  'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

const Market = () => {
  const [coins, setCoins] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [loader, setLoader] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => { 
    async function fetchTrending() {
      setLoader(true)
      try {
        const response = await fetch(CryptoCoins())
        const data = await response.json()

        if (response.ok) {
          setCoins(data)
          setLoader(false)
        }

      } catch(err) {
        console.log(err);
      }

    }
    fetchTrending()
  },[])

  // Number with comma format
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  // Searched coins / Display coins
  const searchedCoins = () => {
    return coins.filter((findCoin) => findCoin.name.toLowerCase().includes(searchValue.toLowerCase()) || findCoin.symbol.toLowerCase().includes(searchValue.toLowerCase()))
  }

  // Init nav for coinppage
  const navigate = useNavigate();

  return (
    <section id='market' className='mt-[100px] md:px-16'>
      <h3 className='text-primary text-center font-space font-bold text-[28px] my-6'>Cryptocurrency Prices by Market Cap</h3>
      <div>
        <form onSubmit={e => e.preventDefault()} onChange={((e) => {setSearchValue(e.target.value)})}>
          <input type="text" name='search' className='my-2 border-2 border-secondary focus:border-primary outline-none rounded-md px-2 py-3 w-full text-primary text-lg font-medium' autoComplete='off' placeholder='Search For a Crypto Currency...'/>
        </form>
      </div>

      <div className='overflow-x-auto'>
        <table className='sm:w-full w-[800px] my-1 rounded-lg bg-secondary text-[16px] table-auto'>
          <thead className=' text-white font-space'>
            <tr>
              {tableHead.map((thead, index) => (
                <th className={index === 0 ? 'text-left px-3 py-4 font-extrabold w-[200px]' : index === 3 ? 'text-right px-3 font-extrabold w-[200px]' : 'text-right font-extrabold w-[200px]'} key={thead.id}>{thead.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            { searchValue !== '' && searchedCoins().length !== 0 ? searchedCoins().slice(0, 10).map((coin,index) => (
              <tr key={index} className='hover:bg-[#dbdbdb] bg-white border-b-2 border-secondary font-space font-semibold text-primary cursor-pointer' onClick={() => {
                navigate(`/coin/${coin.id}`)
              }}>
                <td className='text-left py-5'><div className='flex items-center px-3'><img src={coin.image} alt="image" className='w-[50px] pr-3'/>{coin.name}</div></td>
                <td className='text-right'>${numberWithCommas((coin.current_price).toFixed(2))}</td>
                <td className={coin.market_cap_change_percentage_24h < 0 ? 'text-red-600 text-sm text-right' : 'text-green-600 text-sm text-right'}>{(coin.market_cap_change_percentage_24h).toFixed(3)} %</td>
                <td className='text-right pr-3'>${numberWithCommas((coin.market_cap).toFixed(2))}</td>
              </tr>
            )) : !loader && searchedCoins().length === 0 ? <tr><td colSpan={4} className='text-center bg-white border-b-2 border-secondary py-10 font-space text-lg text-primary'>No results found</td></tr> : null }

            { searchValue === '' && searchedCoins().length !== 0 && searchedCoins().slice((page - 1) * 10, (page - 1) * 10 + 10).map((coin,index) => (
              <tr key={index} className='hover:bg-[#dbdbdb] bg-white border-b-2 border-secondary font-space font-semibold text-primary cursor-pointer' onClick={() => {
                navigate(`/coin/${coin.id}`)
              }}>
                <td className='text-left py-5'><div className='flex items-center px-3'><img src={coin.image} alt="image" className='w-[50px] pr-3'/>{coin.name}</div></td>
                <td className='text-right'>${numberWithCommas((coin.current_price).toFixed(2))}</td>
                <td className={coin.market_cap_change_percentage_24h < 0 ? 'text-red-600 text-sm text-right' : 'text-green-600 text-sm text-right'}>{(coin.market_cap_change_percentage_24h).toFixed(3)} %</td>
                <td className='text-right pr-3'>${numberWithCommas((coin.market_cap).toFixed(2))}</td>
              </tr>
            ))}
             
          </tbody>
        </table>
      </div>
      {loader && <div className='flex justify-center'>
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

      {loader || searchValue !== '' ? null :
        <nav className='mt-6'> 
          <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <a
                href="#market"
                className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-primary ${page === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-50'}`} onClick={(e) => {page === 1 ? e.preventDefault() : setPage(page - 1)}}
              >
                Previous
              </a>
              <a
                href="##market"
                className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 ${page === 10 ? 'cursor-not-allowed' : 'hover:bg-gray-50'}`} onClick={(e) => {page === 10 ? e.preventDefault() : setPage(page + 1)}} 
              >
                Next
              </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
              <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  <a
                    href="#market"
                    className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${page === 1 ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-gray-50 focus:z-20 focus:outline-offset-0'}`} onClick={(e) => {page === 1 ? e.preventDefault() : setPage(page - 1)}}
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </a>

                  {coins.slice(0, coins.length/10).map((_, index) => (
                    <a
                    href="#market"
                    aria-current="page"
                    className={`relative z-10 inline-flex items-center ${page === index + 1 ? 'bg-secondary text-white' : 'ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 text-primary'}  px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary`} key={index} onClick={() => setPage(index + 1)}
                  >
                    {index + 1}
                  </a>
                  ))}
        
                  <a
                    href="#market"
                    className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300  ${page === 10 ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-gray-50 focus:z-20 focus:outline-offset-0'}`} onClick={(e) => {page === 10 ? e.preventDefault() : setPage(page + 1)}} 
                  >
                    <span className="sr-only text-primary">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </nav>
      }
    </section>
  )
}


export default Market