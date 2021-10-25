
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AddBoxIcon from '@material-ui/icons/AddBox';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
const Header = () => {
  const mainUser=useSelector(state=>state.rightUser.ruser);
    return (
        <>
         <header className="bg-primary py-2 mb-4">
            <div className="container text-light d-flex flex-column flex-sm-row justify-content-between  align-items-center">
            <h3 className="d-flex align-items-center justify-content-center"><MenuBookIcon style={{fontSize:"40px"}}/>Contact book</h3>
            <div>
                <h3>{mainUser.Email.slice(0,10)}</h3>
            </div>
            <Link to="/table/create-contact" className="btn btn-danger text-light"><AddBoxIcon/>Add</Link>
            </div>
        </header>   
        </>
    )
}

export default Header
