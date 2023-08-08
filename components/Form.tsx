'use client'
import fetchWeatherAPI from '../app/api/fetchWeatherAPI'
import { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"

export default function Form() {
    const [region, setRegion] = useState<string>('')
    const [data, setData] = useState<any>()

    async function fetchData(region: string) {
        const data = await fetchWeatherAPI(region)
        setData(data)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        fetchData(region)
    }

    return (
        <>
            <section className="p-10 flex justify-center">
                <form className="flex md:w-2/6" onSubmit={handleSubmit}>
                    <input className="mr-[-30px] text-white placeholder-white bg-transparent outline-none border-b-2 w-full md:px-5"
                        placeholder="Cidade ou CEP"
                        value={region}
                        onChange={e => setRegion(e.target.value)}
                    />
                    <button type="submit">
                        <AiOutlineSearch className="text-white mb-1" size="25" />
                    </button>
                </form>
            </section>

            
        </>
    )
}
