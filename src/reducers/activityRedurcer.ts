import { Activity } from '../types';

export type ActivityActions = 
    { type: 'save-activity',  payload: {newActivity: Activity} } |
    { type: 'set-activityId',  payload: {id: Activity['id']} } |
    { type: 'delete-activity',  payload: {id: Activity['id']} } |
    { type: 'reset-app'} 


export type ActivityState = {
    activities: Activity[],   
    activityId: Activity['id']
}

const localStorageActivity = () : Activity[]=> {
    const activities = localStorage.getItem('activities');
    return activities ? JSON.parse(activities) : []
}

export const initialState : ActivityState = {
    activities: localStorageActivity(),
    activityId: '',
}

export const activityReducer = (
    state : ActivityState = initialState, 
    action: ActivityActions
) => {
   if(action.type === 'save-activity') {
    let updateActivity : Activity[]  = []
        if (state.activityId) {
            updateActivity = state.activities.map(activity => activity.id === state.activityId ? 
                action.payload.newActivity : activity)
        }else{
            updateActivity = [...state.activities, action.payload.newActivity]
        }

        return {
            ...state,
            activities: updateActivity,
            activityId: ''
        }
   }

  if(action.type === 'set-activityId'){

        return {
            ...state,
            activityId: action.payload.id,
        }
  }

  if (action.type === 'delete-activity') {
    return {
        ...state,
        activities: state.activities.filter(activity => activity.id !== action.payload.id),
    }
  }

  if (action.type === 'reset-app') {
    return {
        activities: [],
        activityId: ''
    }
  }

   return state;
}