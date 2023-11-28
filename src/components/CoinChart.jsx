import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import { Chart } from "chart.js/auto"
import { HistoricalChart } from "../config"
import { useParams } from "react-router-dom"
import { MutatingDots } from  'react-loader-spinner'

const CoinChart = () => {
    const { id } = useParams()
    const [coinData, setCoinData] = useState([1])

    useEffect(() => {
        async function historyData() {
            try{
                const response = await fetch(HistoricalChart(id))
                const data = await response.json()

                if (response.ok) {
                    setCoinData(data.prices)
                }
            } catch (err) {
                console.log(err)
            }
        }

        historyData()
    },[])

  return (
    <>{coinData
            ?   <div className="lg:pl-11 lg:pr-0 lg:border-l-2 lg:border-secondary lg:static relative block lg:w-auto w-screen h-full px-5">
                        <Line 
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                    },
                                    title: {
                                        display: true,
                                        text: '24hr Line Chart'
                                    },
                                },
                                maintainAspectRatio: true,
                            }} 
                            data={{
                                labels: 
                                    coinData.map((coin) => {
                                        const date = new Date(coin[0])
                                        const time = date.getHours() > 12
                                            ? `${date.getHours() - 12}: ${date.getMinutes()} PM`
                                            : `${date.getHours()}: ${date.getMinutes()} AM`
                                        return time
                                    }),
                                datasets: [
                                    {
                                        label: 'Price',
                                        data: coinData.map((coin) => coin[1]),
                                        borderColor: '#00C5C1',
                                        backgroundColor: '#163d5d',
                                        pointRadius: 0
                                    }
                                ]
                            }}
                        />
                    </div> 
            :   <div className='flex justify-center items-center'>
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
    </>
  )
}

export default CoinChart