import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import '../styles/Pages.css'

const Contact = () => {
const {
  register,
  handleSubmit,
  reset,
  formState: { errors }
} = useForm();

 const onSubmit = async (data) => {
   const { name, email, subject, message} = data;

   console.log("Name: ", name);
   console.log("Email: ", email);
   console.log("Subject: ", subject);
   console.log("Message: ", message);
 };

  return (
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="main-heading">Contact Me</h1>
              <div className="underline mx-auto">
              <div className="contactForm">
                <form id="contactForm" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="row formRow">
                    <div className="col-md-6">
                      <input
                      type="text"
                      name="name"
                      {...register("name", {
                        required: { value: true, message: "You don't have name?" },
                        maxlength: {
                          value: 25,
                          message: "Please use 25 charaters or less"
                        }
                      })}
                      className="form-control formInput"
                      placeholder="Name"></input>
                      {errors.name && <span className="errorMessage">{errors.name.message}</span>}
                    </div>
                    <div className="col-md-6">
                      <input
                      type="email"
                      name="email"
                      {...register("email", {
                        required:true,
                        pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                      })}
                      className="form-control formInput"
                      placeholder="Email Address"></input>
                      {errors.email && (
                        <span className="errorMessage">Really? How about you put a real email.</span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col">
                      <input
                      type="text"
                      name="subject"
                      {...register("subject", {
                        required: { value:true, message: "Don't forget a subject!"},
                        maxlength: {
                          value:20,
                          message: "Keep the subject under 20 characters homeslice"
                        }
                      })}
                      className="form-control formInput"
                      placeholder="Subject"></input>
                      {errors.subject && (
                        <span className="errorMessage">{errors.subject.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col">
                      <textarea
                      rows={3}
                      name="message"
                      {...register("message", {
                        required: true
                      })}
                      className="form-control formInput"
                      placeholder="Let's Connect!"></textarea>
                      {errors.message && <span className="errorMessage">What would be the point of sending an empty email? Add a message!</span>}
                    </div>
                  </div>
                  <button className="submit-btn" type="submit">Submit</button>
                  </form> 
              </div>
              </div>
            </div>
          </div>
        </div>


  );
}

export default Contact