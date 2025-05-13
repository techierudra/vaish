
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Title from '../components/Title';


function FAQ() {
    
    const [activeIndex, setActiveIndex] = useState(null);

    const handleCollapse = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const faqData = [
        {
            question: "Question 1: What is the purpose of E-Crime Report Hub?",
            answer: "The purpose of E-Crime Report Hub is to provide an online platform for filing FIR (First Information Report) for various types of crimes. It aims to make the process of reporting crimes and managing cases more efficient and accessible."
        },
        {
            question: "Question 2: How does E-Crime Report Hub facilitate online FIR filing?",
            answer: "E-Crime Report Hub offers a user-friendly interface for filing FIRs online. It provides a quick and convenient way for individuals to report crimes without having to visit a police station."
        },
        {
            question: "Question 3: What types of crimes can be reported on E-Crime Report Hub?",
            answer: "E-Crime Report Hub allows users to report crimes such as theft, assault, fraud, drug-related crimes, vandalism, and more. It ensures that the relevant authorities are informed and can take appropriate action."
        },
        {
            question: "Question 4: How can users check the status of their filed FIR?",
            answer: "Users can check the status of their filed FIR by logging into their account on E-Crime Report Hub. The platform provides updates on the progress of their case, ensuring transparency and accountability."
        },
        {
            question: "Question 5: Can a filed FIR be edited after submission?",
            answer: "No, once a FIR is submitted on E-Crime Report Hub, it cannot be edited. Users are advised to provide accurate and complete information when filing a report to avoid any discrepancies."
        }
    ];

    return (
        <div
        className="background-image"
        style={{
          backgroundImage: `url(${require('../images/17.jpg')})`,
          backgroundSize: 'cover ',
        backgroundPosition:'center center',
        backgroundAttachment: 'fixed',
        height: '100vh',
        }}
      > 
        <div className="content">
               <Title/>
            <Navbar />
<div className="container"  style={{  color:'white' }}>
            <h2 style={{ color: 'white' , padding: '20px'}}>Frequently Asked Questions (FAQ)</h2>
            <div className="panel-group" id="accordion">
                {faqData.map((item, index) => (
                    <div className="panel panel-default" key={index}>
                        <div className="panel-heading" onClick={() => handleCollapse(index)}>
                            <h4 className="panel-title">
                                <a>
                                    {item.question}
                                </a>
                            </h4>
                        </div>
                        <div className={`panel-collapse ${activeIndex === index ? 'in' : 'collapse'}`}>
                            <div className="panel-body">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            <footer style={{ height:'35px', position: 'fixed', left: '0', bottom: '0', width: '100%', backgroundColor: 'rgba(13, 2, 2, 0.7)', color: 'white', textAlign: 'center', padding: '10px' }}>
        <p>&copy; 2024 E-Crime Report Hub</p>
      </footer>
      </div>
        </div>
    );
}

export default FAQ;


