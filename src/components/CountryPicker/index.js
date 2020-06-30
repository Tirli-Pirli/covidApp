import React, {useEffect, useState} from 'react';
import './index.css'
import { fetchCountries } from '../../api'

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {

        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI()
    }, [setFetchedCountries])


    return (
        <form>
            <select defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="Global">Global</option>
    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </select>
        </form>
    )
}

export default CountryPicker;