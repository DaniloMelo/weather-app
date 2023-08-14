'use client'
import { Root} from '@/types/WeatherAPIResponse'
import fetchWeatherAPI from '../app/api/fetchWeatherAPI'
import { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import CurrentForecastCard from './CurrentForecastCard'

export default function Form() {
    const [region, setRegion] = useState<string>('')
    const [data, setData] = useState<Root>()

    async function fetchData(region: string) {
        const data = await fetchWeatherAPI(region)
        setData(data)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        fetchData(region)
        setRegion('')
    }

    return (
        <>
            <section className="p-10 flex justify-center">
                <form className="flex md:w-2/6" onSubmit={handleSubmit}>
                    <input className="mr-[-30px] text-white placeholder-white bg-transparent outline-none border-b-2 w-full md:px-5"
                        placeholder="Cidade"
                        value={region}
                        onChange={e => setRegion(e.target.value)}
                    />
                    <button type="submit">
                        <AiOutlineSearch className="text-white mb-1" size="25" />
                    </button>
                </form>
            </section>

            {data ? <CurrentForecastCard data={data} />
                : <div className='flex flex-col items-center mt-10 text-xl text-white'>
                    <p>Bem Vindo ao Weather App!</p>
                    <p>Informe uma cidade para verificar a previsão do tempo.</p>
                  </div>
            }

        </>
    )
}
