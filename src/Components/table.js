import React from 'react';
import { PrimaryButton } from '@fluentui/react';


export const table = (props) => {
  console.log(props);

  const { College, Gender, Name, showTable } = props.data;

  const handleBack = () => {
    props.handleBack();
  }

  return (
    <React.Fragment>

    
      <div className={showTable ? 'show' : 'hide'}>
        <PrimaryButton label="Back" onClick={handleBack}>Back</PrimaryButton>

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