import React, {useState} from "react";
import axios from "axios";
import './Styling.css';
import {Link} from 'react-router-dom';
import Select from "react-select/base";


function EditContact({editContact, loggedIn}) {
    const [firstName, setFirstName] = useState(editContact.firstName)
    const [lastName, setLastName] = useState(editContact.lastName)
    const [street, setStreet] = useState(editContact.street)
    const [streetnumber, setStreetnumber] = useState(editContact.streetnumber)
    const [zip, setZip] = useState(editContact.zip)
    const [city, setCity] = useState(editContact.city)
    const [state, setState] = useState(editContact.state)
    const [country, setCountry] = useState(editContact.country)
    const [privat, setPrivat] = useState(editContact.privat)
    const [owner, setOwner] = useState(editContact.owner)

    function updateContact(event) {
        event.preventDefault()

        if (!firstName || !lastName || !street || !streetnumber ||
            !zip || !city || !country) {
            alert('Please fill in all required fields. ' +
                'All fields marked * are required.')
            return
        }

        const editedContact = {
            firstName: firstName,
            lastName: lastName,
            street: street,
            streetnumber: streetnumber,
            zip: zip,
            city: city,
            state: state,
            country: country,
            privat: privat,
            owner: owner
        }
        const id = editContact._id

        axios.put("http://localhost:3002/contacts/" + id, editedContact)

    }

    function deleteContact(event) {
        event.preventDefault()

        const id = editContact._id
        axios.delete("http://localhost:3002/contacts/" + id)
        console.log('delete the contact')
    }

return (
    <div className='container'>

        {loggedIn ?
            <div>

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
                            value={firstName}
                            placeholder='First Name'>
                        </input>
                    </div>

                    <div className='form-control'>
                        <label>Last Name*</label>
                        <input
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                            name='lastName'
                            value={lastName}
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
                            value={street}
                            placeholder='Street'
                            autoComplete='off'
                        ></input>
                    </div>

                    <div className='form-control'>
                        <label>Number*</label>
                        <input
                            onChange={(e) => {
                                setStreetnumber(e.target.value)
                            }}
                            name='streetnumber'
                            value={streetnumber}
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
                            value={zip}
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
                            value={city}
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
                            value={state}
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
                            value={country}
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
                            value={privat}
                        ></input>
                    </div>

                    <div className='form-control'>
                        <label>Owner</label>
                        <input
                            onChange={(e) => {
                                setOwner(e.target.value)
                            }}
                            name='owner'
                            value={owner}
                        ></input>
                    </div>


                    <button onClick={updateContact} className='btn btn-lg btn-info'>Update Contact</button>
                    <button onClick={deleteContact} className='btn btn-lg btn-info'>Delete Contact</button>
                </form>

            </div>
            :
            <h1> Sorry, you are not logged in</h1>
        }
    </div>

)

}

export default EditContact