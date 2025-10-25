import axios from 'axios'

export async function apiRecommend(payload){
  const { data } = await axios.post('/api/recommend', payload)
  return data
}
