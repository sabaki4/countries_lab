import Country from './Country';

const CountryList = ({ countries, moveCountryToVisitedList }) => {


    const mappedCountries = countries.map(country => {
        return <Country country={country} moveCountryToVisitedList={moveCountryToVisitedList} key={country.name.common} />
    })

    return (
        <>
            {mappedCountries}
        </>
    )

}

export default CountryList;