import {Component} from 'react'
import './index.css'

class EditableTextInput extends Component {
  state = {
    textInput: '',
    editText: false,
  }

  onChangeInput = event => {
    this.setState({
      textInput: event.target.value,
    })
  }

  onClickButton = () => {
    console.log('click')
    this.setState(prevState => ({editText: !prevState.editText}))
  }

  render() {
    const {textInput, editText} = this.state
    console.log(textInput)
    return (
      <div className="app-container">
        <div className="card">
          <h1 className="heading">Editable Text Input</h1>
          <div className="text-container">
            {editText ? (
              <p>{textInput}</p>
            ) : (
              <input
                type="text"
                className="input"
                value={textInput}
                onChange={this.onChangeInput}
              />
            )}

            {editText === true ? (
              <button
                type="submit"
                className="button"
                onClick={this.onClickButton}
              >
                Edit
              </button>
            ) : (
              <button
                type="submit"
                className="button"
                onClick={this.onClickButton}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableTextInput
