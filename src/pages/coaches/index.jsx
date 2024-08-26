import CoachesDets from '@/app/section/CoachesDet'
import OurCoaches from '@/app/section/NewCoaches'
import OurCoachesDetails from '@/app/section/OurCoachesDetails'
import React from 'react'

export default function index() {
  return (
    <div>
      <OurCoachesDetails></OurCoachesDetails>
      <CoachesDets></CoachesDets>
    </div>
  )
}
