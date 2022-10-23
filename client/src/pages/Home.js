import React from "react"
import HeroImg from '../assets/hero.svg'
import FeatImg from '../assets/feat.svg'
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <div className='md:mx-28 mx-4 text-white py-10'>

            <div className='md:grid md:grid-cols-2 items-center'>
                <div className=''>
                    <h1 className='text-3xl md:text-6xl'>Who we are</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>APP NAME is a web application where users can take a parkinsons test to check if you have Parkinson or not. We also have a story telling game specially for elderly people to diagnose Alzheimer and improve cognitive skills.</p>

                    <Link to="/disease">
                        <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Disease Prediction</button>
                    </Link>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={HeroImg} alt="img" width="400" height="400" />
                </div>
            </div>

            <div className='md:grid md:grid-cols-2 pt-12 items-center'>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={FeatImg} alt="img" width="350" height="350" />
                </div>
                <div className=''>
                    <h1 className='text-5xl'>What else do we have</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider'>APP NAME is a web app where you can:
                    </p>
                    <ul className="text-2xl">
                        <li className="list-disc">Smart disease prediction.</li>
                        <li className="list-disc">Contact doctor for any help.</li>
                        <li className="list-disc">Take a parkinsons test to check if you have Parkinson or not.</li>
                        <li className="list-disc">A story telling game specially for elderly people to diagnose Alzheimer and improve cognitive skills.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
