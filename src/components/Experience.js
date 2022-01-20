import React, {useState} from 'react'
import uniqid from 'uniqid';
import '../styles/styles.css';

function Experience() {
    const [formData, setFormData] = useState({
        id: '',
        company: '',
        position: '',
        duties: '',
        startDate: '',
        endDate: ''
    });

    const [experience, setExperience] = useState([]);

    const [edit, setEdit] = useState(true);

    //edit functions

    function removeExperience (e) {
        const removeId = e.target.name;
        setExperience(experience.filter(exp => exp.id !== removeId));
    }

    function handleCompanyChange (e) {
        setFormData({...formData,
            company: e.target.value,
            id: uniqid()
        })
    }

    function handlePositionChange (e) {
        setFormData({...formData,
            position: e.target.value,
            id: uniqid()
        })
    }

    function handleDutiesChange (e) {
        setFormData({...formData,
            duties: e.target.value,
            id: uniqid()
        })
    }

    function handleStartDateChange (e) {
        setFormData({...formData,
            startDate: e.target.value,
            id: uniqid()
        })
    }

    function handleEndDateChange (e) {
        setFormData({...formData,
            endDate: e.target.value,
            id: uniqid()
        })
    }

    function submitExperience () {
        setExperience(experience => [...experience, formData])
        setFormData({
            id: '',
            company: '',
            position: '',
            duties: '',
            startDate: '',
            endDate: ''
        })
        setEdit(v => !v)
    }
    
    return (
        <div className ='section ExperienceContainer'>
            <h2>Experience</h2>
            <ul>
                {experience.map(job => (
                    <li key={job.id}>
                        <h2>{job.company}</h2>
                        <p>{job.position}, {job.duties}, {job.startDate} to {job.endDate}</p>
                        <button name = {job.id} onClick={removeExperience}>Remove</button>
                    </li>
                ))}
            </ul>
            { edit &&
            <form className='experience-form'>
                <div className='form-item'>
                    <label htmlFor='company'>Company</label>
                    <input
                            name='company' 
                            type='text' 
                            placeholder='Generic Company, Inc.'
                            onChange={handleCompanyChange}
                            />
                </div>
                <div className='form-item'>
                    <label htmlFor='position'>Position</label>
                    <input
                            name='position' 
                            type='text' 
                            placeholder='laborer, minion, etc.'
                            onChange={handlePositionChange}
                            />
                </div>
                <div className='form-item'>
                    <label htmlFor='duties'>Job duties</label>
                    <input
                            name='duties' 
                            type='text' 
                            placeholder='Cleaning, cooking, etc.'
                            onChange={handleDutiesChange}
                            />
                </div>
                <div className='form-item'>
                    <label htmlFor='startDate'>Start Date</label>
                    <input
                            name='startDate' 
                            type='date'
                            onChange={handleStartDateChange}
                            />
                </div>
                <div className='form-item'>
                    <label htmlFor='endDate'>End Date</label>
                    <input
                            name='endDate' 
                            type='date'
                            onChange={handleEndDateChange}
                            />
                </div>
            </form>}
            { edit && <button onClick={submitExperience}>Save</button>}
            <button onClick = {() => setEdit(v => !v)}>{edit ? 'Close': 'Edit'}</button>
        </div>
    )
}

export default Experience;