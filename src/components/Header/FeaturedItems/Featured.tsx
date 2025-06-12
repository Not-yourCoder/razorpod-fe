
import { Link } from '@tanstack/react-router'


type Props = {
    productLabel: string
    image: string
    brand: string
    onClick: () => void
}

const Featured = ({ productLabel, brand, image, onClick }: Props) => {

    return (
        <div className='max-w-3xl w-full flex items-center gap-2' onClick={onClick} >
            <img className='w-20 h-30' src={image} alt='featured-item' />
            <div className=''>
                <h1 className='font-semibold text-sm'>{productLabel}</h1>
                <h4 className='text-xs font-normal'>{brand}</h4>
            </div>
        </div>
    )
}

export default Featured