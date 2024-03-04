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
  health: "30000",
  career: "50000",
  Growth: "40000",
  "Change of profession": "60000",
  Business: "80000",
};

let optionselected = {};

function checkName() {
  let input = customerName.value;
  if (input === "") {
    customerName.style.borderColor = "red";
  } else {
  }
}

function checkNumber() {
  let input = customerPhoneNumber.value;
  if (input === "") {
    customerPhoneNumber.style.borderColor = "red";
  } else {
  }
}

function checkEmail() {
  let input = customerEmail.value;
  if (input === "") {
    customerEmail.style.borderColor = "red";
  } else {
  }
}

function checkAddress() {
  let input = customerAddress.value;
  if (input === "") {
    customerAddress.style.borderColor = "red";
  } else {
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
      }
    });
  });
}

consultPurpose();

function handleconsultValidation() {
  if (selectOpt.value == "") {
    selectOpt.style.borderColor = "red";
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
      return;
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
  } else {
  }
}

function checkAppointmentTime() {
  let input = customerTimeOfAppointment.value;
  if (input === "") {
    customerTimeOfAppointment.style.borderColor = "red";
  } else {
  }
}

function checkNote() {
  let input = breifNote.value;
  if (input === "") {
    breifNote.style.borderColor = "red";
  } else {
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

  for (let i = 0; i < counsellorArr.length; i++) {
    const element = counsellorArr.numOfSelect[i];
    console.log(element);
  }

  if (counsellorArr.numOfSelect >= 3) {
    lastPage.innerHTML = `schedulePrice`;
    console.log(counsellorArr);
  } else {
    console.log(schedulePrice.career);
    // window.location.href = 'index.html';
    // lastPage.innerHTML = `schedulePrice`;
    console.log(lastPage);
  }
  console.log(schedulePrice.career);
  console.log(selectOpt.value);
}

// for (const price of schedulePrice.length) {

// }

// console.log(schedulePrice["Change of profession"]);
console.log(schedulePrice.career);
console.log(selectOpt.textContent);
