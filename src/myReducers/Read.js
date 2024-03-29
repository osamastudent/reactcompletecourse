import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const createApi = "https://65e4aa2f3070132b3b251612.mockapi.io/crud";

export default function Read() {
    const [read, setRead] = useState([]);


    const getData = () => {
        axios.get(createApi).then((response) => {
            setRead(response.data);
        }).catch(() => {
            // alert("failed");
        })
    }

    const handleDelete = (id) => {
        axios.delete(`https://65e4aa2f3070132b3b251612.mockapi.io/crud/${id}`)
            .then(() => {
                getData();
            })
    }

    function setDataToStorage(id, emp_name, emp_desc, emp_age) {
        localStorage.setItem("id", id);
        localStorage.setItem("emp_name", emp_name);
        localStorage.setItem("emp_desc", emp_desc);
        localStorage.setItem("emp_age", emp_age);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Link to="/create" >
                <Button variant='success ml-2'>Create Data</Button>
            </Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>Id</th>
                    <th>Employee Name</th>
                    <th>Employee Address</th>
                    <th>Employee Age</th>
                    <th>Actios</th>
                </thead>
                <tbody>
                    {read ? read.map(data => {
                        const { id, emp_name, emp_desc, emp_age } = data;
                        return (
                            <tr>
                                <td>{id}</td>
                                <td>{emp_name}</td>
                                <td>{emp_desc}</td>
                                <td>{emp_age}</td>
                                <td>
                                    <Button onClick={() => {
                                        if (window.confirm("Do You Want To Delete???")) {
                                            handleDelete(id)
                                        };
                                    }} variant='success ml-2'>Delete</Button>


                                    <Link to="/update">
                                        <Button onClick={() => setDataToStorage(id, emp_name, emp_desc, emp_age)} variant='success ml-2'>Update</Button>
                                    </Link>                                </td>
                            </tr>
                            // <tr>
                            //     <td>{data.id}</td>
                            //     <td>{data.emp_name}</td>
                            //     <td>{data.emp_desc}</td>
                            //     <td>{data.emp_age}</td>
                            //     <td>
                            //         <Link to="/delete" >
                            //             <Button variant='success ml-2'>Delete</Button>
                            //         </Link>
                            //         <Link to="/update" >
                            //             <Button variant='success ml-2'>Update</Button>
                            //         </Link>
                            //     </td>
                            // </tr>
                        )
                    }) : null}
                </tbody>
            </table>
        </div>
    )
}
