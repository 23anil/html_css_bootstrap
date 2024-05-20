import { DataAdd } from "./datas";

export let Add = (data: DataAdd) => {
  return {
    type: "Add_Data",
    payload: data,
  };
};
