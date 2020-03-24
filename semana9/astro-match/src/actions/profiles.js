import axios from 'axios'
import { mdiPrinterPos } from '@mdi/js'
import { checkPropTypes } from 'prop-types'

export const setMatches = (matches) => {
	return {
		type: "SET_MATCHES",
		payload: {
			matches: matches
		}
	}
}

export const setProfile = (profile) => {
	return {
		type: "SET_PROFILE",
		payload: {
			profile: profile
		}
	}
}

// --> async
export const getMatches = () => async (dispatch,getState) => {
	const result = await axios.get(
		`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andrius/matches`
	)
	console.log(result.data)
	dispatch(setMatches(result.data.matches))
}

export const chooseProfile = (choice) => async (dispatch, getState) => {
	const result = await axios.post(
		`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andrius/choose-person`,
		{
			"id": getState().profiles.profile.id,
			"choice": choice
		}
	)
	dispatch(getProfile())
}

export const getProfile = () => async (dispatch, getState) => {
	const result = await axios.get(
		`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andrius/person`
	)
	// console.log(getState().profiles.profile.name)
	dispatch(setProfile(result.data.profile))
}

export const clearSwipes = () => async (dispatch, getState) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andrius/clear')
}