// Write your code here
import GoogleSuggestions from '../GoogleSuggestions'
import './index.css'

const SuggestionsItem = props => {
  const {suggestionDetails} = props
  const {suggestion} = suggestionDetails

  return (
    <li className="suggestion-item">
      <p className="suggestion-text"> {suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-icon"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionsItem
