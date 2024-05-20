export let Add_Data = (data) => {
  return {
    type: "Add_Data",
    payload: data,
  };
};

export let Delete = (data) => {
    return {
      type: "Delete",
      payload: data,
    };
  };

  
export let Editd = (idx,data01) => {
    return {
      type: "Edit",
      payload01: idx,
      payload02: data01,
    };
  };

export let AllDelete = () => {
    return {
      type: "Delete_All",
    };
  };
