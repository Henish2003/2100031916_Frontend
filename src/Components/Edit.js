import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {
    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.FirstName);
    const [lastName, setLastName] = useState(selectedEmployee.LastName);
    const [gender, setGender] = useState(selectedEmployee.Gender);
    const [age, setAge] = useState(selectedEmployee.Age);
    const [salary, setSalary] = useState(selectedEmployee.Salary);
    const [department, setDepartment] = useState(selectedEmployee.Department);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !gender || !age || !salary || !department) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const updatedEmployee = {
            id,
            FirstName: firstName,
            LastName: lastName,
            Gender: gender,
            Age: age,
            Salary: salary,
            Department: department
        };

        const updatedEmployees = employees.map(employee => {
            if (employee.id === id) {
                return updatedEmployee;
            }
            return employee;
        });

        setEmployees(updatedEmployees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${updatedEmployee.FirstName} ${updatedEmployee.LastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
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
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit;
