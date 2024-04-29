import React from 'react';

function List({ employees, handleEdit, handleDelete }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    const calculateSalary = (age, position) => {
        if (position === "Senior") {
            return age * 10 + 50000;
        } else if (position === "Junior") {
            return age * 5 + 50000;
        }
        return 0; // Default value if position is not provided
    };

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Department</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.FirstName}</td>
                                <td>{employee.LastName}</td>
                                <td>{employee.Gender}</td>
                                <td>{employee.Age}</td>
                                <td>{employee.Age > 40 ? "Senior" : "Junior"}</td>
                                <td>{formatter.format(calculateSalary(employee.Age, employee.Age > 40 ? "Senior" : "Junior"))}</td>
                                <td>{employee.Department}</td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={9}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default List;
