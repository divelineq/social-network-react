import React from 'react'

export default class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: 'My status'
  }

  activateEditMode = () => {
    this.setState({ editMode: true })
  }

  deactivateEditMode = () => {
    this.setState({ editMode: false })
  }



  onStatusChange = (event) => {
    this.setState({ status: event.target.value })
  }

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} value={this.state.status} />
          </div>
        ) : (
          <div>
            <p onDoubleClick={this.activateEditMode}>Status: {this.state.status}</p>
          </div>
        )}
      </div>
    )
  }
}