const Country = ({country, moveCountryToVisitedList}) => {

    const handleClick = () => {
        moveCountryToVisitedList(country);
    }

    return (
        <>
        <p>Name: {country.name.common}</p>
        <p>Capital: {country.capital}</p>
        <button onClick={handleClick()}>Visited</button>
        </>
    
      );
}

export default Country;