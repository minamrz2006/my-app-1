import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const el = document.getElementById('root')
const root= createRoot(el)

export function App(){
  const name ='mina mirzaei'
  let number= Math.random() 
  return(
    //<h1> {name} {number}</h1>
    <h1> {new Date().toLocaleTimeString()}</h1>
  )
}
root.render(
  <scriptmode>
    <App/>
  </scriptmode>
)