import React from 'react'
import "./Course.css"
import { courseData } from '../../constants/data'
import CourseContent from '../CourseContent/CourseContent'
import java from '../../assets/Logos/java.svg'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const Course = () => {

    function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', 
    });
    }

  return (
     <div className='course'>

        <motion.img 
            src={java} 
            alt="" 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        />


        <motion.div           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            {/* <CourseContent courseData={courseData.preview} /> */}
            
            <div className="course-content">
                <h1><span>Master Java:</span> A Comprehensive Guide for Developers</h1>
                <h2>Course Overview</h2>
                <p>This course is designed for developers who want to master Java. You will explore the fundamentals of Java, dive into advanced concepts, and learn how to build robust applications using Java. The course will cover how to leverage Java's features in real-world applications, and best practices for Java development.</p>
                <h2>Prerequisites</h2>
                <p>Basic to intermediate knowledge of programming concepts.</p>
                <p>Familiarity with object-oriented programming principles.</p>
                </div>
            <div className='module-container'>
                <Link to="/Java/module1/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 1:</strong> Introduction to Java</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/module2/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 2:</strong> Java Syntax and Conventions</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/module3/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 3:</strong> Object-Oriented Programming in Java</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/module4/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 4:</strong> Data Structures in Java</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/module5/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 5:</strong> Basic Input and Output</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/module6/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 6:</strong> Debugging and Error Handling</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/module7/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 7:</strong> Advanced Java Programming</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/module8/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 8:</strong> Collections Framework</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/module9/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 9:</strong> Java Streams and Lambdas</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/module10/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 10:</strong> GUI Development</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/module11/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 11:</strong> Multithreading and Concurrency</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/module12/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 12:</strong> Networking in Java</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/module13/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 13:</strong> Java Database Connectivity (JDBC)</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/module14/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 14:</strong> Java Reflection and Annotations</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/module15/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 15:</strong>  Building Java Applications</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/module16/" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 16:</strong> Java Development Tools</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                
            </div>
        </motion.div>
        
        <div className="SpringBoot">
            <h1>Get a job with Java: <span>Spring Boot</span></h1>
            <p>Learn how to build and deploy Spring Boot applications with ease.</p>
            <br />
            <div className="module-container">
                <Link to="/Java/SpringBoot/module17" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 17:</strong> Introduction to Spring Boot</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/SpringBoot/module18" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 18:</strong> Set Up, Annotations & Configuration</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/SpringBoot/module19" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 19:</strong> Set Up, Annotations & Configuration</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/SpringBoot/module20" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 20:</strong> Creating RESTful APIs with Spring Boot</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/SpringBoot/module21" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 21:</strong> Set Up, Annotations & Configuration</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/SpringBoot/module22" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 22:</strong> Set Up, Annotations & Configuration</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/SpringBoot/module23" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 23:</strong> Set Up, Annotations & Configuration</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/SpringBoot/module24" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 24:</strong> Set Up, Annotations & Configuration</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/SpringBoot/module25" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 25:</strong> Set Up, Annotations & Configuration</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/SpringBoot/module26" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 26:</strong> Set Up, Annotations & Configuration</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
                <Link to="/Java/SpringBoot/module27" onClick={scrollToTop}>
                    <div className='module-link'>
                        <p><strong>Module 27:</strong> Set Up, Annotations & Configuration</p>
                        <p>Start now <FaArrowRight /></p>
                    </div>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Course