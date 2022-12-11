import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://635206dcdfe45bbd55cd44e0.mockapi.io/W12P/flowers`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, flowerName, flowerColor } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Flower Name', flowerName);
        localStorage.setItem('Flower Color', flowerColor);
        
    }

    const getData = () => {
        axios.get(`https://635206dcdfe45bbd55cd44e0.mockapi.io/W12P/flowers`)
            .then((getData) => {
                setAPIData(getData.data);
            })
            .catch(error => alert(error.message));
    }

    const onDelete = (id) => {
        axios.delete(`https://635206dcdfe45bbd55cd44e0.mockapi.io/W12P/flowers${id}`)
        .then(() => {
            getData();
        })
        .catch(error => alert(error.message));
    }

  /*  const onDelete = async (id) => {
        try {
          const data = await axios.delete(`https://635206dcdfe45bbd55cd44e0.mockapi.io/W12P/flowers${id}`)
          console.log('Item successfully deleted.')
        } catch (error) {
          alert(error)
        }
      }  */

/*
class onDelete extends Component {
    async deletePost(post) {
        if (window.confirm(`Are you sure you want to delete "${post.title}"`)) {
          await this.fetch('delete', `/posts/${post.id}`);
          await this.getPosts();
        }
}}*/
/*
    useEffect(() => {
        // DELETE request using axios with async/await
        async function deleteFlower() {
            await axios.delete('https://635206dcdfe45bbd55cd44e0.mockapi.io/W12P/flowers');
            setStatus('Delete successful');
        }
    
        deleteFlower();
    }, []);
*/
/*
    const onDelete = async () => {
	    const resp = await axios.delete(
		    `https://635206dcdfe45bbd55cd44e0.mockapi.io/W12P/flowers`
	);
};
*/
    /*const onDelete = (id) => {
        axios.delete(`https://635206dcdfe45bbd55cd44e0.mockapi.io/W12P/flowers${id}`)
        .then(() => {
            getData();
        })
    }*/

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Flower Name</Table.HeaderCell>
                        <Table.HeaderCell>Flower Color</Table.HeaderCell>
    
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                   {/* {data.map(data) => (
                        
                             <tr>
                                <td rowspan={data.flowerName.length + 1}>{data.name}</td>
                                <td rowspan={data.flowerColor.length + 1}>{data.color}</td>
                             </tr>
                    {method.pagesName.map(page => (
                            <tr>
                                <td>{data.flowerName}</td>
                                <td>{data.flowerColor}</td>
                            </tr>
                             ))}

                    */}
                    {APIData.map((data) => {
                        console.log(data.flowerName);
                        return (
                            <Table.Row>
                                
                                <Table.Cell>{data.flowerName}</Table.Cell>
                                <Table.Cell>{data.flowerColor}</Table.Cell>
                                
                                <Link to='/update'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

