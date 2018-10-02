import React from 'react'
import axios from 'axios'
import * as moment from 'moment'
import { Link } from 'react-router-dom'

class ShowCharacter extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      comics: [],
    }
  }

  componentDidMount() {
    this.getCharacterComicInfo()
  }

  getCharacterComicInfo() {
    const URI = `/v1/public/characters/${this.props.character.id}/comics`
    const URL = `https://gateway.marvel.com:443`
    const PARAMS = `?apikey=e2a674287cbd2b7e4916929820b966a0&ts=1538069103280&hash=a53b6090f58bc5656bb41a3fd32ff3fe`

    axios.get(`${URL}${URI}${PARAMS}`)
         .then( response => {
           const comics = response.data.data.results
           this.setState({ comics })
         })
  }

  render(){
    const comics = this.state.comics.map(comic =>
      <div key={comic.id} className="comic-container">
        <div className="comic-info">
          <img className="comic-image" src={comic.thumbnail.path + '/portrait_fantastic'+ '.' + comic.thumbnail.extension} alt={comic.name}/>
        </div>
        <div className="overlay">
            <div className="comic-text">
              <p>Comic Title: {comic.title}</p>
              <p>Comic ID: {comic.id}</p>
              <p> Release Date: {moment(comic.dates[0].date).format('MM/DD/YYYY')} </p>
              <p>Issue Number: {comic.issueNumber}</p>
            </div>
        </div>
      </div>
  )

    return(
      <div className="show-character">
        <div className="character-header">
          <div className="character-image-header">
            <img className="character-image" src={this.props.character.thumbnail.path +'/portrait_fantastic'  + '.' + this.props.character.thumbnail.extension} alt={this.props.character.name}/>
            <svg className="svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,100 100,30 100,100" />
            </svg>

            <div className="char-name">
              <h1>{this.props.character.name}</h1>
            </div>
          </div>
        </div>
        <div className="comic-section">Comics</div>
        <div className="character-info">
          {comics}
        </div>
          <Link className='back-to-link' to='/characters/'><h2>Back to All Characters</h2></Link>
     </div>

    )
  }
}

export default ShowCharacter
