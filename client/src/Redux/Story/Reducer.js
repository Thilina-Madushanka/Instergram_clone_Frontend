import { FETCH_USER_STORY } from "./ActionType";

const initialState={
    stories:null,
}

export const Storyreducer=(store=initialState,{type,payload})=>{
    if(type===FETCH_USER_STORY){
        return {...store,stories:payload}

    }
    return store;
}