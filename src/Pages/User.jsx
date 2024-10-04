import React, {useEffect, useState} from 'react'
import axios from 'axios'

const User = () => {
  const [plans, setPlan] = useState([])
  const [user, setUser] = useState({})

 useEffect(() => {
const getPlans = () =>{
  axios.get('http://localhost:5001/api/plan/').then(data => setPlan(data.data))
}

const getUser = (accountNumber) => {
  axios.get(`http://localhost:5001/api/user/${accountNumber}`).then(data => setUser(data.data))
}

getUser('685580990')
 }, [])


  return (
    <div>
      <h1>User</h1>
      <div>
        {plans?.map(data => {return <p>{data.name}</p>})}
        <p>CUstomer Name: {user.name}</p>
      </div>
    </div>
  )
}

export default User