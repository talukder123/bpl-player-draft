import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Nav from './Components/Naav'
import Players from './Components/Players/Players'
import type { Iplayer } from './Type/PlayerType'
import Footer from './Components/Footer'

const playersFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}

function App() {

  // const playersPromise = playersFetch();

  const [playersPromise] = useState(()=>playersFetch())
  const [coin, setCoin] = useState(600000)

  return (
    <>
      <Nav coin={coin}></Nav>
      <Banner></Banner>
      <Suspense fallback={<h3>Loading....</h3>}>
      <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin}></Players>
      </Suspense>
      
      <Footer></Footer>
    </>
  )
}

export default App
