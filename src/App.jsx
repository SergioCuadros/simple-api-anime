import { NavBar } from './components/NavBar'
import { MoodFilter } from './components/MoodFilter'
import { ContentList } from './components/ContentList'
import { Footer } from './components/Footer'
import { ContentContainer } from './components/ContentContainer'

import './App.css'

function App() {


  return (
    <>
    <NavBar />
    <ContentList />
    <MoodFilter />
    <Footer />
    <ContentContainer />
    </>
  )
}

export default App
