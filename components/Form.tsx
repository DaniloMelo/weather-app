'use client'
import { Root } from '@/types/WeatherAPIResponse'
import fetchWeatherAPI from '../app/api/fetchWeatherAPI'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import CurrentForecast from './CurrentForecast'
import WeekForecast from './WeekForecast'

export default function Form() {
    const [region, setRegion] = useState<string>('')
    const [data, setData] = useState<Root | null>(null)
    const [error, setError] = useState<string>('')

    async function fetchData(region: string) {
        try {
            const data = await fetchWeatherAPI(region)
            setData(data)
            setError('')
        } catch (error) {
            setError(`A Cidade ${region} não foi encontrada.`)
            setData(null)
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        fetchData(region)
        setRegion('')
    }

    return (
        <>
            <section className="p-10 flex justify-center text-white">
                <form className="flex md:w-2/6" onSubmit={handleSubmit}>
                    <input className="mr-[-30px]  placeholder-white bg-transparent outline-none border-b-2 w-full md:px-5"
                        placeholder="Cidade"
                        value={region}
                        onChange={e => setRegion(e.target.value)}
                    />
                    <button type="submit">
                        <AiOutlineSearch className=" mb-1" size="25" />
                    </button>
                </form>
            </section>

            {data ? (
                <section className='flex flex-col items-center justify-center lg:flex-row'>
                    <CurrentForecast data={data} />
                    <WeekForecast data={data} />
                </section>
                
            ) : error ? (
                <div className='flex flex-col items-center mt-10 text-xl text-white'>
                    <p>{error}</p>
                    <p>Inforfme uma cidade válida</p>
                </div>
            ) : (
                <div className='flex flex-col items-center mt-10 text-xl text-white'>
                    <p>Bem Vindo ao Weather App!</p>
                    <p>Informe a cidade para verificar a previsão do tempo.</p>
                </div>
            )}
        </>
    )
}
