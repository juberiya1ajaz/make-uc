import React from 'react'
import { Link } from 'react-router-dom'

export default function Alzheimer() {
    return (
        <div className='text-white'>
            <div className='grid place-items-center'>
                <h1 className='text-5xl font-semibold py-2'>Alzheimer MoCA test</h1>
                <div className="bg-secondary w-36 h-1 rounded-full"></div>

                <div className="my-10">
                    <iframe src="Alice_in_Wonderland.pdf" width={1200} height={1200} title="book" />
                </div>

                <Link to="/test">
                    <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl mb-10'>Take test</button>
                </Link>

            </div>
        </div>
    )
}
