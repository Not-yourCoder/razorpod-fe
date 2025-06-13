import { Link } from '@tanstack/react-router'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger } from '../Ui/navigation-menu'
import ProductSortSelect from '../Product/ProductSort/ProductSort'
import CartIcon from '../Header/CartComponent/CartIcon'
import AccountSelect from '../Profile/Profile'
import type { Dispatch, SetStateAction } from 'react'

type Props = {
    setHeaderHeight: Dispatch<SetStateAction<boolean>>
}

const NavBar = ({ setHeaderHeight }: Props) => {


    const handleExpand = () => setHeaderHeight(true);

    return (
        <div className='list-none'>
            <div className='mx-auto my-0'>
                <div className='flex gap-6'>
                    <NavigationMenu viewport={false}>
                        <NavigationMenuItem className=''>
                            <NavigationMenuTrigger onMouseEnter={handleExpand}
                                className='bg-none text-md'>Filter By Categories</NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem className='text-black'>
                            <ProductSortSelect />
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className='text-md' asChild>
                                <Link to="/products" >Products</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className='text-md' >
                                <Link to="/contactUs">Contact Us</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink >
                                <CartIcon />
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <AccountSelect />
                        </NavigationMenuItem>
                    </NavigationMenu>
                </div>
            </div>
        </div>
    )
}

export default NavBar