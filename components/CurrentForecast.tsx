import dateFormatter from "@/utils/dateFormatter"
import { Root } from "@/types/WeatherAPIResponse"
import { ImLocation } from "react-icons/im"

export default function CurrentForecast({ data }: { data: Root }) {
    const currentDate = dateFormatter(new Date())

    return (
        <>
            <section className="text-white flex justify-center">
                <div className="flex flex-col items-center p-5 bg-white/10 rounded-xl m-5">
                    <p className="flex items-center mb-5 text-2xl">
                        <ImLocation className="mr-1 text-red-700" />
                        {`${data.location.name} - ${data.location.region}, ${data.location.country}.`}
                    </p>
                    <p className="text-2xl mb-5">
                        {currentDate}
                    </p>

                    <div className="text-5xl">
                        <p>{data.current.temp_c}º</p>
                    </div>

                    <div>
                        <img src={data.current.condition.icon}
                            alt={`an image of the current weather`}
                            className="w-24 h-24">
                        </img>
                    </div>

                    <div className="text-2xl mb-5">
                        {data.current.condition.text}
                    </div>
                </div>
            </section>
        </>


    )
}



