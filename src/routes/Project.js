import React from 'react'
import ProjectImg from '../components/ProjectImg'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <ProjectImg heading='Projects.' text='Some of my recent projects'></ProjectImg>
      <Work></Work>
      <PricingCard></PricingCard>
    </div>
  )
}

export default Project