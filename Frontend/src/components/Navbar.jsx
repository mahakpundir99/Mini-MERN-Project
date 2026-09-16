import { FaPlus } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
     const navigate = useNavigate();
  return (
    <>
    <div className="flex text-3xl gap-4 justify-between px-4 mt-2">
       <h1 onClick={()=> navigate('/Createpost')} className="hover:active:scale-90"> <FaPlus/></h1>
       <h1 onClick={()=>navigate('/Feed')} className="hover:active:scale-90"> <IoPersonCircleSharp/></h1>
    </div>
    </>
  )
}

export default Navbar
