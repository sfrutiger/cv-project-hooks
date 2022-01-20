import React, {useState} from 'react'
import uniqid from 'uniqid';
import '../styles/styles.css';

function Education() {
    const [formData, setFormData] = useState({
        id: '',
        school: '',
        major: '',
        degree: '',
        graduationYear: ''
    });

    const [education, setEducation] = useState([
/*         {
        id: '1',
        school: 'Geneseo',
        major: 'physics',
        degree: 'BA',
        graduationYear: '2011'},
        {
        id: '2',
        school: 'USC',
        major: 'physical therapy',
        degree: 'DPT',
        graduationYear: '2018'}, */
    ]);

    const [edit, setEdit] = useState(true);

    function removeSchool (e) {
        const removeId = e.target.name;
        setEducation(education.filter(edu => edu.id !== removeId));
    }

    function handleSchoolChange (e) {
        setFormData({...formData,
            school: e.target.value,
            id: uniqid()
        })
    }

    function handleDegreeChange (e) {
        setFormData({...formData,
            degree: e.target.value,
            id: uniqid()
        })
    }

    function handleMajorChange (e) {
        setFormData({...formData,
            major: e.target.value,
            id: uniqid()
        })
    }

    function handleGradYearChange (e) {
        setFormData({...formData,
            graduationYear: e.target.value,
            id: uniqid()
        })
    }

    function submitEducation () {
        setEducation(education => [...education, formData])
        setFormData({
            id: '',
            school: '',
            major: '',
            degree: '',
            graduationYear: ''
        })
        setEdit(v => !v)
    }

    return (
        <div className ='section eduInfoContainer'>
            <h2>Education</h2>
            <ul>
                {education.map(edu => (
                    <li key={edu.id}>
                        <h2>{edu.school}</h2>
                        <p>{edu.degree}, {edu.major}, {edu.graduationYear}</p>
                        <button name = {edu.id} onClick={removeSchool}>Remove</button>
                    </li>
                ))}
            </ul>
            { edit &&
                <form className='general-info-form'>
                    <div className='form-item'>
                        <label htmlFor='school'>School</label>
                        <input
                             name='school' 
                             type='text' 
                             placeholder='Generic State University'
                             onChange={handleSchoolChange}
                             />
                    </div>
                    <div className='form-item'>
                        <label htmlFor='degree'>Degree</label>
                        <input
                             name='degree' 
                             type='text' 
                             placeholder='Bachelor of Arts, PhD, etc.'
                             onChange={handleDegreeChange}
                             />
                    </div>
                    <div className='form-item'>
                        <label htmlFor='major'>Major</label>
                        <input
                             name='major'
                             type='text' 
                             placeholder='Chemistry, biology, etc.'
                             onChange={handleMajorChange}
                             />
                    </div>
                    <div className='form-item'>
                        <label htmlFor='graduationYear'>Graduation Year</label>
                        <input
                             name='graduationYear' 
                             type='number'
                             min='1900'
                             max='2100'
                             placeholder='YYYY'
                             onChange={handleGradYearChange}
                             />
                    </div>
                </form>}
                {edit && 
                <button onClick = {submitEducation}>Save</button>}
                <button onClick = {() => setEdit(v => !v)}>{edit ? 'Close': 'Edit'}</button>
        </div>
    )
};

export default Education;