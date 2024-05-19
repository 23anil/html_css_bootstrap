import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { AllDelete, Delete, Editd, Add_Data } from "./action";

function Todo(props) {
  const [data, setdata] = useState("");
  const [showIdx, setshowIdx] = useState({
    show: false,
    idx: null,
  });

  console.log("dfghj",props.getdata);
  let send = () => {
    props.Add(data);
    setdata("");
  };

  let Editdata = (data, val) => {
    setshowIdx({
      show: true,
      idx: data,
    });
    setdata(val);
  };

  let sendEditdata = () => {
    props.SE(showIdx.idx,data)
    setshowIdx({ ...showIdx, show: false });
    setdata("");
  };

  return (
    <div className="mt-3">
      <input
        type="text"
        placeholder="Enter Name"
        value={data}
        onChange={(e) => {
          setdata(e.target.value);
        }}
      />
      {showIdx.show ? (
        <button className="bg-warning ms-2 border-0" onClick={sendEditdata}>
          ok
        </button>
      ) : (
        <button className="bg-warning ms-2 border-0" onClick={send}>
          add
        </button>
      )}

      {props.getdata && props.getdata.map((val, idx) => (
        <li key={idx}>
          {val}
          <button
            className="ms-2 my-2 bg-primary border-0"
            onClick={() => {
              Editdata(idx, val);
            }}
          >
            Edit
          </button>
          <button
            className="ms-2 my-2 bg-danger border-0"
            onClick={() => {
             props.D(idx);
            }}
          >
            Delete
          </button>
        </li>
      ))}
      {props.getdata && props.getdata.length > 0 && (
        <button
          className="border-0 bg-danger-subtle"
          onClick={() => {
            props.AD()
          }}
        >
          Delete All
        </button>
      )}
    </div>
  );
}

let datasend = (dispatch) => ({
  Add: (data) => (dispatch(Add_Data(data))),
  D: (idx) => (dispatch(Delete(idx))),
  SE: (idx, data) =>( dispatch(Editd(idx, data))),
  AD: () =>( dispatch(AllDelete())),
});

let recivedata = (state) => ({ getdata: state.list });

export default connect(recivedata,datasend)(Todo);
