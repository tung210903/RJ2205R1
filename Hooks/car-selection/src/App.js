import { useState } from 'react'


function Selection() {
    const [selectedCar, setSelectedCar] = useState({ car: 'BMW', color: 'black' })

    const handleCar = (e) => {
        setSelectedCar(previousState => { return { car: e.target.value, color: previousState.color } })
    }

    const handleColor = (e) => {
        setSelectedCar(previousState => { return { car: previousState.car, color: e.target.value } })
    }
    return (
        <div>
            <div>
                <select onChange={handleCar}>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Porsche">Porsche</option>
                    <option value="Mazada">Mazada</option>
                </select>
            </div>
            <div>
                <select onChange={handleColor}>
                    <option value="black">black</option>
                    <option value="blue">blue</option>
                    <option value="red">red</option>
                    <option value="white">white</option>
                </select>
            </div>
            <h1>You selected a {selectedCar.color} - {selectedCar.car}</h1>
        </div>
    )
}

export default Selection