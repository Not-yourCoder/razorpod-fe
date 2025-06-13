import { ChevronLeft } from 'lucide-react'

type Props = {
    selectedCategory: string
    gotoHome : ()
 => void}

const ProductCatHeader = ({ selectedCategory, gotoHome }: Props) => {
    return (
        <section className="flex gap-4 items-center py-6 text-2xl">
            <div className="p-2 rounded-full hover:bg-slate-300 hover:scale-105 duration-300 hover:cursor-pointer hover:text-white" onClick={gotoHome}>
                <ChevronLeft size={28} />
            </div>
            <h1>{selectedCategory}</h1>
        </section>
    )
}

export default ProductCatHeader