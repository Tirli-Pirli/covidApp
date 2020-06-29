import React, {useState, useEffect} from 'react';
import { fetchDailyData} from '../../api';
import { Line, Bar} from 'react-chartjs-2';
import './index.css'

const Chart = () => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData)
        }
        fetchAPI()
    }, [])

    const lineChart = (
       dailyData.length !== 0
       ?  (
           <Line
           data={{
               labels: '',
               datasets:[{},{}]
           }}
           />
       ) : null
    )

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export default Chart;