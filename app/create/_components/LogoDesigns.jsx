"use client"
import React, { useState } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'
import LogoDesign from '@/app/_data/LogoDesign'
import Image from 'next/image'

function LogoDesigns({ onHandleInputChange, formData }) {
  const [selectedOption, setSelectedOption] = useState(formData?.design?.title)

  return (
    <div className='my-10'>
      <HeadingDesc
        title={Lookup?.LogoDesignTitle}
        description={Lookup?.LogoDesignDesc}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {LogoDesign.map((design, index) => (
          <div
            className={`p-1 cursor-pointer hover:border-2 border-primary rounded-xl ${selectedOption === design?.title ? 'border-2 border-primary rounded-xl' : ''}`}
            key={index}
            onClick={() => {
            setSelectedOption(design?.title)
            onHandleInputChange(design)
          }}>
            <Image
              src={design?.image}
              alt={design?.title}
              className='w-full rounded-xl h-37.5 object-cover'
              width={300}
              height={200}
            />
            <h2 className="text-center mt-3 font-medium text-lg">{design?.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoDesigns