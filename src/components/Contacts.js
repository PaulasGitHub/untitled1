import React, {useState, useEffect} from "react";
//import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";
import {FaEdit} from 'react-icons/fa'
import {Link} from "react-router-dom";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAw-dW7unnfVPQJ0_xVGUC40cXxJPlrpuM");

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 52.520008, lng: 13.404954
};

const position = {
    lat: 52.522331,
    lng: 13.412740
}


function filterMyContacts() {
    console.log('my contacts')
}

function filterAllContacts() {
    console.log('all contacts')
}

function Contacts({setEditContact, loggedIn}) {
    const [contacts, setContacts] = useState([{
        firstName: '',
        lastName: '',
        street: '',
        streetnumber: '',
        zip: '',
        city: '',
        state: '',
        country: '',
        privat: true,
        owner: ''

    }])

    useEffect(() => {
        fetch('http://localhost:3002/contacts').then(res => {
            if (res.ok) {
                return res.json()
            }
        })
            .then(jsonRes => setContacts(jsonRes))
            .then(getlatlong)
    }, [])

    const getlatlong = () => {
        contacts.forEach((contact) => {
            Geocode.fromAddress(contact.street + ' ' + contact.streetnumber + ' ' + contact.zip + ' ' + contact.city).then(
                (response) => {
                    const {lat, lng} = response.results[0].geometry.location;
                    contact.lat = lat
                    contact.lng = lng
                    console.log(lat, lng);
                },
                (error) => {
                    console.error(error);
                }
            );
        })
    }


    return (
        <div className='container'>

            {loggedIn ?
                <div>
                    <LoadScript
                        googleMapsApiKey="AIzaSyAw-dW7unnfVPQJ0_xVGUC40cXxJPlrpuM"
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                        >
                            {contacts.map(contact =>
                                <div>
                                    <Marker
                                        label={contact.firstName}
                                        position={{lat: contact.lat, lng: contact.lng}}/>
                                </div>
                            )}
                        </GoogleMap>
                    </LoadScript>

                    {contacts.map(contact =>
                        <div>
                            <h4>{contact.firstName} {contact.lastName} {}
                                <Link to='/editContact' onClick={() => setEditContact(contact)}>
                                    <FaEdit
                                        style={{color: 'black', cursor: 'pointer'}}
                                    />
                                </Link>
                            </h4>

                            <p>{contact.street} {contact.streetnumber}</p>
                            <p>{contact.zip} {contact.city}</p>
                            <p>{contact.state} {contact.country}</p>
                        </div>
                    )}
                    <button onClick={filterMyContacts} className='btn btn-sm btn-info'>My Contacts</button>
                    <button onClick={filterAllContacts} className='btn btn-sm btn-info'>All Contacts</button>

                </div>
                :
                <h1> Sorry, you are not logged in</h1>
            }
        </div>
    )
}

export default Contacts