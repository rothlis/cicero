import React, { Component } from 'react'

import AppNav from './AppNav'
import TranslationNav from './TranslationNav'
import TranslationRow from './TranslationRow'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav />
        <TranslationNav />
        <div className="TranslationBar">Bar</div>
        <div className="TranslationContent">
          {Array(50)
            .fill()
            .map((name, index) => <TranslationRow key={index} />)}
        </div>
      </div>
    )
  }
}

export default App
