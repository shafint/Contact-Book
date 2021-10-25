import { useHistory } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../redux-toolkit/slices/contactSlice.jsx";
import { Link } from "react-router-dom";
const Data = (props) => {
    const { id, name, email, phone,checkval } = props;
    const dispatch = useDispatch();
    const historey = useHistory();
    const dData = () => {
        dispatch(remove(id));
        historey.push("/table")
    }
    console.log(checkval)
    return (
        <>

            <tr>
                <td scope="row" className="text-center">
                    <input id="check" checked={checkval} type="checkbox" />{` ${id + 1}`}
                    <label htmlFor="check"></label>
                </td>
                <td className="text-center">{`${name}`}</td>
                <td className="text-center">{email}</td>
                <td className="text-center">{phone}</td>
                <td className="text-center">
                    <Link to={`/table/edit/${id}`} className="btn btn-info mr-1" style={{ zIndex: "1000", color: "#fff" }}>
                        <EditIcon />
                    </Link>
                    <button className="btn btn-danger" onClick={dData} style={{ zIndex: "1000", }}>
                        <DeleteIcon />
                    </button>
                </td>
            </tr>
        </>
    )
}

export default Data;