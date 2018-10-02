import React from 'react'
import Header from './Header'
import Character from './Character'

class CharactersList extends React.Component{
  render() {
    const characters = this.props.characters.map(character =>
      <div key={character.name}>
        <Character handleClick={this.props.handleClick} key={character.id.characterId} character={character} showCharacter={this.props.showCharacter} />
      </div>
    )

    return(
      <div>
        <Header />
        <div className="character-grid">
          {characters}
        </div>
      </div>
    )
  }
}

export default CharactersList
