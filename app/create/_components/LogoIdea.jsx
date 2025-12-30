"use client"
import React, { useEffect, useState } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'
import axios from 'axios'
import Prompt from '@/app/_data/Prompt'
import { Loader2Icon } from 'lucide-react'

function LogoIdea({ onHandleInputChange, formData }) {
  // useEffect(() => {
  //   generateLogoDesignIdea()
  // }, [])

  const [loading, setLoading] = useState(false)
  const [ideas, setIdeas] = useState()
  const [selectedOption, setSelectedOption] = useState()

  const generateLogoDesignIdea = async () => { 
    setLoading(true)
    const PROMPT = Prompt.DESIGN_IDEA_PROMPT
      .replace('{logoType}', formData?.design.title)
      .replace('{logoTitle}', formData?.title)
      .replace('{logoDesc}', formData?.desc)
      .replace('{logoPrompt}', formData?.design.prompt)
    
    const result = await axios.post('/api/ai-design-ideas', {
      prompt: PROMPT
    })
    console.log('result', result.data);
    setIdeas(result.data)
    setLoading(false)
  }

  return (
    <div className='my-10'>
      <HeadingDesc
        title={Lookup?.LogoIdeaTitle}
        description={Lookup?.LogoIdeaDesc}
      />

      <div className="flex items-center justify-center">
        {loading && <Loader2Icon className='animate-spin my-10' />}
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        {ideas && ideas?.map((idea, index) => (
          <h2
            className={`p-2 rounded-full border px-3 cursor-pointer hover:border-primary ${selectedOption === idea ? 'border-primary' : ''}`}
            key={index}
            onClick={() => {setSelectedOption(idea); onHandleInputChange(idea)}}
          >{idea}</h2>
        ))}
        <h2
          className={`p-2 rounded-full border px-3 cursor-pointer hover:border-primary ${selectedOption === 'Let AI Select the best idea' ? 'border-primary' : ''}`}
          onClick={() => {setSelectedOption('Let AI Select the best idea'); onHandleInputChange('Let AI Select the best idea')}}
        >Let AI Select the best idea</h2>
      </div>
    </div>
  )
}

export default LogoIdea