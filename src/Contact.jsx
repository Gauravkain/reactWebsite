import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        msg: ""
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })

    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My email is ${data.email} and my name is ${data.name} and my phone number is ${data.phone}. Here is what i want to say ${data.msg}`)
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US </h1>
            </div>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email Address</label>
                                <input type="email" class="form-control" name="email" value={data.email} onChange={InputEvent} placeholder="name@email.com" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="text" class="form-control" name="name" value={data.name} onChange={InputEvent} placeholder="Enter your Name" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter 10 digit mobile number " id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>


                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea type="text" class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                            </div>

                            
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;