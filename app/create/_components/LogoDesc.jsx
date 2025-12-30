import React from 'react'
import Lookup from '@/app/_data/Lookup'
import HeadingDesc from './HeadingDesc'

function LogoDesc({ onHandleInputChange, formData }) {
  return (
    <div className='my-10'>
      <HeadingDesc
        title={Lookup?.LogoDescTitle}
        description={Lookup?.LogoDescDesc}
      />
      <input
        type='text'
        placeholder={Lookup?.InputDescPlaceholder}
        defaultValue={formData.desc}
        className='w-full p-4 border rounded-lg mt-5'
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  )
}

export default LogoDesc