import React from 'react'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <>
     <div className="flex gap-5  flex-wrap justify-center h-screen items-center">
     <Dashboard
  name="BASIC"
  price="6.99"
  date="MONTHLY"
  classall={"relative bg-blue-200 shadow-lg rounded-lg p-6 w-72 h-96 flex flex-col items-center justify-center"}
  offer="2 GB - 1 USER"
 
/>

<Dashboard
  name="STANDARD"
  price="12.99"
  date="MONTHLY"
  offer="10 GB - 5 USERS"
  classall={"relative bg-pink-200 shadow-lg rounded-lg p-6 w-72 h-96 flex flex-col items-center justify-center"}
 
/>

<Dashboard
  name="PREMIUM"
  price="24.99"
  date="MONTHLY"
  offer="50 GB - 20 USERS"
  classall={"relative bg-yellow-200 shadow-lg rounded-lg p-6 w-72 h-96 flex flex-col items-center justify-center"}
 
/>


     </div>
    </>
  )
}

export default App