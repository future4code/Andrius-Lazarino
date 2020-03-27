import axios from "axios";
import { push } from 'connected-react-router';
import { routes } from '../containers/Router';

export const setListTrips = (trips) =>{
    return {
        type: "SET_LIST_TRIPS",
        payload: {
            trips: trips
        }
    }
}

export const setDetailTrip = (detailTrip) =>{
    return {
        type: "SET_DETAIL_TRIP",
        payload: {
            detailTrip: detailTrip
        }
    }
}

export const setId = (id) =>{
    return {
        type: "SET_ID",
        payload: {
            id: id
        }
    }
}

// ASYNC
export const login = (email, password) => async (dispatch) => {

    const loginData = {
        email,
        password
    }

    try {
        const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/andrius/login`, loginData)

        const token = response.data.token

        window.localStorage.setItem("token", token)

        dispatch(push(routes.listTrips))
    }
    catch (error) {
        console.error(error)
    }
}

export const fetchTrips = () => async (dispatch) => {
    const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureX/andrius/trips`)
    // console.log( response.data.trips)
    dispatch(setListTrips(response.data.trips))
}

export const fetchDetails = (id, token) => async (dispatch) => {
    const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureX/andrius/trip/${id}`,{ headers: {auth: token} })
    dispatch(setDetailTrip(response.data.trip))
}

export const createTrip = (trip, token) => async(dispatch) => {
    const tripData = trip
    console.log(tripData)
    // const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/andrius/trips`,tripData,{headers: {auth: token}})
}