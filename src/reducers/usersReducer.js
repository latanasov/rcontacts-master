export default function reducer(state={
  users: [],
  fetching:false,
  fetched:false,
  error:null
},action)
{
  switch (action.type) {
    case "FETCH_USERS":{
      return {...state,fetching: true}
    }
    case "FETCHING_USERS_FULFILLED":{
      return {...state,fetching: false,fetched:true, users: action.payload}
    }
    case "FETCHING_USERS_REJECTED":{
      return {...state,fetching: false,erro:action.payload}
    }

  }

  return state;
}
