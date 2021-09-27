import {useState} from "react";
import './Styling.css';

function LogIn() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!userName || !password){
            alert('Please fill in all required fields')
            return
        }
        console.log(userName, password)
    }


    return (
        <div className='container'>
            <h4>Please enter your username and password</h4>

            <form className='login' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>User Name</label>
                    <input

                        placeholder='User Name'
                        value={userName}
                        onChange={(e)  =>{setUserName(e.target.value)} }>
                    </input>
                </div>

                <div className='form-control'>
                    <label>Password</label>
                    <input
                        placeholder='Password'
                        value={password}
                        onChange={(e)  =>{setPassword(e.target.value)} }
                    />
                </div>

                <input type='submit' value='Log In' className='btn'/>
            </form>
        </div>

    )

}

export default LogIn