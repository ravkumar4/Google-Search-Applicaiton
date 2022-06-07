// Write your code here
import {Component} from 'react'
import SuggestionsItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  OnSuggestionChange = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.includes(searchInput),
    )
    return (
      <div className="google-container">
        <img
          className="google-logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="google-suggestions-container">
          <div className="search-icon-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              className="search-bar"
              onChange={this.OnSuggestionChange}
              placeholder="Google Search"
            />
          </div>
          <ul className="suggestion-list-container">
            {searchResults.map(eachSuggestion => (
              <SuggestionsItem
                key={eachSuggestion.id}
                suggestionDetails={eachSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
