import React from 'react';
import Services from '../components/ServiceComponent';
import Providers from '../components/ProvidersComponent';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class DataContainer extends React.Component {

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

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DataContainer));
