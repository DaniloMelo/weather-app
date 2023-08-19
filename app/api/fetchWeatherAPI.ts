import { Root } from "@/types/WeatherAPIResponse"


export default async function GET(region: string): Promise<Root> {
    const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${region}&days=7&aqi=yes&alerts=no`)
    if(!res.ok) throw new Error('Ocorreu uma falha na requisição dos dados.')
    const data = await res.json()
    return data
}


