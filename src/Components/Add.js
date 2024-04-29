import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');
    const [department, setDepartment] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, []);

    const handleAdd = e => {
        e.preventDefault();

        // Validation
        if (!id || !firstName || !lastName || !gender || !age || !salary || !department) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }
        if (isNaN(parseInt(age)) || parseInt(age) <= 0) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Please enter a valid age.',
                showConfirmButton: true
            });
        }
        if (isNaN(parseFloat(salary)) || parseFloat(salary) <= 0) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Please enter a valid salary.',
                showConfirmButton: true
            });
        }

        // Convert age and salary to numbers
        const parsedAge = parseInt(age);
        const parsedSalary = parseFloat(salary);

        // Add new employee
        const newEmployee = {
            id,
            firstName,
            lastName,
            gender,
            age: parsedAge,
            salary: parsedSalary,
            department
        };

        setEmployees([...employees, newEmployee]);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been added.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label htmlFor="id">ID</label>
                <input
                    id="id"
                    type="text"
                    ref={textInput}
                    name="id"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="gender">Gender</label>
                <input
                    id="gender"
                    type="text"
                    name="gender"
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                    name="age"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                />
                <label htmlFor="salary">Salary ($)</label>
                <input
                    id="salary"
                    type="number"
                    name="salary"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />
                <label htmlFor="department">Department</label>
                <input
                    id="department"
                    type="text"
                    name="department"
                    value={department}
                    onChange={e => setDepartment(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add;
