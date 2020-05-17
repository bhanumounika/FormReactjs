import React from 'react';
export const table = (props) => {
  console.log(props);

  const { College, Gender, Name } = props.data;

  return (
    <React.Fragment>

      <div>
        <table>
          <tr>
            <td>  Name: {Name} </td>
          </tr>
          <tr>
            <td>  Mail: </td>
          </tr>
          <tr>
            <td>  College: {College}</td>
          </tr>
          <tr>
            <td>  Gender: {Gender}</td>
          </tr>
          <tr>
            <td>  Gradution:</td>
          </tr>
        </table>
      </div>
    </React.Fragment>);
};
export default table;