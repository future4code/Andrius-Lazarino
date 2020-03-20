const initialState = {
  profile:{
    id: 1,
    age: 26,
    name: "andrius",
    photo: "sem foto",
    bio: "sem bio"
  }
}

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      {
        const profile = action.payload.profile
        return {
          profile: profile
        }
      }
    default:
      {
        return state
      }
  }
}

export default profiles
