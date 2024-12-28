import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Learning.css';

import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { motion, spring } from 'framer-motion';

import { BiLogoTypescript } from "react-icons/bi";
import { FaJava } from "react-icons/fa";



const feedback = [
  { user: "Frank", comment: "The combination of Java and Spring Boot was just what I needed to take my Java projects to the next level. The course provided real-world examples that I could apply immediately.", star: 5 },
  { user: "Grace", comment: "I had no experience with Spring Boot before, but this course made it so approachable. The projects really helped solidify my understanding.", star: 4 },
  { user: "Hannah", comment: "Great course! Learning Java alongside Spring Boot opened up so many new possibilities for building scalable and efficient web applications.", star: 5 }
];


const initialCourses = [
  { id: 1, name: 'Module 1: Introduction to Java', moduleKey: 'module1', completed: false },
  { id: 2, name: 'Module 2: Object-Oriented Programming in Java', moduleKey: 'module2', completed: false },
  { id: 3, name: 'Module 3: Advanced Java Programming', moduleKey: 'module3', completed: false },
  { id: 4, name: 'Module 4: Building Java Applications', moduleKey: 'module4', completed: false },
  { id: 5, name: 'Module 5: Java Syntax and Conventions', moduleKey: 'module5', completed: false },
  { id: 6, name: 'Module 6: Data Structures in Java', moduleKey: 'module6', completed: false },
  { id: 7, name: 'Module 7: Basic Input and Output', moduleKey: 'module7', completed: false },
  { id: 8, name: 'Module 8: Debugging and Error Handling', moduleKey: 'module8', completed: false },
  { id: 9, name: 'Module 9: Java Development Tools', moduleKey: 'module9', completed: false },
  { id: 10, name: 'Module 10: GUI Development', moduleKey: 'module10', completed: false },
  { id: 11, name: 'Module 11: Collections Framework', moduleKey: 'module11', completed: false },
  { id: 12, name: 'Module 12: Java Streams and Lambdas', moduleKey: 'module12', completed: false },
  { id: 13, name: 'Module 13: Multithreading and Concurrency', moduleKey: 'module13', completed: false },
  { id: 14, name: 'Module 14: Networking in Java', moduleKey: 'module14', completed: false },
  { id: 15, name: 'Module 15: Java Database Connectivity (JDBC)', moduleKey: 'module15', completed: false },
  { id: 16, name: 'Module 16: Java Reflection and Annotations', moduleKey: 'module16', completed: false },
];

const springBootCourses = [
  { id: 17, name: 'Module 17: Introduction to Spring Boot', moduleKey: 'module17', completed: false },
  { id: 18, name: 'Module 18: Setting Up, Annotations & Configuration', moduleKey: 'module18', completed: false },
  { id: 19, name: 'Module 19: Dependency Injection and Spring Context', moduleKey: 'module19', completed: false },
  { id: 20, name: 'Module 20: RESTful APIs with Spring Boot', moduleKey: 'module20', completed: false },
  { id: 21, name: 'Module 21: Spring Boot and Database Integration', moduleKey: 'module21', completed: false },
  { id: 22, name: 'Module 22: Spring Boot Security Basics', moduleKey: 'module22', completed: false },
  { id: 23, name: 'Module 23: Building Microservices', moduleKey: 'module23', completed: false },
  { id: 24, name: 'Module 24: Testing and Debugging', moduleKey: 'module24', completed: false },
  { id: 25, name: 'Module 25: Spring Boot and Thymeleaf', moduleKey: 'module25', completed: false },
  { id: 26, name: 'Module 26: Working with Spring Boot Actuator', moduleKey: 'module26', completed: false },
  { id: 27, name: 'Module 27: Deploying Spring Boot Applications', moduleKey: 'module27', completed: false },
];

const reviewedProjects = [
  { id: 1, name: 'Project 1: Introduction to Java', moduleKey: 'project1', completed: false },
  { id: 2, name: 'Project 2: Object-Oriented Programming in Java', moduleKey: 'project2', completed: false },
  { id: 3, name: 'Project 3: Advanced Java Programming', moduleKey: 'project3', completed: false },
  { id: 4, name: 'Project 4: Building Java Applications', moduleKey: 'project4', completed: false },
  { id: 5, name: 'Project 5: Java Syntax and Conventions', moduleKey: 'project5', completed: false },
];

const reviewedAdvancedProjects = [
  { id: 6, name: 'Project 6: Collections with Inventory', moduleKey: 'project6', completed: false },
  { id: 7, name: 'Project 7: Online Exam System', moduleKey: 'project7', completed: false },
  { id: 8, name: 'Project 8: Online Course Management System', moduleKey: 'project8', completed: false },
  { id: 9, name: 'Project 9: Fitness Tracker Application', moduleKey: 'project9', completed: false },
  { id: 10, name: 'Project 10: Job Portal with Resume Parsing', moduleKey: 'project10', completed: false },
];

const MyLearning = () => {

  const [courses, setCourses] = useState ([]);
  const [springBoot, setSpringBoot] = useState([])
  const [projects, setProjects] = useState ([]);
  const [advancedProjects, setAdvancedProjects] = useState ([]);
  

  // ! JAVA
  useEffect(() => {
    const completedModules = JSON.parse(localStorage.getItem('completedModules'));
    console.log(completedModules);

    const updatedCourses = initialCourses.map(course => ({
      ...course,
      completed: completedModules ? completedModules[course.moduleKey] : false,
    }));

    setCourses(updatedCourses);
    console.log(updatedCourses);
  }, [initialCourses]); 

  // ! SPRING BOOT
  useEffect(() => {
    const completedSpringBoot = JSON.parse(localStorage.getItem('completedSpringBoot'));
    console.log(completedSpringBoot);

    const updatedSpringBoot = springBootCourses.map(course => ({
      ...course,
      completed: completedSpringBoot ? completedSpringBoot[course.moduleKey] : false,
    }));

    setSpringBoot(updatedSpringBoot);
    console.log(updatedSpringBoot);
  }, [springBootCourses]); 


  // ! PROJECTS
  useEffect(() => {
    const completedProjects = JSON.parse(localStorage.getItem('completedProjects'));
    console.log(completedProjects);

    const updatedProjects = reviewedProjects.map(project => ({
      ...project,
      completed: completedProjects ? completedProjects[project.moduleKey] : false,
    }));
    // Set the updated courses in state
    setProjects(updatedProjects);
    console.log(updatedProjects);
  }, [reviewedProjects]);

  // ! ADVANCED PROJECTS
  useEffect(() => {
    const completedAdvancedProjects = JSON.parse(localStorage.getItem('completedAdvancedProjects'));
    console.log(completedAdvancedProjects);

    const updatedAdvancedProjects = reviewedAdvancedProjects.map(project => ({
      ...project,
      completed: completedAdvancedProjects ? completedAdvancedProjects[project.moduleKey] : false,
    }));
    // Set the updated courses in state
    setAdvancedProjects(updatedAdvancedProjects);
    console.log(updatedAdvancedProjects);
  }, [reviewedAdvancedProjects]);

  const resetModules = () => {
    localStorage.setItem('completedModules', JSON.stringify({
      "module1": false,
      "module2": false,
      "module3": false,
      "module4": false,
      "module5": false,
      "module6": false,
      "module7": false,
      "module8": false,
      "module9": false,
      "module10": false,
      "module11": false,
      "module12": false,
      "module13": false,
      "module14": false,
      "module15": false,
      "module16": false,
    }));
    console.log(localStorage.getItem('completedModules'));

    const completedModules = JSON.parse(localStorage.getItem('completedModules'));
    console.log(completedModules);

    // If completedModules exists, map over initialCourses and update the completed status
    const updatedCourses = initialCourses.map(course => ({
      ...course,
      completed: completedModules ? completedModules[course.moduleKey] : false,
    }));

    // Set the updated courses in state
    setCourses(updatedCourses);
    console.log(updatedCourses);
  }
  const resetSpringBoot = () => {
    localStorage.setItem('completedSpringBoot', JSON.stringify({
      "module17": false,
      "module18": false,
      "module19": false,
      "module20": false,
      "module21": false,
      "module22": false,
      "module23": false,
      "module24": false,
      "module25": false,
      "module26": false,
      "module27": false,
    }));
    console.log(localStorage.getItem('completedSpringBoot'));

    const completedSpringBoot = JSON.parse(localStorage.getItem('completedSpringBoot'));
    console.log(completedSpringBoot);

    // If completedModules exists, map over SpringBoot and update the completed status
    const updatedSpringBoot = springBootCourses.map(course => ({
      ...course,
      completed: completedSpringBoot ? completedSpringBoot[course.moduleKey] : false,
    }));

    // Set the updated SpringBoot in state
    setSpringBoot(updatedSpringBoot);
    console.log(updatedSpringBoot);
  }

  const resetProjects = () => {
    localStorage.setItem('completedProjects', JSON.stringify({
      "project1": false,
      "project2": false,
      "project3": false,
      "project4": false,
      "project5": false,
    }));
    console.log(localStorage.getItem('completedProjects'));

    const completedProjects = JSON.parse(localStorage.getItem('completedProjects'));
    console.log(completedProjects);

    // If completedModules exists, map over initialCourses and update the completed status
    const updatedProjects = reviewedProjects.map(project => ({
      ...project,
      completed: completedProjects ? completedProjects[project.moduleKey] : false,
    }));

    // Set the updated courses in state
    setProjects(updatedProjects);
    console.log(updatedProjects);
  }
  const resetAdvancedProjects = () => {
    localStorage.setItem('completedAdvancedProjects', JSON.stringify({
      "project6": false,
      "project7": false,
      "project8": false,
      "project9": false,
      "project10": false,
    }));
    console.log(localStorage.getItem('completedAdvancedProjects'));

    const completedAdvancedProjects = JSON.parse(localStorage.getItem('completedAdvancedProjects'));
    console.log(completedAdvancedProjects);

    // If completedModules exists, map over initialCourses and update the completed status
    const updatedAdvancedProjects = reviewedAdvancedProjects.map(project => ({
      ...project,
      completed: completedAdvancedProjects ? completedAdvancedProjects[project.moduleKey] : false,
    }));

    // Set the updated courses in state
    setAdvancedProjects(updatedAdvancedProjects);
    console.log(updatedAdvancedProjects);
  }
  

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }


 
  return (
    <div className="my-learning">
       <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My <span>Learning Progress</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Track your learning journey and explore new resources to enhance your skills.
      </motion.p>

      <motion.section 
        className="course-overview" 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2>Your <span>Courses</span></h2>
        <h3><FaJava />Java</h3>
        <div className="course-list">
          {courses.map(course => (
            <div key={course.id} className={course.completed ? "course-card completed" : "course-card"}>
              <h3>{course.name}</h3>
              {course.completed ? <FaCircleCheck className='blue' /> : <FaRegCircle />}
            </div>
          ))}
        </div>
        <button onClick={resetModules} className="cta">Reset modules</button>
        <br />
        <br />
        <br />
        <h3><FaJava />SpringBoot</h3>
        <div className="course-list">
          {springBoot.map(course => (
            <div key={course.id} className={course.completed ? "course-card completed" : "course-card"}>
              <h3>{course.name}</h3>
              {course.completed ? <FaCircleCheck className='blue' /> : <FaRegCircle />}
            </div>
          ))}
        </div>
        <button onClick={resetSpringBoot} className="cta">Reset modules</button>
        <br />
        <br />
        <br />
        <h2>Reviewed <span>Practise</span></h2>
        <h3><FaJava />Easy Projects</h3>
        <div className="course-list">
          {projects.map(project => (
            <div key={project.id} className={project.completed ? "course-card completed" : "course-card"}>
              <h3>{project.name}</h3>
              {project.completed ? <FaCircleCheck className='blue' /> : <FaRegCircle />}
            </div>
          ))}
        </div>
        <button onClick={resetProjects} className="cta">Reset projects</button>
        <br />
        <br />
        <br />
        <h3><FaJava />Advanced Projects</h3>
        <div className="course-list">
          {advancedProjects.map(project => (
            <div key={project.id} className={project.completed ? "course-card completed" : "course-card"}>
              <h3>{project.name}</h3>
              {project.completed ? <FaCircleCheck className='blue' /> : <FaRegCircle />}
            </div>
          ))}
        </div>
        <button onClick={resetAdvancedProjects} className="cta">Reset projects</button>
      </motion.section>

      
      <section className="feedback">
        <h2>User <span>Feedback</span></h2>
        <div className="feedback-list">
          {feedback.map((item, index) => (
            <div key={index} className="feedback-card">
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => 
                  i < item.star ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
              </div>
              <p><strong>{item.user}</strong>: <br /> {item.comment}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Ready to enhance your skills?</h2>
        <div className="btn-container">
          <Link to="/typescript/" onClick={scrollToTop} className="cta-btn">Learn more</Link>
          <Link to="/join/" onClick={scrollToTop} className="cta-secondary">Join Us</Link>
        </div>
      </section>
    </div>
  );
};

export default MyLearning;
