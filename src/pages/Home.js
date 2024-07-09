import React, { useEffect, useState } from "react";
import { getStudents } from "../services/api";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

export default function Home() {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "70%",
        margin: "auto",
      }}
    >
      <h1
        style={{
          alignSelf: "start",
          fontSize: "40px",
        }}
      >
        Student App
      </h1>
      <StudentForm
        currentStudent={currentStudent}
        setCurrentStudent={setCurrentStudent}
        fetchStudents={fetchStudents}
      ></StudentForm>

      <StudentList
        students={students}
        currentStudent={currentStudent}
        setCurrentStudent={setCurrentStudent}
        fetchStudents={fetchStudents}
      ></StudentList>
    </div>
  );
}
