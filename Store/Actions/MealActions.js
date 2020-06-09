import {TOGGLE_FAV} from '../../constants/constant';
import { TOGGLE_FILTER } from '../../constants/constant';
export const ToggleFavAction = mealId => {
  const action = {
      type: TOGGLE_FAV,
      mealId: mealId 
  }
  return action;
}

export const ToggleFilterAction = filters => {
    return {
        type:TOGGLE_FILTER,
        filters:filters
    }
}