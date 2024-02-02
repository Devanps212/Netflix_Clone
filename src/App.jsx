import Nav from './Components/Header/Nav'
import Banner from './Components/Banner/Banner'
import Movies from './Components/MovieSeries/MS'
import './App.css'
import {originals, action, Horror, Romance} from './url'

function App() {
 

  return (
    <>
    <Nav/>
    <Banner/>
    <Movies title='Netflix Originals' url={originals}/>
    <Movies title='Action Movies' isSmall url={action}/>
    <Movies title='Horror Movies' isSmall url={Horror}/>
    <Movies title='Romance Movies' isSmall url={Romance}/>
    </>
  )
}

export default App
