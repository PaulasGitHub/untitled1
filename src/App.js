import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import LogIn from "./components/LogIn";
import EditContact from "./components/EditContact";
import {useState} from "react";


function App() {
    const [editContact, setEditContact] = useState(null)

    return (
        <Router>
            <NavBar />

            <Route path='/contacts'>
                <Contacts setEditContact={setEditContact}/>
            </Route>

            <Route path='/addContact'>
               <AddContact />
            </Route>

            <Route path='/logIn'>
                <LogIn />
            </Route>

            <Route path='/editContact'>
                <EditContact editContact={editContact}/>
            </Route>



        </Router>

    )
}

export default App;
