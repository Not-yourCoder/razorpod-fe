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
                        <NavigationMenuItem >
                            <NavigationMenuTrigger className='text-md'>Sort By</NavigationMenuTrigger>
                            <NavigationMenuContent className='bg-red-800 z-[99999]'>
                                <RadioGroup defaultValue="option-one" className='w-56'>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="price-ascending" id="price-ascending" />
                                        <Label htmlFor="price-ascending">Price Low to High</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="price-descending" id="price-descending" />
                                        <Label htmlFor="price-descending">Price High to Low</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="name-ascending" id="name-ascending" />
                                        <Label htmlFor="name-ascending">Name ( A -> Z
                                            )
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="name-descending" id="name-descending" />
                                        <Label htmlFor="name-descending">Name ( Z -> A
                                            )
                                        </Label>
                                    </div>
                                </RadioGroup>
                            </NavigationMenuContent>
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
                            {/* <NavigationMenuTrigger>
                                <ShoppingCart />
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <Cart />
                            </NavigationMenuContent> */}
                            <NavigationMenuLink >
                                <Link to="/shopping_cart">
                                    <ShoppingCart size={24} />
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className='px-0'>
                                <ul className="grid w-fit gap-4 p-0 m-0">
                                    <li className='flex gap-2 items-center text-sm hover:bg-blue-400 hover:text-white px-4 py-1 rounded-sm'>
                                        <UserPen size={14} />
                                        Account
                                    </li>
                                    <li className='flex gap-2 items-center text-sm hover:bg-blue-400 hover:text-white px-4 py-1 rounded-sm'>
                                        <ShoppingBag size={14} />
                                        Orders
                                    </li>
                                    <li className='flex gap-2 items-center text-sm hover:bg-blue-400 hover:text-white px-4 py-1 rounded-sm'>
                                        <ScrollText size={14} />
                                        Wishlist
                                    </li >
                                    <li className='flex gap-2 items-center text-sm hover:bg-blue-400 hover:text-white px-4 py-1 rounded-sm'>
                                        <Cog size={14} />
                                        Settings
                                    </li>
                                    <li className='flex gap-2 items-center text-sm hover:bg-blue-400 hover:text-white px-4 py-1 rounded-sm'>
                                        <LogOut size={14} />
                                        Log Out
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenu>
                </div>
            </div>
        </div>
    )
}

export default NavBar