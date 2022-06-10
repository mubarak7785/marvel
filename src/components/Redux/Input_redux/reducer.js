import { TEXT } from "./action";


const initialstate={text:{}}

export const reducer=(store=initialstate,{type,payload})=>{


    switch(type){
            case TEXT :{
                return {...store,text:payload}
            }

            default : {
                return store;
            }
    }
}