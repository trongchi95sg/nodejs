var storage = require('node-persist');

storage.initSync({
    dir: "student"
});

function getAllStudents() {
    let students = storage.getItemSync('students');
    
    if (typeof students == "undefined"){
        return[];
    }

    return students;
}

function getStudent(studentId)
{
    let students = getAllStudents();

    let matchedStudent = null;

    for (let i = 0; i < students.length; i++){
        if (students[id] == studentId){
            students.splice(i, 1);
        }
    }

    storage.setItemSync('students', students);
}

function addStudent(id, fullname)
{
    let students = getAllStudents();

    students.push({
        id : id,
        fullname : fullname
    });

    storage.setItemSync('students', students);
}

function editStudent(studentId, studentName) {

    let students = getAllStudents();
    
    for (let i  = 0; i < students.length; i++){
        if (students[i].id == studentId){
            students[i].fullName == studentName;
        }
    }

    storage.setItemSync('students', students);
}

function showStudents() {
    let students = getAllStudents();
    students.forEach(students => {
        console.log('Student: ' + students.fullname + ' (' + students.id + ')');
    });
}


// Thêm sinh viên
addStudent(1, 'Cuong');
addStudent(2, 'Kinh');
addStudent(4, 'Quyen');
editStudent(4, 'Kinh');

// Hiển thị danh sách sinh viên
showStudents();