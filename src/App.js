import React from 'react'
import './App.css'
import {connect, Provider} from 'react-redux'
import store from './Store/store'
import ProfileHeader from './Component/ProfileHeader/ProfileHeader'
import ProfileTable from './Component/ProfileTable/ProfileTable'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Component/Navbar/NavBar'
import ProfileFooter from './Component/ProfileFooter/ProfileFooter'

const App = (props)=> {
  return (
    <div className="App">
      <div className="NavBar"><NavBar/></div>
      <div className='Wrapper'>
        <ProfileHeader/>
        <div className='profileTable'><ProfileTable {...props}/></div>
        <ProfileFooter/>
      </div>
    </div>
  );
}
const mapStateToProps = (state) =>{
  return state
}

const AppContainer = connect(mapStateToProps,)(App)

const TestApp = (props)=>{
  return <Provider store={store}>
      <AppContainer/>
    </Provider>
}
export default TestApp;
