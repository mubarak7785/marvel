import { useDispatch } from "react-redux";
import {textaction} from "../Redux/Input_redux/action"
import "./Component_b.css"

export const Component_b=()=>{
const dispatch=useDispatch()    

const handlechange=(e)=>{
 const {id,value}=e.target;
   dispatch(textaction({[id]:value}))
}

    return(
        <div className="inp">
            <input type="text" placeholder="Enter text" id="name" onChange={handlechange} />
        </div>
    )
}