import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import FunctionalComponents from './FunctionalComponents'
import RadioComponent from './RadioComponents'
import CheckBoxComponents from './CheckBoxComponent';
import Table from './table'
import { PrimaryButton } from '@fluentui/react';
//Two tsx files
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'


class form extends Component {

    constructor(props) {
        super(props);
        this.state = { name: "test" }

    }
     getData =() =>{
       
    }        
    render()
        {
            return (
                <div>
                    <form>
                        <div className="flex ">
                            Name:
                 <FunctionalComponents  />
                        </div>
                        <div className="flex">
                            Personal Mail:
                 <FunctionalComponents name="mail" />
                        </div>
                        <div className="flex">
                            Gender:
                 <RadioComponent />
                        </div>
                        <div className="flex">
                            College:
                 <FunctionalComponents />
                        </div>
                        <div className="flex">
                            Year Of Graduation:  Skills:
                 <CheckBoxComponents />
                        </div>
                        <Router>
                            <Link to="/table">
                                <PrimaryButton onClick={this.getData}>Click To Submit</PrimaryButton>
                            </Link>
                            <Switch>
                                {/* 
                    <Route exact path='/' component={form}></Route>
                    */}
                                <Route path='/table' component={Table}></Route>
                            </Switch>
                        </Router>
                    </form>
                    {/* <Table data={this.state}  ></Table> */}
                </div>
            )
        };
    }
    export default form;
