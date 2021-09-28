import {useState} from "react";
import axios from "axios";
import './Styling.css';
import {Link} from 'react-router-dom';
import {Dropdown, Menu} from 'semantic-ui-react'
import Select from "react-select/base";


function AddContact() {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        street: '',
        streetnumber: '',
        zip: '',
        city: '',
        state: '',
        country: '',
        privat: false,
        owner: ''
    })

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

    function handleChange(event) {
        const {name, value} = event.target

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault()

        if (!input.firstName || !input.lastName || !input.street || !input.streetnumber ||
            !input.zip || !input.city || !input.country) {
            alert('Please fill in all required fields. ' +
                'All fields marked * are required.')
            return
        }

        const newContact = {
            firstName: input.firstName,
            lastName: input.lastName,
            street: input.street,
            streetnumber: input.streetnumber,
            zip: input.zip,
            city: input.city,
            state: input.state,
            country: input.country,
            privat: input.privat,
            owner: input.owner
        }
       axios.post("http://localhost:3001/addContact", newContact)


    }

    return (
        <div className='container'>
            <h1>Add Contact Page</h1>

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
                        onChange={handleChange}
                        name='firstName'
                        value={input.firstName}
                        placeholder='First Name'
                    ></input>
                </div>

                <div className='form-control'>
                    <label>Last Name*</label>
                    <input
                        onChange={handleChange}
                        name='lastName'
                        value={input.lastName}
                        placeholder='Last Name'
                    ></input>
                </div>

                <div className='form-control'>
                    <label>Street*</label>
                    <input
                        onChange={handleChange}
                        name='street'
                        value={input.street}
                        placeholder='Street'
                    ></input>
                </div>

                <div className='form-control'>
                    <label>Number*</label>
                    <input
                        onChange={handleChange}
                        name='streetnumber'
                        value={input.streetnumber}
                        placeholder='Number'
                    ></input>
                </div>

                <div className='form-control'>
                    <label>ZIP*</label>
                    <input
                        onChange={handleChange}
                        name='zip'
                        value={input.zip}
                        placeholder='ZIP'
                    ></input>
                </div>

                <div className='form-control'>
                    <label>City*</label>
                    <input
                        onChange={handleChange}
                        name='city'
                        value={input.city}
                        placeholder='City'
                    ></input>
                </div>

                <div className='form-control'>
                    <label>State</label>
                    <input
                        onChange={handleChange}
                        name='state'
                        value={input.state}
                        placeholder='State'
                    ></input>
                </div>

                <div className='form-control'>
                    <label>Country*</label>
                    <input
                        onChange={handleChange}
                        name='country'
                        value={input.country}
                        placeholder='Country'
                    ></input>
                </div>

                <div className='form-control form-check'>
                    <label>Private</label>
                    <input
                        onChange={handleChange}
                        type='checkbox'
                        checked='privat'
                        name='privat'
                        value={input.privat}
                    ></input>
                </div>
                <div className='form-control'>
                    <label>Owner</label>
                    <input
                        onChange={handleChange}
                        name='owner'
                        value={input.owner}
                        placeholder='admina or normalo'
                    ></input>
                </div>

                <button onClick={handleClick} className='btn btn-lg btn-info'>Add Contact</button>
            </form>

        </div>
    )
}
export default AddContact