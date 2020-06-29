import React from 'react';
import './App.css';

// import Cards from './components/Cards';
// import Chart from './components/Chart';
// import CountryPicker from './components/CountryPicker';

import { Cards, Chart, CountryPicker} from './components'
import { fetchData } from './api';
class App extends React.Component {
    state = {
        data: {},
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        console.log(fetchedData)
        this.setState({data: fetchedData})
    }
    render() {

        const { data } = this.state;

        return (
            <div className="container">
                <Cards data={data}/>
                <CountryPicker/>
                <Chart/>
            </div>
        )
    }
}

export default App;