import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'


function LogIn() {
  return (
    
    <div className='login'>
      <h3>Log in to access your Nursery:</h3><br/>
    <Form className='col-4'> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep Me Logged In" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div><br/>
        <p>Forgot your password? <a href='#'>Click here to reset it.</a></p>
      </div>
    </Form>
    </div>
    
  );
}

export default LogIn;
