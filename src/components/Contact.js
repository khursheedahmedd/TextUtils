import React from 'react';
import './Contact.css'; // Import your CSS file for styling


function Contacts(props) {
    return (
        <>
            {/* <h1 style={{ marginTop: "0rem", marginRight: "35rem", marginLeft: "39rem", color: "purple" }}><b>Contact Me</b></h1> */}
            {/* <div style={{ marginLeft: "37" }}>
                <p style={{ color: "purple" }}><b>Feel free to connect with me through the following channels</b></p>
            </div> */}

            <ul className="list-unstyled contacts-list my-7 " style={{ marginTop: "40px" }}>
                {/* <li >
                    <a href="mailto: khursheed6577@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="Gmail-Logo-PNG.jpg"
                            alt="Email Logo"
                            className="contact-logo " style={{ marginLeft: "0rem", marginTop: "2.5rem", blockSize: "4rem", width: "4rem" }}
                        />

                    </a>
                </li> */}
                {/* <li>
                    <span className="contact-icon">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdav4Uw_kehgoByAZdLP4S4NoI-LL_o-VStQ&usqp=CAU"
                            alt="Phone Logo"
                            className="contact-logo" style={{ marginLeft: "1.5rem", marginTop: "3rem" }}
                        />
                        <p><b>+923417122946</b></p>
                    </span>
                </li> */}
                <li>
                    <a href="https://github.com/Pro-Programmer38" target="_blank" rel="noopener noreferrer">
                        <img
                            className="contact-logo" style={{ marginLeft: "2rem", marginTop: "3rem", blockSize: "5rem", width: "5rem" }}
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="GitHub Logo"
                        />

                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/khursheed-ahmed-8073b0233/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                            alt='linkedin logo'
                            className="contact-logo" style={{ marginLeft: "2rem", marginTop: "3rem", blockSize: "5rem", width: "5rem" }}
                        />

                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/the_proprogrammer/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/023/986/555/original/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png"
                            alt="Instagram Logo"
                            className="contact-logo" style={{ marginLeft: "2.2rem", marginTop: "3rem", blockSize: "5.5rem", width: "5.5rem" }}
                        />

                    </a>
                </li>
            </ul>
        </>
    );
}

export default Contacts;