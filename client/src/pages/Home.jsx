import React, { useState } from 'react'
import InputForm from '../components/InputForm'
import Roadmap from '../components/Roadmap'
import { apiRecommend } from '../lib/api'

export default function Home(){
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  const onGenerate = async (payload) => {
    setLoading(true)
    setData(null)
    try {
      const res = await apiRecommend(payload)
      setData(res)
    } catch (e) {
      setData({ summary: 'Could not get AI response. Try again later.', phases: [] })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="row" style={{alignItems:'flex-start'}}>
      <div style={{flex:1}}>
        <div className="card" style={{marginBottom:16}}>
          <InputForm onGenerate={onGenerate} loading={loading} />
        </div>
        <div className="card">
          <h3 style={{marginTop:0}}>Roadmap</h3>
          <Roadmap data={data} loading={loading} />
        </div>
      </div>
    </div>
  )
}
