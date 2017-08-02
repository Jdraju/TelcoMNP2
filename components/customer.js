import React, {Component} from 'react';
import { css } from 'aphrodite'
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Plans from './plans';
import Details from './details';

var products = [{
      id: 1,
      name: "Plan1",
      price: 120
  }, {
      id: 2,
      name: "Plan2",
      price: 80
  }, {
      id: 3,
      name: "Plan3",
      price: 100
  }, {
      id: 4,
      name: "Plan4",
      price: 85
  }, {
      id: 5,
      name: "Plan5",
      price: 60
  },

  
  ]

class customer extends Component{
    constructor(props){
        super(props);

        this.state = {term:''};
    }

    render() {
        return(
        <ExpansionList style={{ width: '98%'}}>
            <ExpansionPanel label="Intro" defaultExpanded>
            
            <div className='customers' >
                <h3>Customer Eligibility View: </h3>

                <div className='customerIdent'>
                    <p> To check eligibility, enter your phone number.<br/> During this process you will have to provide additional information to establish your identity.</p>
                    Enter # to check Eligibility: <input/> <button>Check Eligibility</button><button>Track</button>
                </div>

                <div className='customerDetails'>
                    <Details />
                    <br/>
                    <Plans />
                </div>     

            </div>
        </ExpansionPanel>
      </ExpansionList>

        );
    }

}

export default customer;