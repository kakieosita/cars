import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList(){
    const dispatch = useDispatch();
    const {cars, name} = useSelector(({form, cars: {data, searchTerm}}) => {
        const filteredCars = data.filter((car)=> 
            car.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return {
            cars: filteredCars,
            name: form.name
        }
    })
 
    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id))
    }

    const renderedCars = cars.map((car)=> {
        //Decide if this car should be bold
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase)
        return (
            <div key={car.id} className={`p-6  bg-white rounded-md shadow-md flex items-center justify-between ${bold ? 'font-extrabold' : ''}`}>
                <p className={`text-gray-700 ${bold ? 'font-extrabold' : 'font-normal'} text-xl`}>
                    {car.name} - ${car.cost}
                </p>
                <button className="px-4 py-2 bg-red-700  text-white border  rounded hover:bg-red-400" onClick={() => handleCarDelete(car)}>Delete</button>
            </div>
        )
    })
    return <div>
        {renderedCars}
        <hr/>
    </div>
}


export default CarList;