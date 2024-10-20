import React from 'react'

//components
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

//pages
import Home from './pages/Home/Home.jsx';
import Course from './pages/Course/Course.jsx';
import { courseData } from './constants/data'
import CourseContent from './pages/CourseContent/CourseContent.jsx';
import Learning from './pages/Learning/Learning.jsx';
import Join from './pages/Join/Join.jsx';
import Practise from './pages/Practise/Practise.jsx';

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path="/Java/" element={<Course />} />
        <Route path="/Java/module1" element={<CourseContent courseData={courseData.module1} module={"module1"} />} />
        <Route path="/Java/module2" element={<CourseContent courseData={courseData.module2} module={"module2"} />} />
        <Route path="/Java/module3" element={<CourseContent courseData={courseData.module3} module={"module3"} />} />
        <Route path="/Java/module4" element={<CourseContent courseData={courseData.module4} module={"module4"} />} />
        <Route path="/Java/module5" element={<CourseContent courseData={courseData.module5} module={"module5"} />} />
        <Route path="/Java/module6" element={<CourseContent courseData={courseData.module6} module={"module6"} />} />
        <Route path="/Java/module7" element={<CourseContent courseData={courseData.module7} module={"module7"} />} />
        <Route path="/Java/module8" element={<CourseContent courseData={courseData.module8} module={"module8"} />} />
        <Route path="/Java/module9" element={<CourseContent courseData={courseData.module9} module={"module9"} />} />
        <Route path="/Java/module10" element={<CourseContent courseData={courseData.module10} module={"module10"} />} />
        <Route path="/Java/module11" element={<CourseContent courseData={courseData.module11} module={"module11"} />} />
        <Route path="/Java/module12" element={<CourseContent courseData={courseData.module12} module={"module12"} />} />
        <Route path="/Java/module13" element={<CourseContent courseData={courseData.module13} module={"module13"} />} />
        <Route path="/Java/module14" element={<CourseContent courseData={courseData.module14} module={"module14"} />} />
        <Route path="/Java/module15" element={<CourseContent courseData={courseData.module15} module={"module15"} />} />
        <Route path="/Java/module16" element={<CourseContent courseData={courseData.module16} module={"module16"} />} />

        <Route path="/practise/" element={<Practise />} />
        <Route path="/practise/project1" element={<CourseContent courseData={courseData.project1} module={"project1"} />} />
        <Route path="/practise/project2" element={<CourseContent courseData={courseData.project2} module={"project2"} />} />
        <Route path="/practise/project3" element={<CourseContent courseData={courseData.project3} module={"project3"} />} />
        <Route path="/practise/project4" element={<CourseContent courseData={courseData.project4} module={"project4"} />} />
        <Route path="/practise/project5" element={<CourseContent courseData={courseData.project5} module={"project5"} />} />
        <Route path="/practise/project6" element={<CourseContent courseData={courseData.project6} module={"project6"} />} />
        <Route path="/practise/project7" element={<CourseContent courseData={courseData.project7} module={"project7"} />} />
        <Route path="/practise/project8" element={<CourseContent courseData={courseData.project8} module={"project8"} />} />
        <Route path="/practise/project9" element={<CourseContent courseData={courseData.project9} module={"project9"} />} />
        <Route path="/practise/project10" element={<CourseContent courseData={courseData.project10} module={"project10"} />} />
        <Route path="/learning/" element={<Learning />} />
        
        <Route path="/join/" element={<Join />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
