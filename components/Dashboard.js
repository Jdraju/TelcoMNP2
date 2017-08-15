import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { PureComponent } from 'react'
import { inject, observer } from 'mobx-react'
import Avatar from 'react-md/lib/Avatars'
import Button from 'react-md/lib/Buttons/Button'
import FontIcon from 'react-md/lib/FontIcons'
import ListItem from 'react-md/lib/Lists/ListItem'
import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import SelectField from 'react-md/lib/SelectFields'



//const avatarSrc = 'https://cloud.githubusercontent.com/assets/13041/19686250/971bf7f8-9ac0-11e6-975c-188defd82df1.png'
const avatarSrc = '/static/ibmlogo-grey-54x20.png'

class NavigationLink extends PureComponent {
  render() {
    const { href, as, children, ..._props } = this.props
    return <div {..._props} style={{padding: 0}}>
      <Link href={href} as={as}>
        <a className='md-list-tile md-list-tile--mini' style={{width: '100%', overflow: 'hidden'}}>
          {children}
        </a>
      </Link>
    </div>
  }
}

@inject('store') @observer
export default class Dashboard extends PureComponent {

  constructor() {
    super()
    this.state = {
      role: 'Telecommunications'
    }

  }
  
  render() {
   /* let skyLightContent = <ABC/>
    let xyztitle = "XYZ View"
    let abctitle = "ABC View"
    let skylightTitle = abctitle */
    
    const closeButton = (
      <Button
        icon
        tooltipLabel='Close the interactive demo'
        tooltipDelay={150}
        tooltipPosition='left'
      >
        close
      </Button>
    )
       

    let navItems = [
      {
        roles: ['Telecommunications'],
        component: <ListItem
          key='1'
          component={NavigationLink}
          href='#'
          onClick={this.props.store.inventory}
          leftIcon={<FontIcon>account_circle</FontIcon>}
          tileClassName='md-list-tile--mini'
          primaryText={'Dashboard'}
        />,
      },
      {
        roles: ['Telecommunications','ABC'],
        component: <ListItem
          key='6'
          component={NavigationLink}
          leftIcon={<FontIcon>perm_identity</FontIcon>}
          tileClassName='md-list-tile--mini'
          primaryText={'Customer View'}
          onClick={() => {
            this.refs.ViewPop.show()
            }
            }
        />
      },
      {
        roles: ['Telecommunications','XYZ'],
        component: <ListItem
          key='7'
          component={NavigationLink}
          leftIcon={<FontIcon>perm_identity</FontIcon>}
          tileClassName='md-list-tile--mini'
          primaryText={'DO View'}
          onClick={() => {
            this.refs.ViewPop2.show()
            
            }}
        />,
      },
      {
        roles: ['Telecommunications','XYZ'],
        component: <ListItem
          key='8'
          component={NavigationLink}
          leftIcon={<FontIcon>perm_identity</FontIcon>}
          tileClassName='md-list-tile--mini'
          primaryText={'RO View'}
          onClick={() => {
            this.refs.ViewPop2.show()
            
            }}
        />,
      },
      {
        roles: ['Telecommunications'],
        component: <ListItem
          key='9'
          component={NavigationLink}
          href='#'
          onClick={this.props.store.resetInventory}
          leftIcon={<FontIcon>account_circle</FontIcon>}
          tileClassName='md-list-tile--mini'
          primaryText={'Regulator View'}
        />,
      }
    ]
    

    return <div>
      <Head>
        <link rel='stylesheet' href='/static/react-md.min.css' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />

      </Head>
     
      <NavigationDrawer
        navItems={navItems.filter(navItem => {
          let result = false
          if(navItem.roles.indexOf(this.state.role) > -1) result = true
          return result
        }).map(navItem => navItem.component)}
        contentClassName='md-grid'
        drawerHeaderChildren={[
          /*
          <Avatar
            key={avatarSrc}
            src={avatarSrc}
            role='presentation'
            iconSized
            style={{alignSelf: 'center', marginLeft: 16, marginRight: 16, flexShrink: 0}}
          />,*/
          <SelectField
            id='account-switcher'
            defaultValue={this.state.role}
            menuItems={['Telecommunications']}
            key='account-switcher'
            position={SelectField.Positions.BELOW}
            className='md-select-field--toolbar'
            onChange={val => {
              this.setState({role: val})
              Router.push('/')
            }}
          />
        ]}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        toolbarTitle='Blockchain for Telco MNP Dashboard'
      >
        {this.props.children}
      </NavigationDrawer>
      
    </div>
  }
}
