import React from "react";
import { deleteStudent } from "../services/api";

export default function StudentList({
  students,
  currentStudent,
  setCurrentStudent,
  fetchStudents,
}) {
  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        paddingLeft: "0px",
        gap: "20px",
      }}
    >
      {students.map((student) => (
        <li
          key={student.id}
          style={{
            backgroundColor:
              currentStudent && student.id === currentStudent.id
                ? "#fcef8b"
                : "#eeeeee",
            color: "black",
            fontSize: "20px",
            fontWeight: "500",
            fontFamily: "Verdana",
            borderRadius: "10px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              padding: "20px",
            }}
          >
            {student.name} {student.surname} (Age:{student.age}, Score:
            {student.score})
          </span>
          <div
            style={{
              padding: "20px",
            }}
          >
            <button
              style={{
                fontSize: "20px",
                borderRadius: "10px",
                border: "none",
                padding: "8px 20px",
                margin: "10px",
                fontWeight: "500",
                fontFamily: "Verdana",
                background: "gold",
                color: "white",
              }}
              onClick={() => setCurrentStudent(student)}
            >
              Edit
            </button>
            <button
              style={{
                fontSize: "20px",
                borderRadius: "10px",
                border: "none",
                padding: "8px 20px",
                margin: "10px",
                fontWeight: "500",
                fontFamily: "Verdana",
                background: "red",
                color: "white",
              }}
              onClick={() => handleDelete(student.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
