
const Display = ({weatherData}) => {
    return (
        <>
            <p>City: {weatherData.location?.name} </p>
            <p>State: {weatherData.location?.region}</p>
            <p>Temperature: {weatherData.current?.temp_f}°F</p>
            <p>Current Condition: {weatherData.current?.condition.text}</p>
        </>
    )
}

export default Display;