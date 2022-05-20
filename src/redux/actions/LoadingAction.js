import { LOADING_TYPES } from "./ActionTypes";

export const loading = () => ({type: LOADING_TYPES.LOADING})

export const loaded = () => ({type: LOADING_TYPES.LOADED})