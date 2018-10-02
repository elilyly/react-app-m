import React from 'react'
import Header from './Header'
import Character from './Character'
import _ from 'lodash'

class CharactersList extends React.Component{
  constructor() {
    super()
    this.state = {
      ascending: false
    }
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        ascending: !prevState.ascending
      }
    });
  }


  render() {
    const direction = this.state.ascending ? "desc" : "asc";

    const sortedCharacters = _.orderBy(this.props.characters, ["name"], [direction, "asc"])
    const characters = sortedCharacters.map(character =>
      <div key={character.name}>
        <Character handleClick={this.props.handleClick} key={character.id.characterId} character={character} showCharacter={this.props.showCharacter} />
      </div>
    )

    return(
      <div>
        <Header />
        <p>
          <button onClick={this.handleClick} className="sort-button">
            Sort by {this.state.ascending ? "A-Z" : "Z-A"}
          </button>
        </p>
        <div className="character-grid">
          {characters}
        </div>
      </div>
    )
  }
}

export default CharactersList
