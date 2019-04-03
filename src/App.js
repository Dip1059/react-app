import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header';
import {Home} from './components/Home';

class App extends Component {

    constructor() {
        super();
        this.state= {
            user: {
                name: 'Dipankar',
                initialAge: 25,
                hobbies: ['Kite Flying', 'Gaming', 'Singing']
            },
            initialTitle: "Details"
        };
    }
    
    onMakeOlder() {
        this.setState({
            user: {
                name: 'Dipankar',
                initialAge: this.state.user.initialAge + 5,
                hobbies: ['Kite Flying', 'Gaming', 'Singing']
            }
        });
        console.log(this.state.user.initialAge+5);
    }

    onChangeTitleApp(newTitle) {
        this.setState({
            initialTitle: newTitle
        });
    }


  render() {
    return (
      <div className="App">
      <div className="container">
      <div className="row left">
      <div className="col-sm-12">
        <Header initialTitle={this.state.initialTitle}/>
        <Home user= {this.state.user} onChangeTitleApp= {this.onChangeTitleApp.bind(this)} initialTitle={this.state.initialTitle}>
            <p>These are something about {this.state.user.name}</p>
        </Home><br/>
        <p>Age: {this.state.user.initialAge}</p>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make Me Older(From App)</button>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
