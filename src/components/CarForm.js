import { useDispatch, useSelector } from "react-redux";
import {changeName, changeCost, addCar} from '../store';


function CarForm(){
const dispatch = useDispatch()
const {name, cost}= useSelector((state) => {
    return{
        name: state.form.name,
        cost: state.form.cost
    }
})



    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value))
    }

    const handleCostChange = (event)=>{
        const carCost = parseInt(event.target.value) || 0
        dispatch(changeCost(carCost))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({ name, cost}))
    }


    return (
        <div className="p-6 m-5 bg-white rounded-md shadow-md ">
          <h4 className="text-2xl mb-4 font-bold text-left">Add Car</h4>
          <form onSubmit={handleSubmit} className="flex   md:flex-row  items-center space-x-4">
            <div className="flex">
              <label className="font-semibold mb-1 mr-4">Name</label>
              <input
                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter car name"
              />
            </div>
      
            <div className="flex">
              <label className="font-semibold mb-1 mr-4">Cost</label>
              <input
                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={cost || ''}
                onChange={handleCostChange}
                type="number"
                placeholder="Enter car value"
              />
            </div>
      
            <div className="flex">

              <button
                className="px-4 py-2 bg-blue-700  text-white border  rounded hover:bg-blue-400"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      );
      
}

export default CarForm;