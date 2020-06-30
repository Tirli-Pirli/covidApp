import React from 'react';
import './App.css';

// import Cards from './components/Cards';
// import Chart from './components/Chart';
// import CountryPicker from './components/CountryPicker';

import { Cards, Chart, CountryPicker} from './components'
import { fetchData } from './api';
import covid from './images/image.png'

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        // console.log(fetchedData)
        this.setState({data: fetchedData})

    }

    handleCountryChange = async (country) => {
        // fetch data
        const fetchedData = await fetchData(country);

        console.log(fetchedData)
        //set state

        this.setState({data: fetchedData, country: country})

    }

    render() {

        const { data, country } = this.state;

        return (
            <div className="container">
                <img  className="image" src={covid} alt="Covid"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;