import {useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import Data from "./Data";
import Header from "./Header.jsx";
import {useHistory} from "react-router-dom";
import {selectDelete} from "../../redux-toolkit/slices/contactSlice.jsx"
const Table = () => {
  const [selectAll,setSelectAll]=useState(false)
  const tData = useSelector(state => state.tableData.data);
  const dispatch=useDispatch();
  const histry=useHistory()
  const dlt=()=>{
    dispatch(selectDelete()) 
  }
  return (
    <>
      <Header />
      <div className="container">
        {selectAll==true?<button onClick={dlt} className="btn btn-danger">Delete All</button>:null}
        <table className="table table-shadow">
          <thead className="bg-danger text-light">
            <tr><th scope="col" className="text-center"><input onClick={()=>selectAll==true?setSelectAll(false):setSelectAll(true)} value={selectAll} type="checkbox" /></th>
              <th scope="col" className="text-center">Name</th>
              <th scope="col" className="text-center">Email</th>
              <th scope="col" className="text-center">Phone</th>
              <th scope="col" className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              tData.map((data, ind) => {
                return <Data
                  key={ind}
                  id={ind}
                  name={data.Name}
                  email={data.Email}
                  phone={data.Phone}
                  checkval={selectAll}
                />
              }
              )
            }

          </tbody>
        </table>

      </div>
    </>
  )
}

export default Table
