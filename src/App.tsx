import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Nav from './Components/Naav'
import Players from './Components/Players/Players'
import type { Iplayer } from './Type/PlayerType'

const playersFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}

function App() {

  const playersPromise = playersFetch();

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h3>Loading....</h3>}>
      <Players playersPromise={playersPromise}></Players>
      </Suspense>
      
    </>
  )
}

export default App
