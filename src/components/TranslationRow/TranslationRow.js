import React, { Component } from 'react'

class TranslationRow extends Component {
  render() {
    return (
      <div className="TranslationRow">
        {this.props.translation[0]}
        <br />
        {this.props.translation[1]}
      </div>
    )
  }
}

export default TranslationRow
