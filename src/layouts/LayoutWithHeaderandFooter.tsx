import React, { useState } from 'react'
import Header from '../components/Header/Header'

type Props = {
    children: React.ReactNode
}

const LayoutWithHeaderandFooter = ({ children }: Props) => {
    const [headerHeight, setHeaderHeight] = useState<boolean>(false)
    return (
        <div className='max-h-screen min-w-full'>
            <Header headerHeight={headerHeight} setHeaderHeight={setHeaderHeight} />
            {children}
        </div>
    )
}

export default LayoutWithHeaderandFooter