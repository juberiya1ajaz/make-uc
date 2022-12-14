import React, { useState } from 'react';
import uploadSVG from '../assets/uploadImage.svg'
import { uploadPhotoAsync } from '../utils/utils'

function ParkinsonDiseasePrediction({ prediction }) {

    const precision = (prediction.probability * 100).toFixed(2)

    const [data, setData] = useState([])

    const [pictures, setPictures] = React.useState([])
    const [hasSearched, setHasSearched] = React.useState(false)
    const [uploading, setUploading] = React.useState(false)
  
    const processImage = async blob => {
      setUploading(true)
      const { success, data } = await uploadPhotoAsync('/face', 'A Face', blob)
      if (success) {
        setPictures(data)
      }
      setHasSearched(true)
      setUploading(false)
    }

    const handleClickImage = async event => {
        event.preventDefault()
        console.log('click')
        try {
            const fetchOptions = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="">

            <div className='grid place-items-center'>
                <h1 className='text-5xl font-white font-semibold text-white'>Parkinson Disease Prediction</h1>
                <div className='bg-secondary h-1 w-96 rounded-full'></div>
            </div>

            <div>
                {data.name ? (
                    <div className="flex flex-row space-x-12 justify-center items-center w-full pt-36 pb-48">

                        <div className="">
                            <button className='bg-secondary py-2 px-8 rounded-md text-xl text-white' onCLick={handleClickImage}>
                                Upload another image
                            </button>
                            <input />
                        </div>

                        <div className=' '>
                            <img
                                src=""
                                width={220}
                                height={180}
                                alt="image"
                            />
                        </div>

                        <div className=''>
                            <article className="w-[500px] bg-gray-100 rounded-xl p-3 h-56">
                                <h2 className="text-xl py-8 font-bold">
                                    {prediction.className.replace(/(_)/gi, ' ')}
                                </h2>
                                <h5 className='text-xl py-2'>Probability: {precision.replace('.', ',')} %</h5>

                            </article>
                        </div>

                    </div>
                ) : (
                    <div className="grid place-items-center">

                        <div className="py-6">
                            <h2 className='text-white text-center text-3xl py-5'>Choose a file</h2>

                            <div className='w-96 h-96 rounded-lg mb-24 bg-gray-100 border-4 border-dashed border-secondary grid place-items-center' data-testid="dropzone-container" onChange={handleClickImage}>
                                <img src={uploadSVG} className="w-28 h-28 pt-8" alt="Illustration upload" />
                                <h1 className="text-[28px] font-bold text-center">Choose a file</h1>
                                <p className='text-lg pb-14'>No file selected.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div >
    );
}

export default ParkinsonDiseasePrediction;