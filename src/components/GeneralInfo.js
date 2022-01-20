import React, {useState} from 'react'
import '../styles/styles.css';

function GeneralInfo() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const [edit, setEdit] = useState(true);

    const [info, setInfo] = useState([]);

    //edit functions

    function handleFirstNameChange (e) {
        setFormData({...formData,
            firstName: e.target.value
        })
    }

    function handleLastNameChange (e) {
        setFormData({...formData,
            lastName: e.target.value
        })
    }

    function handleEmailChange (e) {
        setFormData({...formData,
            email: e.target.value
        })
    }

    function handlePhoneChange (e) {
        setFormData({...formData,
            phone: e.target.value
        })
    }

    function submitInfo () {
        setInfo({            
            savedFirstName: formData.firstName,
            savedLastName: formData.lastName,
            savedEmail: formData.email,
            savedPhone: formData.phone})
/*         setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }) */
        setEdit(v => !v)
    }

    return (
        <div className='section generalInfoContainer'>
            { info.savedFirstName ? '': <h2>General Information</h2>}
            <h2>{info.savedFirstName} {info.savedLastName}</h2>
            <p>{info.savedEmail}</p>
            <p>{info.savedPhone}</p>
            { edit &&
            <form className='general-info-form'>
                <div className='form-item'>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                            name='firstName' 
                            type='text' 
                            placeholder='Enter first name'
                            value={formData.firstName}
                            onChange={handleFirstNameChange}></input>
                </div>
                <div className='form-item'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input 
                        name='lastName' 
                        type='text' 
                        placeholder='Enter last name'
                        value={formData.lastName}
                        onChange={handleLastNameChange}></input>
                </div>
                <div className='form-item'>
                    <label htmlFor='email'>Email address</label>
                    <input 
                        name='email' 
                        type='email' 
                        placeholder='example@example.com'
                        value={formData.email}
                        onChange={handleEmailChange}></input>
                </div>
                <div className='form-item'>
                    <label htmlFor='phone-number'>Phone number</label>
                    <input 
                        name='phone-number' 
                        type='tel' 
                        placeholder='(555) 555-5555'
                        value={formData.phone}
                        onChange={handlePhoneChange}></input>
                </div>
            </form>}
            { edit && <button onClick={submitInfo}>Save</button>}
            <button onClick = {() => setEdit(v => !v)}>{edit ? 'Close': 'Edit'}</button>
        </div>
    )
}
export default GeneralInfo