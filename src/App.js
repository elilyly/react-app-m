import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from './shared/NavBar'
import Footer from './shared/Footer'
import CharactersContainer from './CharactersContainer'
import './App.css'

const App = () => (
  <div className="App">
    <NavBar/>
    <Route path="/characters" render={() => <CharactersContainer />}/>
    <Footer />
  </div>
)

export default App;
