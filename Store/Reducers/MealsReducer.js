import { MEALS } from '../../datas/CategoryData';
import { TOGGLE_FAV, TOGGLE_FILTER } from '../../constants/constant';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAV:
            {
                const index = state.favouriteMeals.findIndex(m => m.id === action.mealId);
                if (index >= 0) {
                    const newFavs = [...state.favouriteMeals];
                      newFavs.splice(index, 1);
                    return { ...state, favouriteMeals: newFavs };
                } else {
                    const newMeal = state.meals.find(m => m.id === action.mealId);
                    return { ...state, favouriteMeals: [...state.favouriteMeals, newMeal] }
                }

            }
        case TOGGLE_FILTER:
            {
                console.log()
                const newFilteredMeals =  {...state}.meals.filter(m=> {
                 if(action.filters.isGlutenFree && !m.isGlutenFree) return false;
                 if(action.filters.isLactoseFree && !m.isLactoseFree) return false;
                 if(action.filters.isVegan && !m.isVegan) return false;
                 if(action.filters.isVegetarian && !m.isVegetarian) return false;
                 return true;
                })
                console.log(newFilteredMeals.length);
                return {...state,filteredMeals:newFilteredMeals};
            }    
        default: {
            return { ...state };
        }
    }

}

export default mealsReducer;