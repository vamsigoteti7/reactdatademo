import React from 'react';
import './App.css';
import Services from './components/ServiceComponent';
import Providers from './components/ProvidersComponent';

export default class App extends React.Component {

  state = { selectedService: null };

  handleSelectedService = id => {
    this.setState({ selectedService: id });
    this.child.current.handleSelectedService(id);
  };

  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  onClick = () => {
    this.child.current.handleSelectedService();
  };

  render() {
    return (
      <div className="App">
        <Services selectedService={this.handleSelectedService}></Services>
        <Providers ref={this.child}></Providers>
      </div>
    );
  }
}

