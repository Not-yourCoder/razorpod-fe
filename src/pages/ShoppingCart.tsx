import ShoppingCartComponent from '@/components/Cart/Cart'

type Props = {}

const ShoppingCart = (props: Props) => {
    return (
        <div className='flex items-center justify-center min-h-screen w-full'>
            <ShoppingCartComponent />
        </div>
    )
}

export default ShoppingCart