import { Root } from '@/types/WeatherAPIResponse'
import Link from 'next/link'



export default function WeekForecast({ data }: { data: Root }) {
    return (
        <section className='grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-2 m-2  text-white justify-center'>
            {data.forecast.forecastday.map(item => {
                return (
                    <Link href={``}
                        className='flex flex-col items-center rounded-lg p-2 bg-white/10 hover:bg-white/20 '
                    >
                        <p className='mb-2'>
                            {item.date} 
                        </p>

                        <p>
                            Max: {item.day.maxtemp_c}º
                        </p>

                        <img src={item.day.condition.icon} alt="" />

                        <p>
                            Min: {item.day.mintemp_c}º
                        </p>
                    </Link>
                )
            })}
        </section>
    )
}
