import React, { Component } from 'react'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import './styles/styles.css';

class App extends Component {

    render() {
        return (
            <div className='app'>
                <h1>Curriculum Vitae</h1>
                <GeneralInfo/>
                <Education />
                <Experience />
            </div>
        )
    }
}

export default App