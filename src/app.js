import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Index from './components/index';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0,
      results: [],
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Index />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
