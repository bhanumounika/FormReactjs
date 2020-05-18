import React, { Component, Props } from 'react'
import { TextField, IChoiceGroupProps } from '@fluentui/react';
import { Stack, IStackTokens, IStackStyles } from '@fluentui/react';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react'
import { Dropdown, IDropdownStyles, IDropdownOption } from '@fluentui/react'
import { Checkbox } from '@fluentui/react'
import { PrimaryButton } from '@fluentui/react';

import Table from './table';

const stackStyles: Partial<IStackStyles> = { root: { width: 300 } };
const buttonStyles: Partial<IStackStyles> = { root: { width: 100 } };

const stackTokens = { childrenGap: 10 };
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

class Formdata1 extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            Name: '',
            PersonalMail: '',
            College: '',
            Gender: '',
            Graduation: '',
            Skills: '',
            checkedSkills: [],
            showTable: false,
            errMsg: ''
        }
    }
    handlenameChange(event: any) {
        this.setState({ Name: event.target.value });
        console.log(this.state.Name)
    }
    handlemailChange(event: any) {
        this.setState({ PersonalMail: event.target.value });
    }
    handleCollegeChange(event: any) {
        this.setState({ College: event.target.value });
    }
    handlegender(event: any) {
        //console.log(this.state.Gender)
        //this.setState({ Gender : event.target.x.selectedKey.text});
        //this.setState({ Gender : x.key});
        //this.setState({ Gender: x.key });         
        this.setState({ Gender: event.text });
        console.log(this.state.Gender)
    }
    handlegraduation(event: any) {
        //console.log(this.state.Gender)
        //this.setState({ Gender : event.target.x.selectedKey.text});
        //debugger;
        //this.setState({ Gender : x.key});
        //this.setState({ Gender: x.key });         
        this.setState({ Graduation: event.text });
        console.log(this.state.Graduation)
    }
    handleSkills(event: any, isChecked: any) {
        const { checkedSkills } = this.state; // destructing
        const selectedLabel = event.target.getAttribute("aria-label");

        //debugger;
        console.log("mounika");
        if (isChecked === true) {
            this.setState({
                checkedSkills: checkedSkills.concat(selectedLabel)
            });

        } else {
            const selectedLabelIndex = checkedSkills.indexOf(selectedLabel);

            if (selectedLabelIndex > -1) {
                checkedSkills.splice(selectedLabelIndex, 1);
            }

            this.setState({
                checkedSkills: checkedSkills
            });
        }
    }
    handleClick = (event: any) => {
        
        const { Name, PersonalMail, College, Gender, Graduation, checkedSkills } = this.state;
        if (Name !== '' && PersonalMail !== '' && College !== '' && Gender !== '' && Graduation !== '' && checkedSkills.length !== 0) {
            this.setState({ flag: "onclick", showTable: true, data: this.state, errMsg: '' })
        } else {
            this.setState({
                errMsg: 'some fields are missing data'
            })
        }
        

    }
    render() {
        // const { name, PersonalMail, Gender, Graduation, checkedSkills, flag } = this.state
        return (

            <React.Fragment>
                <div className={!this.state.showTable ? 'show' : 'hide'}>
                    <Stack tokens={nestedStack}>
                        <Stack tokens={stackTokens} styles={stackStyles}>
                            <TextField label="Name" value={this.state.Name} onChange={event => this.handlenameChange(event)}></TextField>
                            {/* <p>Hi {Name}! How are you doing</p> */}
                            <TextField label="Personal Mail" value={this.state.PersonalMail} onChange={event => this.handlemailChange(event)}></TextField>
                            {/* <p>{Name} entered {PersonalMail}</p> */}
                            <TextField label="College" value={this.state.College} onChange={event => this.handleCollegeChange(event)}></TextField>
                        </Stack>
                        <Stack horizontal tokens={stackTokens}>
                            <ChoiceGroup options={somegroup} label="Gender" required={true} onChanged={(event) => this.handlegender(event)} />
                            {/* <p>{Gender}</p> */}
                        </Stack>
                        <Stack tokens={stackTokens}>
                            <Dropdown placeholder="Select an option" label="Graduation" options={options1} styles={dropdownStyles} onChanged={(event) => this.handlegraduation(event)} />
                            {/* <p>{Graduation}</p> */}
                            Skills
    
                    <Checkbox label="java" onChange={(event, isChecked) => this.handleSkills(event, isChecked)} />
                            <Checkbox label="C" onChange={(event, isChecked) => this.handleSkills(event, isChecked)} />
                            <Checkbox label="C++" onChange={(event, isChecked) => this.handleSkills(event, isChecked)} />
                            <Checkbox label="Python" onChange={(event, isChecked) => this.handleSkills(event, isChecked)} />
                        </Stack>
                        {/* <p>{checkedSkills}</p> */}
                        <div className="error">{this.state.errMsg}</div>
                        <Stack styles={buttonStyles}>
                            
                            {/* <Table refs="table" data={this.state}/> */}
                            <PrimaryButton label="Submit" onClick={(event) => this.handleClick(event)}>Submit</PrimaryButton>
                        </Stack>
                    </Stack>
                </div>
                <Table data={this.state} showTable={this.state.showTable} />

            </React.Fragment>

        )
    }
}

export default Formdata1;