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



    return (
        <div className="grid mx-auto md:gap-3 md:grid-cols-2 lg:grid-cols-3 w-9/12">
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