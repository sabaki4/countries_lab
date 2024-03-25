import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {
    const [countries, setCountries] = useState(null);
    const [visitedCountries, setVisitedCountries] = useState(null);

    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/subregion/Northern%20Europe");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        loadCountries();
    }, []);

    const moveCountryToVisitedList = (country) => {
        if (visitedCountries === null){
            setVisitedCountries([country])
            return;
        }
        setVisitedCountries([...visitedCountries, country])
    }

    const loadCountryElements = () => {
        if (countries === null){
            return <></>;
        }
        return <CountryList countries={countries} moveCountryToVisitedList={moveCountryToVisitedList}/>;
    }


    const loadVisitedCountriesElement = () => {
        if (visitedCountries === null){
            return <></>;
        }
        return <CountryList countries={visitedCountries} moveCountryToVisitedList={moveCountryToVisitedList} />;
    }

    return (
        <>
            {loadCountryElements()}
            <h2>Visited Countries</h2>
            {loadVisitedCountriesElement()}
        </>
    );
}

export default CountryContainer;