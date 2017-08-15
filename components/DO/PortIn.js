import React, {Component} from 'react';
//import { css } from 'aphrodite'
import ReactTable from 'react-table'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


<link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"/>

var products = [{
      msisdn:12148706525,
      csp: "ABC",
      queuedT: "John Smith",
      reason: "johnsmith@abc.com",
      status:"Y",
  },
  {
      msisdn:12148706525,
      csp: "ABC",
      queuedT: "John Smith",
      reason: "johnsmith@abc.com",
      status:"Y",
  },
  {
      msisdn:12148706525,
      csp: "ABC",
      queuedT: "John Smith",
      reason: "johnsmith@abc.com",
      status:"Y",
  }
  ]

class portIn extends Component{


    render() {
        return(
            <div>
                
                <BootstrapTable data={ products } striped hover condensed>
                    <TableHeaderColumn dataField='num' isKey>MSISDN</TableHeaderColumn>
                    <TableHeaderColumn dataField='csp'>CSP(DO)</TableHeaderColumn>
                    <TableHeaderColumn dataField='queuedT'>Queued Time</TableHeaderColumn>
                    <TableHeaderColumn dataField='reason'>Reason</TableHeaderColumn>
                    <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                </BootstrapTable>
            </div>     


        );
    }

}

export default portIn;

