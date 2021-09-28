import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import LogIn from "./components/LogIn";
import EditContact from "./components/EditContact";
import {useState} from "react";


function App() {
    const [editContact, setEditContact] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <Router>
            <NavBar />

            <Route path='/contacts'>
                <Contacts setEditContact={setEditContact} loggedIn = {loggedIn}/>
            </Route>

            <Route path='/addContact'>
               <AddContact loggedIn = {loggedIn}/>
            </Route>

            <Route path='/logIn'>
                <LogIn setLoggedIn = {setLoggedIn}/>
            </Route>

            <Route path='/editContact'>
                <EditContact editContact={editContact} loggedIn = {loggedIn}/>
            </Route>



        </Router>

    )
}

export default App;
