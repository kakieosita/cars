import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";


function CarSearch(){
    const dispatch = useDispatch()

    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm
    })

    const handleSearchTermChange = (event) => {
        dispatch(changeSearchTerm(event.target.value))
    }

  
    return <div className="p-4 mt-3 flex items-center justify-between">
        <h3 className="text-2xl font-semibold">My Cars</h3>
        <div>
            <label className="text-xl font-semibold">Search</label>
            <input className="border border-gray-300 rounded px-2 py-1 focus:outline-none" value={searchTerm} onChange={handleSearchTermChange}/>
        </div>
    </div>
}


export default CarSearch;