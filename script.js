let customerSelectedOption = "";
const lastPage = document.getElementById("main");
const customerName = document.getElementById("name");
const customerPhoneNumber = document.getElementById("PhoneNumber");
const customerEmail = document.getElementById("email");
const customerAddress = document.getElementById("address");
const customerConsultationPurpose = document.querySelector(
  "#consultationpurpose"
);
const selectsOpt = customerConsultationPurpose.querySelectorAll("select");
const customerOption = document.querySelector("#preferredCounsellor");
const selects = customerOption.querySelectorAll("select");
const validateSelectedOption = document.getElementById("selectOption");
const customerDateOfAppointment = document.getElementById("appointmentDate");
const customerTimeOfAppointment = document.getElementById("appointmentTime");
const breifNote = document.getElementById("briefnote");

let counsellorArr = [
  {
    name: "counsellor 1",
    id: 1,
    numOfSelect: 0,
  },
  {
    name: "counsellor 2",
    id: 2,
    numOfSelect: 0,
  },
  {
    name: "counsellor 3",
    id: 3,
    numOfSelect: 0,
  },
  {
    name: "counsellor 4",
    id: 4,
    numOfSelect: 0,
  },
  {
    name: "counsellor 5",
    id: 5,
    numOfSelect: 0,
  },
];

let consultationPurpose = [
  "Health",
  "Career",
  "Growth",
  "Change of Profession",
  "Business",
];

const schedulePrice = {
  Health: "30000",
  Career: "50000",
  Growth: "40000",
  "Change of profession": "60000",
  Business: "80000",
};

let optionselected = {};

function checkName() {
  let input = customerName.value;
  if (input === "") {
    customerName.style.borderColor = "red";
    return false;
  }
}

function checkNumber() {
  let input = customerPhoneNumber.value;
  if (input === "") {
    customerPhoneNumber.style.borderColor = "red";
    return false;
  }
}

function checkEmail() {
  let input = customerEmail.value;
  if (input === "") {
    customerEmail.style.borderColor = "red";
    return false;
  }
}

function checkAddress() {
  let input = customerAddress.value;
  if (input === "") {
    customerAddress.style.borderColor = "red";
    return false;
  }
}

let selectOpt = document.getElementById("consult");
function consultPurpose() {
  selectsOpt.forEach((select) => {
    for (let i = 0; i < consultationPurpose.length; i++) {
      let customerOption = document.createElement("option");
      customerOption.setAttribute("value", consultationPurpose[i]);
      customerOption.innerHTML = consultationPurpose[i];
      select.appendChild(customerOption);
    }
  });

  selectsOpt.forEach((select) => {
    select.addEventListener("change", (e) => {
      optionselected[e.target.id] = e.target.value;
      if (e.target.value == "") {
        selectOpt.style.borderColor = "red";
        return false;
      }
    });
  });
}

consultPurpose();

function handleconsultValidation() {
  if (selectOpt.value == "") {
    selectOpt.style.borderColor = "red";
    return false;
  }
}

function preferredCounsellor() {
  selects.forEach((select) => {
    for (let i = 0; i < counsellorArr.length; i++) {
      let option = document.createElement("option");
      option.setAttribute("value", counsellorArr[i].name);
      option.innerHTML = counsellorArr[i].name;
      select.appendChild(option);
    }
  });

  customerOption.addEventListener("change", function (e) {
    optionselected[e.target.id] = e.target.value;
    customerSelectedOption = e.target.value;

    if (customerSelectedOption == "") {
      return false;
    } else {
      let options = customerOption.querySelectorAll("option");

      options.forEach((option) => {
        counsellorArr.map((selected) => {
          if (
            selected.name == option.textContent &&
            option.textContent == customerSelectedOption
          ) {
            if (selected.numOfSelect >= 3) option.disabled = true;
          }
        });
      });
    }
  });
}

const handleCustomerSelectedOption = () => {
  customerSelectedOption == ""
    ? (validateSelectedOption.style.borderColor = "red")
    : (validateSelectedOption.style.borderColor = "");
  counsellorArr.map((counsellor) => {
    if (customerSelectedOption == counsellor.name) {
      counsellor.numOfSelect += 1;
    }
  });
};

preferredCounsellor();

function checkAppointmentDate() {
  let input = customerDateOfAppointment.value;
  if (input === "") {
    customerDateOfAppointment.style.borderColor = "red";
    return false;
  }
}

function checkAppointmentTime() {
  let input = customerTimeOfAppointment.value;
  if (input === "") {
    customerTimeOfAppointment.style.borderColor = "red";
    return false;
  }
}

function checkNote() {
  let input = breifNote.value;
  if (input === "") {
    breifNote.style.borderColor = "red";
    return false;
  }
}

function confirm() {
  checkName();
  checkNumber();
  checkEmail();
  checkAddress();
  handleconsultValidation();
  handleCustomerSelectedOption();
  checkAppointmentDate();
  checkAppointmentTime();
  checkNote();

  if (
    customerName.value == "" &&
    customerPhoneNumber.value == "" &&
    breifNote.value == "" &&
    customerAddress.value == "" &&
    customerEmail.value == "" &&
    validateSelectedOption.value == "" &&
    customerDateOfAppointment.value == "" &&
    customerTimeOfAppointment.value == ""
  ) {
    return;
  } else {
    if (counsellorArr[0].numOfSelect <= 3) {
      alert(
        `Your appointment with ${
          validateSelectedOption.value
        } has been succesfully scheduled to be by ${
          customerDateOfAppointment.value
        } ${customerTimeOfAppointment.value}.Your Schedule session costs ${
          schedulePrice[selectOpt.value]
        }`
      );
    } else if (counsellorArr.numOfSelect >= 2) {
      alert("That Counsellor is not available for now, \ntry again later!");
    }
  }
}
