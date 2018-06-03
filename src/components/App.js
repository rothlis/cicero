import React, { Component } from 'react'

import AppNav from './AppNav'
import TranslationNav from './TranslationNav'
import TranslationList from './TranslationList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav />
        <TranslationNav />
        <div className="TranslationBar">Bar</div>
        <TranslationList />
      </div>
    )
  }
}

export default App
