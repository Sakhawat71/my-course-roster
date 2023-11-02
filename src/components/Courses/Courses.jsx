// import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    // console.log(courses)

    return (
        <div>
            <h2>{courses.length}</h2>
            {
                courses.map((course, idx) =>
                    <Course key={idx}
                    course={course}
                ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {

};

export default Courses;