import React, {useState} from "react";
import axios from "axios";
import './Styling.css';
import {Link} from 'react-router-dom';
import {Dropdown, Menu} from 'semantic-ui-react'
import Select from "react-select/base";


function AddContact({loggedIn}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [street, setStreet] = useState('')
    const [streetnumber, setStreetnumber] = useState('')
    const [zip, setZip] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [privat, setPrivat] = useState(false)
    const [owner, setOwner] = useState('')

    const ownerOptions = [
        {
            label: "admina",
            value: 1
        },

        {
            label: "normalo",
            value: 2
        }
    ]


    function AddContact(event) {
        event.preventDefault()

        if (!firstName || !lastName || !street || !streetnumber ||
            !zip || !city || !country) {
            alert('Please fill in all required fields. ' +
                'All fields marked * are required.')
            return
        }

        const newContact = {
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
       axios.post("http://localhost:3002/contacts", newContact)


    }

    return (
        <div className='container'>

            {loggedIn ?
                <div>

            <h1>Add Contact </h1>

            <Link to='/contacts'>
                <button
                    className='btn btn-lg btn-info'
                    color='teal'
                >Back
                </button>

            </Link>

            <form className='add-contact'>
                <div className='form-control'>
                    <label>First Name*</label>
                    <input
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}
                        name='firstName'
                        value={firstName}
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
                <button onClick={AddContact} className='btn btn-lg btn-info'>Add Contact</button>
            </form>
                </div>
                :
                <h1> Sorry, you are not logged in</h1>
            }
        </div>
    )
}
export default AddContact