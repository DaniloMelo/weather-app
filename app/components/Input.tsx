import { AiOutlineSearch } from "react-icons/ai"

export default function Input() {
    return (
        <section className="p-10 flex justify-center">
            <form className="flex md:w-2/6">
                <input className="mr-[-30px] text-white placeholder-white bg-transparent outline-none border-b-2 w-full md:px-5"
                    placeholder="Cidade ou CEP"
                />
                <button type="submit">
                    <AiOutlineSearch className="text-white" size="25"/>
                </button>
            </form>
        </section>
    )
}