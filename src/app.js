import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

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
        <Switch>
          <Header />
          <Route exact path="/">
            <Form onReceiveData={this.setResults}/>
          </Route>
          <Results headers={this.state.headers} body={this.state.body}/>
          <Footer />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
