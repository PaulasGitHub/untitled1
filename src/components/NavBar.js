import {Link} from 'react-router-dom';
import './Styling.css';

function NavBar(){
    return <nav className='navbar bg-dark container'>
        <h4><Link className='link' to ='/contacts'>Contacts</Link></h4>
        <h4><Link className='link' to='/addContact'>Add Contact</Link></h4>
        <h4><Link className='link' to='logIn'>Logout</Link></h4>
    </nav>
}

export default NavBar