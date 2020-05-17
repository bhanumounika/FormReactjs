import React from 'react'


function selectgender(){
    return (
        <div>
        <input type="radio" id="male" name="gender" value="male"></input>
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female"></input>
        <label for="female">Female</label>
        <input type="radio" id="other" name="gender" value="other"></input>
        <label for="other">Other</label>
        </div>
    )
}

export default selectgender;