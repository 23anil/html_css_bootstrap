let loginbtn = document.getElementById("loginbtn");

loginbtn.addEventListener("click", function (event) {
  event.preventDefault();
  let formdata = document.forms["formdata"];

  let username = formdata.username.value;

  let password = formdata.password.value;

  let email = formdata.email.value;

  let age = formdata.age.value;

  let courses = formdata.courses.value;

  let gender = formdata.gender.value;

  let subject1 = document.getElementById("subject1");
  let subject2 = document.getElementById("subject2");
  let subject3 = document.getElementById("subject3");
  let sub1 = subject1.checked;
  let sub2 = subject2.checked;
  let sub3 = subject3.checked;

  let isvalidusername = validateusername(username);
  let isvalidpassword = validatepassword(password);
  let isvalidemail = validateemail(email);
  let isvalidage = validateage(age);
  let isvalidcourses = validatecourses(courses);
  let isvalidgender = validategender(gender);
  let isvalidsubject = validatesubject(sub1, sub2, sub3);

    if(isvalidusername &&isvalidpassword&&isvalidemail&&isvalidage&&isvalidcourses&&isvalidgender&&isvalidsubject){
        alert("form is submited sucessfully!!!")
    }
});
let validateusername = (username) => {
  if (username) {
    if (username.search(/[^a-z" "A-Z]+/) === -1) {
      document.getElementById("emptyusername").style.display = "none";
      document.getElementById("invalidusername").style.display = "none";
      return true;
    } else {
      document.getElementById("emptyusername").style.display = "none";
      document.getElementById("invalidusername").style.display = "block";
      return false;
    }
  } else {
    document.getElementById("emptyusername").style.display = "block";
    document.getElementById("invalidusername").style.display = "none";
  }
};

let validatepassword = (password) => {
  if (password) {
    if (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(password)) {
      document.getElementById("invalidpassword").style.display = "none";
      document.getElementById("emptypassword").style.display = "none";

      return true;
    } else {
      document.getElementById("invalidpassword").style.display = "block";
      document.getElementById("emptypassword").style.display = "none";
      return false;
    }
  } else {
    document.getElementById("emptypassword").style.display = "block";
    document.getElementById("invalidpassword").style.display = "none";
  }
};

let validateemail = (email) => {
  if (email) {
    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      document.getElementById("invalidemail").style.display = "none";
      document.getElementById("emptyemail").style.display = "none";
      return true;
    } else {
      document.getElementById("invalidemail").style.display = "block";
      document.getElementById("emptyemail").style.display = "none";
      return false;
    }
  } else {
    document.getElementById("emptyemail").style.display = "block";
    document.getElementById("invalidemail").style.display = "none";
  }
};

let validateage = (age) => {
  if (age) {
    if (age > 0 && age < 150) {
      document.getElementById("emptyage").style.display = "none";
      document.getElementById("invalideage").style.display = "none";
      return true;
    } else {
      document.getElementById("emptyage").style.display = "none";
      document.getElementById("invalideage").style.display = "block";
      return false;
    }
  } else {
    document.getElementById("emptyage").style.display = "block";
    document.getElementById("invalideage").style.display = "none";
  }
};

let validatecourses = (courses) => {
  if (courses > 0 && courses < 5) {
    document.getElementById("emptycourses").style.display = "none";
    return true;
  } else {
    document.getElementById("emptycourses").style.display = "block";
    return false;
  }
};

let validategender = (gender) => {
  if (gender === "male" || gender === "female") {
    document.getElementById("emptyemptygender").style.display = "none";
    return true;
  } else {
    document.getElementById("emptyemptygender").style.display = "block";
    return false;
  }
};

let validatesubject = (subject1, subject2, subject3) => {
  if (subject1 || subject2 || subject3) {
    document.getElementById("emptysubjects").style.display = "none";
    return true;
  } else {
    document.getElementById("emptysubjects").style.display = "block";
    return false;
  }
};

