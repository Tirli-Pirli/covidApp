import React from 'react';
import './index.css';
import CountUp from 'react-countup';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {

    if(!confirmed){
        return 'Something went wrong...'
    }
    return (
        <div className="card-container">
            <div className="card green">
                <h2>Infected</h2>
                <CountUp
                    start={0}
                    end={confirmed.value}
                    duration={2.5}
                    separator=","
                />
                <div className="date">{new Date(lastUpdate).toDateString()}</div>
                <div className="text">Number of active cases of COVID-19</div>
            </div>
            <div className="card blue">
                <h2>Recovered</h2>
                <CountUp
                    start={0}
                    end={recovered.value}
                    duration={2.5}
                    separator=","
                />
                <div className="date">{new Date(lastUpdate).toDateString()}</div>
                <div className="text">Number of recoveries from COVID-19</div>
            </div>
            <div className="card red">
                <h2>Deaths</h2>
                <CountUp
                    start={0}
                    end={deaths.value}
                    duration={2.5}
                    separator=","
                />
                <div className="date">{new Date(lastUpdate).toDateString()}</div>
                <div className="text">Number of deaths caused by COVID-19</div>
            </div>
        </div>
    )
}

export default Cards;