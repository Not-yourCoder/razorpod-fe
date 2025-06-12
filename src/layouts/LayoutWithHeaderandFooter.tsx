import React from 'react'
import Header from '../components/Header/Header'

type Props = {
    children: React.ReactNode
}

const LayoutWithHeaderandFooter = ({ children }: Props) => {
    return (
        <div className='max-h-screen min-w-full'>
            <Header />
            {children}
        </div>
    )
}

export default LayoutWithHeaderandFooter