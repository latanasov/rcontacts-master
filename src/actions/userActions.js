import axios from "axios";

export function fetchUsers(){
  return function(dispatch){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) =>
    {
      dispatch({type: 'FETCHING_USERS_FULFILLED',payload:response.data});
    }
  ).catch((err)=>
  {
    dispatch({type: 'FETCHING_USERS_REJECTED',payload:err});
  })

}
}
