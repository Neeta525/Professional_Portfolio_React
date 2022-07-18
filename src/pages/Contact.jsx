import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <div>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="main-heading">Contact Me</h1>
                <div className="underline mx-auto">
                  <p>
                    This section is so you can contact. Blah Blah Blah
                  </p>        
                  {/* <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Thank you for your interest.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Contact