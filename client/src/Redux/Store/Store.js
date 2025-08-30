import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { AuthReducer } from "../Auth/Reducer";
import { thunk } from 'redux-thunk';
import { UserReducer} from "../User/Reducer";
import { PostReducer } from "../Post/Reducer";
import { commentReducer } from "../Comment/Reducer";
import { Storyreducer } from "../Story/Reducer";

const rootReducers = combineReducers({

    auth:AuthReducer,
    user:UserReducer,
    post:PostReducer,
    comment:commentReducer,
    story:Storyreducer,
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));