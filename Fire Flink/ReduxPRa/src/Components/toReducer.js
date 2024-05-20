
let reducer = (state={list:[]}, action) => {
  switch (action.type) {
    case "Add_Data":
      return {list:[...state.list,action.payload]}

      case "Delete":
        state.list.splice(action.payload,1)
      return {list:[...state.list]}

      case "Edit":
        state.list.splice(action.payload01,1,action.payload02)
      return {list:[...state.list]}
      
      case "Delete_All":
      return {list:[]}

      default :
      return {list:[]}
  }
};

export default reducer;