import React, { useState } from 'react'

export default function InputForm({ onGenerate, loading }){
  const [careerGoal, setCareerGoal] = useState('Frontend Developer')
  const [years, setYears] = useState(0)
  const [focus, setFocus] = useState('')

  const submit = (e)=>{
    e.preventDefault()
    onGenerate({ careerGoal, years: Number(years)||0, focus })
  }

  return (
    <form onSubmit={submit}>
      <h3 style={{marginTop:0}}>Create a Personalized Learning Path</h3>
      <div style={{marginBottom:12}}>
        <label className="small">Target role / goal</label>
        <input className="input" value={careerGoal} onChange={e=>setCareerGoal(e.target.value)} placeholder="e.g., Backend Engineer" />
      </div>
      <div className="row" style={{marginBottom:12}}>
        <div style={{flex:1}}>
          <label className="small">Years of experience (optional)</label>
          <input className="input" type="number" min="0" max="40" value={years} onChange={e=>setYears(e.target.value)} />
        </div>
        <div style={{flex:1}}>
          <label className="small">Focus (optional)</label>
          <input className="input" value={focus} onChange={e=>setFocus(e.target.value)} placeholder="frontend / data / cloud" />
        </div>
      </div>
      <button className="btn" type="submit" disabled={loading}>{loading? 'Generating…' : 'Generate roadmap'}</button>
    </form>
  )
}
