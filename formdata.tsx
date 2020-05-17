import React, { Component, Props } from 'react'
import { TextField, IChoiceGroupProps } from '@fluentui/react';
import { Stack, IStackTokens, IStackStyles } from '@fluentui/react';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react'
import { Dropdown, IDropdownStyles, IDropdownOption } from '@fluentui/react'
import { Checkbox } from '@fluentui/react'
import {PrimaryButton} from '@fluentui/react'
const stackStyles: Partial<IStackStyles> = { root: { width: 300 } };
const buttonStyles: Partial<IStackStyles> = { root: { width: 100 } };

const stackTokens = { childrenGap:10 };
const nestedStack: IStackTokens = { childrenGap: 5 }
const somegroup: IChoiceGroupOption[] = [
    { key: 'A', text: 'Male' },
    { key: 'B', text: 'Female' },
];

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 300 },
};

const options1: IDropdownOption[] = [
    { key: '2017', text: '2017' },
    { key: '2018', text: '2018' },
    { key: '2019', text: '2019' },
    { key: '2020', text: '2020' },
    { key: '2021', text: '2021' },
    { key: '2022', text: '2022' },
    { key: '2023', text: '2023' },
];

class Formdata1 extends Component<any,any> {
    constructor(props:any){
        super(props);
        this.state={
            Name:'',
            PersonalMail:'',
            College:'',
            Gender:'x',
            Graduation:'',
            Skills:'',
        }
    }
     handlenameChange (event:any) {
        this.setState({ Name : event.target.value });
        console.log(this.state.Name)  
    }
      handlemailChange (event:any) {
        this.setState({ PersonalMail : event.target.value });
      }
      handleCollegeChange (event:any) {
        this.setState({ College : event.target.value });
      }
      handlegender(x:IChoiceGroupOption,ev: React.FormEvent<HTMLInputElement>){
        debugger;  
        console.log(this.state.Gender)
          //this.setState({ Gender : event.target.x.selectedKey.text});
          
          //this.setState({ Gender : x.key});
          this.setState({ Gender: x.text });
          console.log(this.state.Gender)
        }
    render() {
        const {Name,PersonalMail,Gender}=this.state
        return (
            <Stack tokens={nestedStack}>
                <Stack tokens={stackTokens} styles={stackStyles}>
                    <TextField label="Name" value={this.state.Name} onChange={event=>this.handlenameChange(event)}></TextField>
                    <p>Hi {Name}! How are you doing</p>
                    <TextField label="Personal Mail" value={this.state.PersonalMail} onChange={event=>this.handlemailChange(event)}></TextField>
                    <p>{Name} entered {PersonalMail}</p>
                    <TextField label="College" value={this.state.College} onChange={event=>this.handleCollegeChange(event)}></TextField>
                </Stack>
                <Stack horizontal tokens={stackTokens}>
                    <ChoiceGroup options={somegroup} label="Gender" value={this.state.Gender} required={true} onChanged={this.props.handlegender}/>
                    <p>{Gender}</p>
                </Stack>
                <Stack tokens={stackTokens}>
                    <Dropdown placeholder="Select an option" label="Graduation" options={options1} styles={dropdownStyles}/>
                    Skills
                    <Checkbox label="java" />
                    <Checkbox label="C" />
                    <Checkbox label="C++" />
                    <Checkbox label="Python" />
                </Stack>
                <Stack styles={buttonStyles}>
                <PrimaryButton label="Submit">Submit</PrimaryButton> 
                </Stack>
                </Stack>

        )
    }
}

export default Formdata1;