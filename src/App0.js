// import { useState,useEffect } from "react";
// export default function App0() {
//   const [value, setValue] = useState(5);
//   const [value2, setValue2] = useState('value2');
//   useEffect(() => {
//     console.log(value)
//     setValue(0);
//     console.log(value);
//     console.log('effect');
//     // return () => {
//     //   console.log('clean up');
//     // };
//   }, [value,value2]);
//   console.log('body');

// import { logDOM } from "@testing-library/react";

//   return (
//     <div>
//       {console.log('render')}
//       {console.log(value)}
//       {console.log('render')}
//       <input type="text" />
//       <button onClick={() => setValue2('value222222222222222')}>button</button>
//     </div>
//   );}

// const object={
//   message:"Hello,Wrold",
//   logMessage(){
//     console.log(this.message)
//   }
// }
// setTimeout(object.logMessage,1000)
import React from 'react';
class EmailButton extends React.Component {
  render() {
    return (
      <a href="mailto:example@example.com">Send Email</a>
    );
  }
}
export default EmailButton