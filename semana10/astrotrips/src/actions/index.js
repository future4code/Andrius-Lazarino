import axios from "axios";
import { push } from 'connected-react-router';
import { routes } from '../containers/Router';

export const setListTrips = (trips) => {
    return {
        type: "SET_LIST_TRIPS",
        payload: {
            trips: trips
        }
    }
}

export const setDetailTrip = (detailTrip) => {
    return {
        type: "SET_DETAIL_TRIP",
        payload: {
            detailTrip: detailTrip
        }
    }
}

export const setId = (id) => {
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
    dispatch(setListTrips(response.data.trips))
}

export const fetchDetails = (id, token) => async (dispatch) => {
    const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureX/andrius/trip/${id}`, { headers: { auth: token } })
    dispatch(setDetailTrip(response.data.trip))
}

export const createTrip = (tripData, token) => async (dispatch) => {
    const data = {
        "name": tripData.name,
        "planet": tripData.planet,
        "date": tripData.date,
        "description": tripData.description,
        "durationInDays": tripData.duration
    }
    const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/andrius/trips`, data, { headers: { auth: token } })
}

export const candidateTrip = (candidateData) => async (dispatch) => {
    const data = {
        "name": candidateData.name,
        "age": candidateData.age,
        "applicationText": candidateData.text,
        "profession": candidateData.profession,
        "country": candidateData.country
    }
    const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/andrius/trip/${candidateData.planet}`, data)
    dispatch(push(routes.root))
}

export const setApproved = (idTrip,idCandidade, approved, token) => async (dispatch) =>{
    const data = {
        "approve": approved
    }
    const response = await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/futureX/andrius/trips/${idTrip}/candidates/${idCandidade}/decide`, data, {headers: { auth: token }})
    dispatch(push(routes.listTrips))
}