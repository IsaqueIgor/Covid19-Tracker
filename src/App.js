import React from 'react';

import {Info, Chart, Countries} from './components';
import './App.module.css';
import { fetchData } from './api';

//as I`m using data time visualization I`ll be using class, which make my life easier
class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount(){
    const data = await fetchData();

    this.setState({ data })
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render(){ 
    const { data, country } = this.state;

    return (
      <div className='container'>
        <Info data={data} />
        <Countries handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
