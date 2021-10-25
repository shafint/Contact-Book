import { useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { update } from "../../redux-toolkit/slices/contactSlice.jsx";
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useParams } from "react-router-dom";
const EditData = () => {
  const { id } = useParams();
  const valUpdate = useSelector(state => state.tableData.data[id]);
  const setdata = useSelector(state => state.tableData.data);
  const [name, setName] = useState(valUpdate.Name);
  const [email, setEmail] = useState(valUpdate.Email);
  const [phone, setPhone] = useState(valUpdate.Phone);
  const dispatch = useDispatch();
  const histri = useHistory();;
  const addSubmit = (e) => {
    e.preventDefault();
    dispatch(update({id:id, data:{
      Name:name,Email:email,Phone:phone
    }}));
    setName("");
    setEmail("");
    setPhone("");
    histri.push("/table")
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-dark" style={{ minHeight: "100vh" }}>

        <form onSubmit={addSubmit} className="p-5" style={{
          width: "800px", boxShadow: "5px 5px 15px rgba(0,0,0,.5),-5px -5px 10px rgba(109,103,103,1),inset 5px 5px 15px rgba(0,0,0,.5),inset -5px -5px 10px rgba(109,103,103,1)",
          border: "3px solid #343a40"
        }}>
          <h2 className="text-center text-light">Edit Contact</h2>
          <div className="form-group">
            <label className="text-light" for="formGroupExampleInput">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
          </div>
          <div className="form-group">
            <label className="text-light" for="formGroupExampleInput2">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
          </div>
          <div className="form-group">
            <label className="text-light" for="formGroupExampleInput2">Phone</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
          </div>
          <button className="btn btn-info" onClick={() => histri.push("/table")}>
            <KeyboardBackspaceIcon />
          </button>
          <button className="float-right btn btn-info" type="submit"><AddCircleIcon /></button>
        </form>
      </div>
    </>
  )
}

export default EditData;
