import { createContext, useContext, useState } from "react"

const StudentContext = createContext();
export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([
        {
            id: "S001",
            firstName: "Alice",
            lastName: "Johnson",
            dob: "2008-04-15",
            gender: "Female",
            email: "alice.johnson@gmail.com",
            grade: "Grade 10",
            enrolledYear: 2024,
            address: "New York",
            gpa: 3.8,
            attendance: 94,
            status: "Active",
        },
        {
            id: "S002",
            firstName: "Bob",
            lastName: "Smith",
            dob: "2007-08-20",
            gender: "Male",
            email: "bob.smith@gmail.com",
            grade: "Grade 11",
            enrolledYear: 2023,
            address: "California",
            gpa: 3.5,
            attendance: 88,
            status: "Active",
        },
        {
            id: "S003",
            firstName: "Clara",
            lastName: "Lee",
            dob: "2008-01-10",
            gender: "Female",
            email: "clara.lee@gmail.com",
            grade: "Grade 12",
            enrolledYear: 2022,
            address: "Texas",
            gpa: 3.9,
            attendance: 96,
            status: "Active",
        },
        {
            id: "S004",
            firstName: "David",
            lastName: "Wilson",
            dob: "2007-11-05",
            gender: "Male",
            email: "david.wilson@gmail.com",
            grade: "Grade 10",
            enrolledYear: 2024,
            address: "Florida",
            gpa: 3.2,
            attendance: 82,
            status: "On Leave",
        },
        {
            id: "S005",
            firstName: "Eva",
            lastName: "Patel",
            dob: "2008-03-12",
            gender: "Female",
            email: "eva.patel@gmail.com",
            grade: "Grade 11",
            enrolledYear: 2023,
            address: "Chicago",
            gpa: 4.0,
            attendance: 98,
            status: "Active",
        },
        {
            id: "S006",
            firstName: "Frank",
            lastName: "Brown",
            dob: "2007-06-18",
            gender: "Male",
            email: "frank.brown@gmail.com",
            grade: "Grade 12",
            enrolledYear: 2022,
            address: "Seattle",
            gpa: 3.4,
            attendance: 80,
            status: "Active",
        },
        {
            id: "S007",
            firstName: "Grace",
            lastName: "Chen",
            dob: "2008-09-25",
            gender: "Female",
            email: "grace.chen@gmail.com",
            grade: "Grade 10",
            enrolledYear: 2024,
            address: "Boston",
            gpa: 3.6,
            attendance: 90,
            status: "Active",
        },
        {
            id: "S008",
            firstName: "Henry",
            lastName: "Miller",
            dob: "2007-02-28",
            gender: "Male",
            email: "henry.miller@gmail.com",
            grade: "Grade 11",
            enrolledYear: 2023,
            address: "Denver",
            gpa: 3.1,
            attendance: 76,
            status: "On Leave",
        },
        {
            id: "S009",
            firstName: "Iris",
            lastName: "Taylor",
            dob: "2008-12-01",
            gender: "Female",
            email: "iris.taylor@gmail.com",
            grade: "Grade 12",
            enrolledYear: 2022,
            address: "Phoenix",
            gpa: 3.7,
            attendance: 92,
            status: "Active",
        },
        {
            id: "S010",
            firstName: "James",
            lastName: "Anderson",
            dob: "2007-07-30",
            gender: "Male",
            email: "james.anderson@gmail.com",
            grade: "Grade 10",
            enrolledYear: 2024,
            address: "Atlanta",
            gpa: 3.3,
            attendance: 85,
            status: "Active",
        }
    ]);

    // Add Student
    const addStudent = (student) => {
        const newId = `S${String(students.length + 1).padStart(3, "0")}`;

        setStudents((prev) => [
            ...prev,
            {
                ...student,
                id: newId,
            },
        ]);
    };

    // Update Student
    const updateStudent = (updatedStudent) => {
        setStudents((prev) =>
            prev.map((student) =>
                student.id === updatedStudent.id
                    ? updatedStudent
                    : student
            )
        );
    };

    // Delete Student
    const deleteStudent = (id) => {
        setStudents((prev) =>
            prev.filter((student) => student.id !== id)
        );
    };
    return (
        <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent, }}>
            {children}
        </StudentContext.Provider>
    );
};

export const useStudent = () => useContext(StudentContext);

