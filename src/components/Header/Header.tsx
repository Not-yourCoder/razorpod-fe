
import NavBar from '../NavMenu/NavBar'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className='w-full py-12 px-18 border-b-2 border-accent-foreground flex justify-between items-center'>
            <div className="logo h-10">
                <p>logo</p>
                {/* <img src={images.logoWithname} alt='razorpod-logo' className='h-18' /> */}
            </div>
            <NavBar />
        </div>
    )
}

export default Header