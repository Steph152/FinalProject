import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Update() {
    let navigate = useNavigate();
    const [id, setID] = useState(null);
    const [flowerName, setFlowerName] = useState('');
    const [flowerColor, setFlowerColor] = useState('');
    

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFlowerName(localStorage.getItem('Flower Name'));
        setFlowerColor(localStorage.getItem('Flower Color'));
        
    }, []);

    const updateAPIData = () => {
        axios.put(`https://635206dcdfe45bbd55cd44e0.mockapi.io/W12P/flowers${id}`, {
            flowerName,
            flowerColor,
            
        }).then(() => {
            navigate.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Flower Name</label>
                    <input placeholder='Flower Name' value={flowerName} onChange={(e) => setFlowerName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Flower Color</label>
                    <input placeholder='Flower Color' value={flowerColor} onChange={(e) => setFlowerColor(e.target.value)}/>
                </Form.Field>
            
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}