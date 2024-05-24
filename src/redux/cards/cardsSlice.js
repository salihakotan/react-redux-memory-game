import { createSlice } from "@reduxjs/toolkit";



const cards = [
    { id: 1, img: "/img/html.png", stat: "" },
    { id: 1, img: "/img/html.png", stat: "" },
    { id: 2, img: "/img/css.png", stat: "" },
    { id: 2, img: "/img/css.png", stat: "" },
    { id: 3, img: "/img/js.png", stat: "" },
    { id: 3, img: "/img/js.png", stat: "" },
    { id: 4, img: "/img/scss.png", stat: "" },
    { id: 4, img: "/img/scss.png", stat: "" },
    { id: 5, img: "/img/react.png", stat: "" },
    { id: 5, img: "/img/react.png", stat: "" },
    { id: 6, img: "/img/vue.png", stat: "" },
    { id: 6, img: "/img/vue.png", stat: "" },
    { id: 7, img: "/img/angular.png", stat: "" },
    { id: 7, img: "/img/angular.png", stat: "" },
    { id: 8, img: "/img/nodejs.png", stat: "" },
    { id: 8, img: "/img/nodejs.png", stat: "" },
  ].sort(() => Math.random() - 0.5)

  


export const cardsSlice = createSlice({
    name:"cards",
    initialState: {
        items:cards
    },
    reducers: {
        updateStat: (state,action) => {
            console.log("id: ", action.payload.id)
            console.log("stat: ", action.payload.stat)
            state.items[action.payload.id].stat =action.payload.stat
           

        }
    }
})


export const selectCards = (state) => state.cards.items

export const {updateStat} = cardsSlice.actions

export default cardsSlice.reducer