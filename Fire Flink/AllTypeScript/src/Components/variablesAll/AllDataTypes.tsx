interface objs {
  name: string;
  Age: number;
  place: boolean;
}

function AllDataTypes() {
  // string Variabel
  let str: string = "Anil Kumar K R";
  // number Variabel
  let num: number|string = 123;
  // num="Anil"
  
  // boolean Variabel
  const bool: boolean = true;
  // Null Variabel
  const NullValue: null = null;
  let data:unknown=123;
  // String Array
  let strarray: string[] = ["Anil", "manju", "sunil"];
  // Number Array
  let numarray: readonly number[] = [5, 4, 3, 2, 1];
  // boolean Array
  let boolarray: boolean[] = [true, false, true];
  // mixdata
  let strmixnumarry: [string, number, boolean] = ["Raju", 4, true];
  // object
  let obj: objs = { name: "Anil", Age: 23, place: true };
  // Array of objects
  let objArrays: any[] = [
    { name: "Anil", Age: 21, place: true },
    { name: "Raju", Age: 28, place: false },
    { name: "Sunil", Age: 22, place: true },
  ];

  return (
    <div>
      <h1>{str}</h1>
      <hr />
      <h1>{num}</h1>
      <hr />
      {/* <h1> {String(bool)}</h1> */}
      <hr />
      <h1>{NullValue}</h1>
      <hr />
      {strarray.map((val, idx) => (
        <li key={idx}>{val}</li>
      ))}
      <hr />
      {numarray.map((val, idx) => (
        <li key={idx}>{val}</li>
      ))}
      <hr />
      {strmixnumarry.map((val, idx) => (
        <li key={idx}>{val}</li>
      ))}
      <hr />
      <h1>{obj.name + " " + obj.Age + " " + obj.place}</h1>
      <hr />
      {objArrays.map((val,idx) => (
        <h1 key={idx}>{val.name}</h1>
      ))}
    </div>
  );
}

export default AllDataTypes;
