import React, { useState } from "react";
import { deleteStudent } from "../services/api";

export default function StudentList({
  students,
  setCurrentStudent,
  fetchStudents,
}) {
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  const handleSelectStudent = (student) => {
    setCurrentStudent(student);
    setSelectedStudentId(student.id);
  };

  return (
    <ul>
      {students.map((student) => (
        <li
          key={student.id}
          style={{
            backgroundColor:
            student.id === selectedStudentId ? "blue" : "transparent",
            color: student.id === selectedStudentId ? "white" : "black",
          }}
        >
          {student.name} {student.surname} (Age:{student.age}, Score:
          {student.score})
          <button onClick={() => handleSelectStudent(student)}>Edit</button>
          <button onClick={() => handleDelete(student.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
