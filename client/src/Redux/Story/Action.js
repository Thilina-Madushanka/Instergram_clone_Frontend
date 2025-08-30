import {FETCH_FOLLOWING_USER_STORY, FETCH_USER_STORIES} from './ActionType';
const BASE_API_URL= "http://localhost:8082/api"


export const findFollowingUserStory = (data) => async (dispatch) => {
    const res = await fetch(
        `${BASE_API_URL}/f/${data.userId}`,
        {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + data.jwt,
        },
    }
    );

const stories = await res.json();
    dispatch({ type: 'FETCH_FOLLOWING_USER_STORY', payload: stories });
};

export const findStoryByuserId = (data) => async (dispatch) => {

    try{
        const res = await fetch(
            `${BASE_API_URL}/${data.userId}`,
            {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + data.jwt,
        },
    }
    
    );
        const stories = await res.json();
        dispatch({ type: 'FETCH_USER_STORIES', payload: stories });
    }catch(error){
        console.log("catch error",error);
    }
}