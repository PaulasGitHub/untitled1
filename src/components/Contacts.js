import React, {useState, useEffect} from "react";
//import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";
import {FaEdit} from 'react-icons/fa'
import {Link} from "react-router-dom";
import Geocode from "react-geocode";

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


function filterMyContacts(){
    console.log('private contacts')
}

function filterAllContacts(){
    console.log('all contacts')
}

function Contacts({setEditContact}) {
    const [contacts, setContacts] = useState([{
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

    }])

    useEffect(() => {
        fetch('/contacts').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setContacts(jsonRes))
    })

    /*    //Map
        function Map() {
            return (
                <GoogleMap defaultZoom={10} defaultCenter={{lat: 52.520008, lng: 13.404954}}/>
            )
        }

        const WrappedMap = withScriptjs(withGoogleMap(Map))*/

    return (
        <div className='container'>
            {/* <div style={{width: "100vw", height: "100vh"}}>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAw-dW7unnfVPQJ0_xVGUC40cXxJPlrpuM`}
                    loadingElement={<div style={{height: "100%"}}/>}
                    containerElement={<div style={{height: "100%"}}/>}
                    mapElement={<div style={{height: "100%"}}/>}
                />
            </div>*/}

            <LoadScript
                googleMapsApiKey="AIzaSyAw-dW7unnfVPQJ0_xVGUC40cXxJPlrpuM"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    <Marker position={position}/>
                </GoogleMap>
            </LoadScript>

            {contacts.map(contact =>
                <div>
                    <h4>{contact.firstName} {contact.lastName} {}
                        <Link to='/editContact'  onClick ={() => setEditContact(contact)} >
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

{/*            <div>
                {contacts.filter(contact => contact.owner.includes('admina')).map(filteredContact => (

                    <div>
                        <h4>{filteredContact.firstName} {filteredContact.lastName} {}
                            <Link to='/editContact'  onClick ={() => setEditContact(filteredContact)} >
                                <FaEdit
                                    style={{color: 'black', cursor: 'pointer'}}
                                />
                            </Link>
                        </h4>
                    </div>
                ))}
            </div>*/}

        </div>
    )
}

export default Contacts