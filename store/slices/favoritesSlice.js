import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favoritesMeals: [],
    },
    reducers: {
        addToFavorites: (state, action) => {
            state.favoritesMeals.push(action.payload)
        },
        removeFromFavorites: (state, action) => {
            state.favoritesMeals = state.favoritesMeals.filter(
                (mealId) => mealId !== action.payload
            )
        },
        clearFavorites: (state) => {
            state.favoritesMeals = []
        },
    },
})

export const { addToFavorites, removeFromFavorites, clearFavorites } =
    favoritesSlice.actions
export const selectFavorites = (state) => state.favorites.favoritesMeals
export const selectIsMealFavorite = (state, mealId) =>
    state.favorites.favoritesMeals.includes(mealId)

export default favoritesSlice.reducer
