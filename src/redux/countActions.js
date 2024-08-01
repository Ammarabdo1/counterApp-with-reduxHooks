import { ACTIONS } from "./type"
export const increase = () =>{
    return {
        type: ACTIONS.INCREASE,
    }
}

export const decrease = () =>{
    return {
        type: ACTIONS.DECREASE,
    }
}