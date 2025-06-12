import { images } from '@/constants/Images'
import React from 'react'
import { Button } from '../Ui/button'

type Props = {}

const NoItems = (props: Props) => {
    return (
        <div className='flex flex-col justify-center items-center gap-6 text-center bg-white p-8 rounded-lg shadow-lg'>
            <img src={images.emptyBox} alt='empty-box' className='w-48 h-48 object-contain' />

            <div>
                <h1 className='text-2xl font-semibold text-gray-800 mb-2'>No Items Found</h1>
                <p className='text-gray-600 max-w-md'>
                    Looks like this item is currently out of stock. Don’t worry! Click the <strong>Notify Me</strong> button below and we’ll email you when it’s back.
                </p>
            </div>

            <Button variant="default">Notify Me</Button>
        </div>
    )
}

export default NoItems
