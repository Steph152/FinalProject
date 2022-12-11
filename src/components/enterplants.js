import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Create() {
    let navigate = useNavigate();
    const [flowerName, setFlowerName] = useState('');
    const [flowerColor, setFlowerColor] = useState('');
    
    
    const postData = () => {
        axios.post(`https://635206dcdfe45bbd55cd44e0.mockapi.io/W12P/flowers`, {
            flowerName,
            flowerColor,
            
        }).then(() => {
            navigate('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Flower Name</label>
                    <input placeholder='Flower Name' onChange={(e) => setFlowerName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Color</label>
                    <input placeholder='Color' onChange={(e) => setFlowerColor(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

