import React from "react";
import '../styles/Contact.css';

const ContactUsMapForm = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-form-card">
                    <div className="form-info-wrapper">
                        <div className="form-container">
                            <form>
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        className="form-input"
                                        id="exampleInput90"
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="exampleInput90"
                                    >
                                        Name
                                    </label>
                                </div>
                                <div className="input-wrapper">
                                    <input
                                        type="email"
                                        className="form-input"
                                        id="exampleInput91"
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="exampleInput91"
                                    >
                                        Email address
                                    </label>
                                </div>
                                <div className="input-wrapper">
                                    <textarea
                                        className="form-textarea"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                    ></textarea>
                                    <label
                                        htmlFor="exampleFormControlTextarea1"
                                        className="form-label"
                                    >
                                        Message
                                    </label>
                                </div>
                                <div className="checkbox-wrapper">
                                    <input
                                        className="form-checkbox"
                                        type="checkbox"
                                        value=""
                                        id="exampleCheck96"
                                        defaultChecked
                                    />
                                    <label
                                        className="checkbox-label"
                                        htmlFor="exampleCheck96"
                                    >
                                        Send me a copy of this message
                                    </label>
                                </div>
                                <button
                                    type="button"
                                    className="form-button"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                        <div className="info-container">
                            <div className="info-grid">
                                <div className="info-item">
                                    <div className="info-icon-wrapper">
                                        <div className="info-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                className="icon-svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="info-content">
                                        <p className="info-title">Soporte Tecnico</p>
                                        <p className="info-text">andresmoreno@josedesanmartintabio.edu.co</p>
                                        <p className="info-text">3219855577</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon-wrapper">
                                        <div className="info-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                className="icon-svg-large"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="info-content">
                                        <p className="info-title">Direccion</p>
                                        <p className="info-text">
                                            IED Jose De San Martin <br />
                                            Tabio, Cundinamarca, Colombia
                                        </p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon-wrapper">
                                        <div className="info-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="icon-svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="info-content">
                                        <p className="info-title">Whatsapp</p>
                                        <p className="info-text"> +57 3219855577</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsMapForm;