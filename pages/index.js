import React from 'react'
import ReactDOM from 'react-dom'
import { Provider,observer } from 'mobx-react'
import { initStore } from '../store'
import Dashboard from '../components/Dashboard'
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';
import Customer from '../components/Customer/customer'
import Donor from '../components/DO/donor'
import { css } from 'aphrodite'
import { styles } from './styles.css'
import {Router, route, IndexRoute, hashHistory} from 'react-router'

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
        <Donor/> 
        <h1>FAIL</h1>
    </Dashboard>
    </Provider>)
}}
