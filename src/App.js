import React, { Component } from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import Restaurant from './components/restaurant';
import Nav from './components/nav';
import './css/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: new Date().getDay() - 1,
      content: []
    };

    this.fetchData = this.fetchData.bind(this);
    this.changeDay = this.changeDay.bind(this);
  }

  async fetchData() {
    const response = await fetch('http://localhost:8000', {
      mode: 'cors',
      headers: {
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  }

  changeDay(num) {
    this.setState({ active: num });
  }

  async componentDidMount() {
    const data = await this.fetchData();
    console.log(data);
    this.setState({ content: data });
    console.log("Update content");
  }
  
  render() {
    return (
      <div id="app">
        <div id="top-bar">
          <h1>Lounaslista</h1>
          <Nav 
            options={['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai', 'Sunnuntai']}
            active={this.state.active}
            changeDay={this.changeDay}
          />
        </div>
        <div id="main-content">
          { this.state.content.map(restaurant => <Restaurant active={this.state.active} data={restaurant} />) }
        </div>
      </div>
    );
  }
}

export default App;
