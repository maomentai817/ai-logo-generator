"use client"
import React, { useState } from 'react'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'
import HeadingDesc from './HeadingDesc'



function LogoColorPalette({ onHandleInputChange, formData }) {
  const [selectedOption, setSelectedOption] = useState(formData?.palette)

  return (
    <div className='my-10'>
      <HeadingDesc
        title={Lookup?.LogoColorPaletteTitle}
        description={Lookup?.LogoColorPaletteDesc}
      />
      {/* 色相 */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {Colors.map((palette, index) => (
          <div className={ `flex p-1 cursor-pointer ${selectedOption === palette?.name ? 'border-2 rounded-lg border-primary' : ''}` } key={index}>
            {palette?.colors.map((color, i) => (
              <div
                className="h-24 w-full"
                key={i}
                onClick={() => {
                  setSelectedOption(palette?.name)
                  onHandleInputChange(palette?.name)
                }}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoColorPalette