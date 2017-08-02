import React from 'react'
import ReactDOM from 'react-dom'
import { Provider,observer } from 'mobx-react'
import { initStore } from '../store'
import Dashboard from '../components/Dashboard'
import CTable from '../components/Tables'
import ABC from '../components/ABCView'
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';
import Customer from '../components/customer'

@observer
export default class Index extends React.Component {

   getInitialProps({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    return {isServer}
  }
  
    constructor(props) {
    super(props)
    this.store = initStore(props.isServer)

    }
  render() {
    return (<Provider store={this.store}>
    <Dashboard>
          <Customer/>

    </Dashboard>
    </Provider>)
    
}}
