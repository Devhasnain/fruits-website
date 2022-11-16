import React from 'react'

const ContactForm = () => {
    return (
        <section className="contact_section layout_padding">
            <div className="container">
                <h2 className="font-weight-bold">
                    Contact Us
                </h2>
                <div className="row">
                    <div className="col-md-8 mr-auto">
                        <form>
                            <div className="contact_form-container">
                                <div>
                                    <div>
                                        <input type="text" placeholder="Name"  required  />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Phone Number"  required  />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" required   />
                                    </div>

                                    <div className="mt-5">
                                        <input type="text" placeholder="Message"  required  />
                                    </div>
                                    <div className="mt-5">
                                        <button type="submit">
                                            send
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
