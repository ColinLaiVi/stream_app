import React from 'react'
import { Router, Route } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header'
import history from '../history'

// Client ID : 735453988091-qjhd1bdfdhm4fe8cpiu7l0kmpk2a988j.apps.googleusercontent.com

const App = () => {
    return (
        <div className='ui container'>
            <Router history={history}>
                <div>
                    <Header />
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' exact component={StreamCreate} />
                    <Route path='/streams/edit/:id' exact component={StreamEdit} />
                    <Route path='/streams/delete' exact component={StreamDelete} />
                    <Route path='/streams/show' exact component={StreamShow} />
                </div>
            </Router>
        </div>
    )
}

export default App