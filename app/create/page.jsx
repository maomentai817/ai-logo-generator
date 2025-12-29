"use client"
import React, { useState } from 'react'
import LogoTitle from './_components/LogoTitle'
import LogoDesc from './_components/LogoDesc'
import LogoIdea from './_components/LogoIdea'
import LogoDesigns from './_components/LogoDesigns'
import LogoColorPalette from './_components/LogoColorPalette'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

function CreateLogo() {
  const [step, setStep] = useState(1)
  const [formData, setFormDate] = useState()

  // 表单数据收集
  const onHandleInputChange = (field, value) => { 
    setFormDate(prev => ({
      ...prev,
      [field]: value,
    }))

    console.log('formData', formData);
  }

  const getStep = () => { 
    if (step === 1) { 
      return <LogoTitle onHandleInputChange={(v) => onHandleInputChange('title', v)} />
    } else if (step === 2) {
      return <LogoDesc onHandleInputChange={(v) => onHandleInputChange('desc', v)} />
    } else if (step === 3) {
      return <LogoColorPalette onHandleInputChange={(v) => onHandleInputChange('palette', v)} />
    } else if (step === 4) {
      return <LogoDesigns onHandleInputChange={(v) => onHandleInputChange('design', v)} />
    } else if (step === 5) {
      return <LogoIdea onHandleInputChange={(v) => onHandleInputChange('idea', v)} />
    } 
  }

  return (
    <div className='mt-28 p-10 border rounded-xl'>
      { getStep() }
      
      <div className='flex justify-between items-center mt-10'>
        { step !== 1 && <Button variant='outline' onClick={() => setStep(step - 1)}><ArrowLeft /> Previous</Button> }
        <Button onClick={() => setStep(step + 1)}><ArrowRight /> Continue</Button>
      </div>
    </div>
  )
}

export default CreateLogo