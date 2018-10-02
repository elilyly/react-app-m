import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import axios from 'axios'
import CharactersList from './CharactersList'
import ShowCharacter from './ShowCharacter'

class CharactersContainer extends React.Component{
  constructor() {
    super()
    this.state = {
      characters: [],
      character: [],
    }
  }

  componentDidMount() {
    this.getCharacters()
  }

  getCharacters() {
    const URL = `https://gateway.marvel.com:443`
    const URI = `/v1/public/characters`
    const PARAMS = `?apikey=e2a674287cbd2b7e4916929820b966a0&ts=1538069103280&hash=a53b6090f58bc5656bb41a3fd32ff3fe`
    axios.get(`${URL}${URI}${PARAMS}`)
         .then( response => {
            const characters = response.data.data.results
            this.setState({ characters })
          })
  }

  showCharacter = (character) => {
    this.setState({ character }, this.props.history.push(`/characters/${character.id}`))
  }

  render() {
    const { characters, character } = this.state;

      return(
        <Switch>
          <Route exact path='/characters/' render={() => <CharactersList characters={characters} key={character.id} sortEvent={this.sortEvent} showCharacter={this.showCharacter}/> }/>
          <Route exact path='/characters/:id' render={() => (
            <div className='character'>
              <ShowCharacter character={character}/>
            </div>)}
          />
        </Switch>
      )
  }
}

export default withRouter(CharactersContainer)
