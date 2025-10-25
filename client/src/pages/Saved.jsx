import React, { useEffect, useState } from 'react'

export default function Saved(){
  const [items, setItems] = useState([])

  useEffect(()=>{
    const stored = JSON.parse(localStorage.getItem('lpr_saved') || '[]')
    setItems(stored)
  },[])

  return (
    <div className="card">
      <h3 style={{marginTop:0}}>My Saved Plans</h3>
      {items.length===0 && <p className="small">No saved plans yet. Generate a roadmap and click Save.</p>}
      <ul>
        {items.map((it, idx)=> (
          <li key={idx} style={{marginBottom:12}}>
            <strong>{it.career}</strong> — {new Date(it.savedAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  )
}
