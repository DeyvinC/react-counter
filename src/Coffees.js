import React, { useState, useEffect } from "react";

function Coffees() {
    const [coffeeList, setCoffeeList] = useState();
    const [temperature, setTemperature] = useState('hot');
    useEffect(() => {
        //load data from API
        fetch(`https://api.sampleapis.com/coffee/${temperature}`)
          .then(response => response.json())
          .then(data => setCoffeeList(data))
          .catch(err => console.error(err))
    }, [temperature])
    return (
        <section>
        <h2>Coffee Recipes</h2>
        <button onClick={() => setTemperature('hot')}>Hot</button> 
        <button onClick={() => setTemperature('iced')}>Iced</button>

        {coffeeList
        
        ?<ol>{coffeeList.map(coffee => {
            return <li key={coffee.id}>{coffee.title}</li>
        })}</ol>

        :<h3>Recipes go here...</h3>
    }
        </section>
    )
}



export default Coffees;