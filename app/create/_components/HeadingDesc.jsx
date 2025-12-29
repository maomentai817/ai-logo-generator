import React from 'react'

function HeadingDesc({ title, description }) {
  return (
    <div>
      <h2 className="text-primary font-bold text-3xl">{title}</h2>
      <p className="text-gray-500 text-lg mt-2">{description}</p>
    </div>
  )
}

export default HeadingDesc