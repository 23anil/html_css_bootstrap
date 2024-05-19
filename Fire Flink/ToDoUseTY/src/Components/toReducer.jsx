type ActionTypes={
  type:String,
  payload:String
}

let initial = {
  list: [],
};

let reducer = (initial, action:ActionTypes) => {
  switch (action.type) {
    case "Add_Data":
      return { list: [...initial.list, action.payload] };
    default:
      return { list: initial.list };
  }
};

export default reducer;
