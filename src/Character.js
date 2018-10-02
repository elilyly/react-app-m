import React from 'react'

class Character extends React.Component {
  handleClick = () => {
    this.props.showCharacter(this.props.character)
  }

  render() {
    return(
      <div className="character" onClick={this.handleClick}>
        <img className="character-images" src={this.props.character.thumbnail.path+ '/portrait_fantastic' + '.' + this.props.character.thumbnail.extension} alt={this.props.character.name}/>
        <div className="character-name">
          {this.props.character.name}
        </div>
      </div>
    )
  }
}

export default Character
