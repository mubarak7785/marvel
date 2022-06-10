import { useSelector } from "react-redux"


export const Component_c=()=>{

const data=useSelector(store=>store.text);

    return(
        <div className="name-container">
           <h1>{data.name}</h1> 
        </div>
    )
}