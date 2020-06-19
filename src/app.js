import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Index from './components/index';
import Results from './components/results/results';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      headers: null,
      body: null,
    }
  }

  setResults = (body, headers) => {
    this.setState({ 
      body,
      headers,
     });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Index onReceiveData={this.setResults}/>
        <Results headers={this.state.headers} body={this.state.body}/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
