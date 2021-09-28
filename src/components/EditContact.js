import {useState} from "react";
import axios from "axios";
import './Styling.css';
import {Link} from 'react-router-dom';
import Select from "react-select/base";


function EditContact({editContact}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [street, setStreet] = useState('')
    const [streetNumber, setStreetNumber] = useState('')
    const [zip, setZip] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [privat, setPrivat] = useState(false)
    const [owner, setOwner] = useState('')

    function updateContact(event) {
        event.preventDefault()

        if (!editContact.firstName || !editContact.lastName || !editContact.street || !editContact.streetnumber ||
            !editContact.zip || !editContact.city || !editContact.country) {
            alert('Please fill in all required fields. ' +
                'All fields marked * are required.')
            return
        }

        const editedContact = {
            firstName: editContact.firstName,
            lastName: editContact.lastName,
            street: editContact.street,
            streetnumber: editContact.streetnumber,
            zip: editContact.zip,
            city: editContact.city,
            state: editContact.state,
            country: editContact.country,
            privat: editContact.privat,
            owner: editContact.owner
        }


        //axios.post("http://localhost:3001/editContact", editedContact)

    }

    function handleDelete(event) {
        event.preventDefault()

        const deletableContact = {
            //get ID of contact
        }
        //axios.delete("http://localhost:3000/Contacts", deletableContact)
        console.log('delete the contact')
    }

    return (
        <div className='container'>
            <h1>Edit Contact </h1>

            <Link to='/contacts'>
                <button
                    className='btn btn-lg btn-info'
                    color='teal'
                >Back
                </button>

            </Link>

            <form className='edit-contact'>
                <div className='form-control'>
                    <label>First Name*</label>
                    <input
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}
                        name='firstName'
                        value={editContact.firstName}
                        placeholder='First Name'
                        autoComplete='off'>
                    </input>
                </div>

                <div className='form-control'>
                    <label>Last Name*</label>
                    <input
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }}
                        name='lastName'
                        value={editContact.lastName}
                        placeholder='Last Name'
                        autoComplete='off'
                    ></input>
                </div>

                <div className='form-control'>
                    <label>Street*</label>
                    <input
                        onChange={(e) => {
                            setStreet(e.target.value)
                        }}
                        name='street'
                        value={editContact.street}
                        placeholder='Street'
                        autoComplete='off'
                    ></input>
                </div>

                <div className='form-control'>
                    <label>Number*</label>
                    <input
                        onChange={(e) => {
                            setStreetNumber(e.target.value)
                        }}
                        name='streetnumber'
                        value={editContact.streetnumber}
                        placeholder='Number'
                        autoComplete='off'
                    ></input>
                </div>

                <div className='form-control'>
                    <label>ZIP*</label>
                    <input
                        onChange={(e) => {
                            setZip(e.target.value)
                        }}
                        name='zip'
                        value={editContact.zip}
                        placeholder='ZIP'
                        autoComplete='off'
                    ></input>
                </div>

                <div className='form-control'>
                    <label>City*</label>
                    <input
                        onChange={(e) => {
                            setCity(e.target.value)
                        }}
                        name='city'
                        value={editContact.city}
                        placeholder='City'
                        autoComplete='off'
                    ></input>
                </div>

                <div className='form-control'>
                    <label>State</label>
                    <input
                        onChange={(e) => {
                            setState(e.target.value)
                        }}
                        name='state'
                        value={editContact.state}
                        placeholder='State'
                        autoComplete='off'
                    ></input>
                </div>

                <div className='form-control'>
                    <label>Country*</label>
                    <input
                        onChange={(e) => {
                            setCountry(e.target.value)
                        }}
                        name='country'
                        value={editContact.country}
                        placeholder='Country'
                        autoComplete='off'
                    ></input>
                </div>

                <div className='form-control form-check'>
                    <label>Private</label>
                    <input
                        onChange={(e) => {
                            setPrivat(e.target.value)
                        }}
                        type='checkbox'
                        checked='privat'
                        name='privat'
                        value={editContact.privat}
                    ></input>
                </div>

                <div className='form-control'>
                    <label>Owner</label>
                    <input
                        onChange={(e) => {
                            setOwner(e.target.value)
                        }}
                        name='owner'
                        value={editContact.owner}
                    ></input>
                </div>


                <button onClick={updateContact} className='btn btn-lg btn-info'>Update Contact</button>
                <button onClick={handleDelete} className='btn btn-lg btn-info'>Delete Contact</button>
            </form>


        </div>

    )

}

export default EditContact