let numClasses = 0;

window.onload = function initialize() {
    for (let i = 0; i < 4; i++) {
        addClass();
    }
}

function calcGPA() {
    let grades = document.getElementsByClassName("grade");
    let gpa = 0;
    let num = 0;
    let noInput = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].value != "-1.0") {
            let grade = Number(grades[i].value);
            gpa += grade;
            num++;
        }
        else {
            noInput++;
        }
    }
    console.log(gpa);
    if (noInput != numClasses) {
        gpa /= num;
        gpa = gpa.toFixed("3");
        document.getElementById("gpa").innerHTML = `Your GPA is <strong>${gpa}</strong>`;
    }
    else {
        document.getElementById("gpa").innerHTML = `Your GPA is <strong>Error. Please input a Grade.</strong>`;
    }
}

function addClass() {
    numClasses++;
    let lastClass = document.getElementsByClassName("newClass");

    lastClass[lastClass.length - 1].innerHTML += '<tbody class="newClass"><tr class="classes">' +
        '<td><input class="course" type="text" placeholder="Course Name"></td>' +
        '<td>' +
            '<select class="grade" name="grade">' +
                '<option value="-1.0">--</option>' +
                '<option value="4.0">A+</option>' +
                '<option value="4.0">A</option>' +
                '<option value="3.7">A-</option>' +
                '<option value="3.3">B+</option>' +
                '<option value="3.0">B</option>' +
                '<option value="2.7">B-</option>' +
                '<option value="2.3">C+</option>' +
                '<option value="2.0">C</option>' +
                '<option value="1.7">C-</option>' +
                '<option value="1.3">D+</option>' +
                '<option value="1.0">D</option>' +
                '<option value="0.7">D-</option>' +
                '<option value="0.0">F</option>' +
            '</select>' +
        '</td>'
        '</tr></tbody>';
}

function deleteClass() {
    if (numClasses > 1){
        numClasses--;
        let classes = document.getElementsByClassName("classes");
        console.log(classes);
        classes[classes.length - 1].remove();
        console.log(classes);
    }
}