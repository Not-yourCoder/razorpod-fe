import { Link } from '@tanstack/react-router'
import { navMenu } from '../../constants/Constants'
import { Label } from '../Ui/label'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger } from '../Ui/navigation-menu'
import { RadioGroup, RadioGroupItem } from '../Ui/radio-group'
import { NavItem } from './NavItem'
import { Cog, LogOut, ScrollText, ShoppingBag, ShoppingCart, UserPen } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../Ui/avatar'
import { useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '@/store/store'
import { useEffect, type Dispatch, type SetStateAction } from 'react'
import { fetchCategories } from '@/store/slices/categorySlice'
import { useSelector } from 'react-redux'
import Cart from '../Cart/Cart'
import ProductSortSelect from '../Product/ProductSort/ProductSort'
import CartIcon from '../Header/CartComponent/CartIcon'
import AccountSelect from '../Profile/Profile'

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