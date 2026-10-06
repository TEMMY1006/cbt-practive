/* =====================================================
   EDUCBT SCHOOL PORTAL
   Frontend only
   HTML + CSS + JavaScript
===================================================== */


/* ================= DEPARTMENTS ================= */

const departments = {

  Science: [
    "Mathematics",
    "English Language",
    "Chemistry",
    "Physics",
    "Biology",
    "Agricultural Science",
    "Economics",
    "Civic Education"
  ],

  Commercial: [
    "Mathematics",
    "English Language",
    "Accounting",
    "Marketing",
    "Commerce",
    "Government",
    "Economics",
    "Civic Education"
  ],

  Arts: [
    "Mathematics",
    "English Language",
    "Literature",
    "Government",
    "Marketing",
    "Economics",
    "Civic Education",
    "Yoruba / Igbo / Hausa"
  ]

};


/* ================= SUBJECT TOPICS ================= */

const topics = {

  "Mathematics": [
    "Number and Numeration",
    "Algebra",
    "Geometry",
    "Mensuration",
    "Trigonometry",
    "Statistics",
    "Probability",
    "Vectors",
    "Matrices",
    "Calculus"
  ],

  "English Language": [
    "Comprehension",
    "Grammar",
    "Vocabulary",
    "Oral English",
    "Lexis and Structure",
    "Summary Writing",
    "Sentence Construction"
  ],

  "Chemistry": [
    "Atomic Structure",
    "Periodic Table",
    "Chemical Bonding",
    "Stoichiometry",
    "Acids, Bases and Salts",
    "Organic Chemistry",
    "Electrochemistry"
  ],

  "Physics": [
    "Measurement",
    "Motion",
    "Forces",
    "Work, Energy and Power",
    "Heat",
    "Waves",
    "Electricity",
    "Magnetism",
    "Modern Physics"
  ],

  "Biology": [
    "Cell Biology",
    "Nutrition",
    "Transport",
    "Respiration",
    "Excretion",
    "Reproduction",
    "Genetics",
    "Ecology",
    "Evolution"
  ],

  "Agricultural Science": [
    "Farm Management",
    "Crop Production",
    "Animal Production",
    "Soil Science",
    "Agricultural Economics",
    "Farm Tools",
    "Pests and Diseases"
  ],

  "Economics": [
    "Basic Economic Problems",
    "Demand and Supply",
    "Production",
    "Market Structures",
    "Money",
    "Inflation",
    "Public Finance",
    "International Trade"
  ],

  "Civic Education": [
    "Citizenship",
    "Human Rights",
    "Democracy",
    "Rule of Law",
    "National Values",
    "Elections",
    "Good Governance",
    "National Development"
  ],

  "Accounting": [
    "Accounting Concepts",
    "Double Entry",
    "Ledger Accounts",
    "Trial Balance",
    "Cash Book",
    "Final Accounts",
    "Depreciation",
    "Partnership"
  ],

  "Marketing": [
    "Marketing Concepts",
    "Market Research",
    "Product",
    "Pricing",
    "Promotion",
    "Distribution",
    "Consumer Behaviour"
  ],

  "Commerce": [
    "Trade",
    "Home Trade",
    "Foreign Trade",
    "Banking",
    "Insurance",
    "Transport",
    "Warehousing",
    "Business Documents"
  ],

  "Government": [
    "Constitution",
    "Arms of Government",
    "Political Parties",
    "Elections",
    "Citizenship",
    "Public Administration",
    "International Relations"
  ],

  "Literature": [
    "Prose",
    "Poetry",
    "Drama",
    "Literary Devices",
    "Themes",
    "Characterisation",
    "Setting",
    "Plot"
  ],

  "Yoruba / Igbo / Hausa": [
    "Grammar",
    "Comprehension",
    "Culture",
    "Oral Literature",
    "Proverbs",
    "Translation",
    "Literature"
  ]

};


/* =====================================================
   QUESTION BANK
   These are original WAEC-style practice questions.
   They are NOT official WAEC examination questions.
===================================================== */

const seedQuestions = {

  "Mathematics": [

    {
      question: "Simplify: 3x + 5x.",
      options: ["8x", "15x", "8", "2x"],
      answer: 0
    },

    {
      question: "What is 25% of 200?",
      options: ["25", "40", "50", "75"],
      answer: 2
    },

    {
      question: "Solve: x + 7 = 15.",
      options: ["6", "7", "8", "9"],
      answer: 2
    },

    {
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "14"],
      answer: 2
    },

    {
      question: "A triangle has angles 60° and 70°. Find the third angle.",
      options: ["40°", "50°", "60°", "70°"],
      answer: 1
    },

    {
      question: "What is 3² + 4²?",
      options: ["12", "20", "25", "49"],
      answer: 2
    },

    {
      question: "Find the mean of 2, 4, 6, 8 and 10.",
      options: ["5", "6", "7", "8"],
      answer: 1
    },

    {
      question: "If y = 2x and x = 5, find y.",
      options: ["5", "7", "10", "15"],
      answer: 2
    }

  ],


  "English Language": [

    {
      question: "Choose the word nearest in meaning to 'rapid'.",
      options: ["Slow", "Fast", "Weak", "Late"],
      answer: 1
    },

    {
      question: "Choose the correctly spelt word.",
      options: ["Enviroment", "Environment", "Environmant", "Envaironment"],
      answer: 1
    },

    {
      question: "The opposite of 'ancient' is:",
      options: ["Old", "Modern", "Historic", "Past"],
      answer: 1
    },

    {
      question: "Choose the correct sentence.",
      options: [
        "She don't like rice.",
        "She doesn't likes rice.",
        "She doesn't like rice.",
        "She not like rice."
      ],
      answer: 2
    },

    {
      question: "A person who writes books is called a:",
      options: ["Painter", "Author", "Driver", "Singer"],
      answer: 1
    },

    {
      question: "Choose the word that best completes: 'Neither Musa nor Tunde ___ present.'",
      options: ["are", "were", "is", "be"],
      answer: 2
    },

    {
      question: "The plural form of 'child' is:",
      options: ["Childs", "Children", "Childes", "Childrens"],
      answer: 1
    },

    {
      question: "Which word is an adjective?",
      options: ["Quickly", "Beautiful", "Run", "Happiness"],
      answer: 1
    }

  ],


  "Chemistry": [

    {
      question: "What is the chemical symbol for oxygen?",
      options: ["Ox", "O", "Og", "On"],
      answer: 1
    },

    {
      question: "The smallest particle of an element that retains its properties is an:",
      options: ["Atom", "Cell", "Ion", "Compound"],
      answer: 0
    },

    {
      question: "What is the pH of a neutral solution at room temperature?",
      options: ["0", "5", "7", "14"],
      answer: 2
    },

    {
      question: "Which gas supports combustion?",
      options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
      answer: 1
    },

    {
      question: "Water has the chemical formula:",
      options: ["CO2", "H2O", "O2", "H2"],
      answer: 1
    },

    {
      question: "Which of these is an acid?",
      options: ["NaOH", "HCl", "NaCl", "CaO"],
      answer: 1
    },

    {
      question: "The atomic number represents the number of:",
      options: [
        "Neutrons",
        "Protons",
        "Electrons and neutrons",
        "Shells"
      ],
      answer: 1
    }

  ],


  "Physics": [

    {
      question: "The SI unit of force is:",
      options: ["Joule", "Newton", "Watt", "Pascal"],
      answer: 1
    },

    {
      question: "Speed is defined as:",
      options: [
        "Distance divided by time",
        "Time divided by distance",
        "Mass divided by volume",
        "Force divided by area"
      ],
      answer: 0
    },

    {
      question: "The SI unit of energy is:",
      options: ["Watt", "Joule", "Newton", "Volt"],
      answer: 1
    },

    {
      question: "Which instrument measures temperature?",
      options: ["Barometer", "Thermometer", "Ammeter", "Voltmeter"],
      answer: 1
    },

    {
      question: "Electric current is measured in:",
      options: ["Volts", "Ohms", "Amperes", "Watts"],
      answer: 2
    },

    {
      question: "Which of these is a vector quantity?",
      options: ["Speed", "Distance", "Mass", "Velocity"],
      answer: 3
    }

  ],


  "Biology": [

    {
      question: "The basic unit of life is the:",
      options: ["Tissue", "Organ", "Cell", "System"],
      answer: 2
    },

    {
      question: "Which organ pumps blood around the body?",
      options: ["Lung", "Heart", "Kidney", "Liver"],
      answer: 1
    },

    {
      question: "Photosynthesis takes place mainly in the:",
      options: ["Nucleus", "Chloroplast", "Ribosome", "Vacuole"],
      answer: 1
    },

    {
      question: "Which gas is released during photosynthesis?",
      options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      answer: 1
    },

    {
      question: "The male reproductive cell in humans is the:",
      options: ["Ovum", "Sperm", "Zygote", "Embryo"],
      answer: 1
    },

    {
      question: "The process by which plants lose water vapour is:",
      options: ["Respiration", "Transpiration", "Digestion", "Excretion"],
      answer: 1
    }

  ],


  "Agricultural Science": [

    {
      question: "Which of these is a farm tool?",
      options: ["Television", "Cutlass", "Computer", "Radio"],
      answer: 1
    },

    {
      question: "The removal of unwanted plants from a farm is called:",
      options: ["Planting", "Weeding", "Harvesting", "Irrigation"],
      answer: 1
    },

    {
      question: "Which animal is commonly kept for milk?",
      options: ["Cow", "Hen", "Fish", "Goat only"],
      answer: 0
    },

    {
      question: "The uppermost layer of soil is called:",
      options: ["Topsoil", "Bedrock", "Subsoil", "Parent rock"],
      answer: 0
    }

  ],


  "Economics": [

    {
      question: "The basic economic problem is:",
      options: [
        "Scarcity",
        "Inflation",
        "Taxation",
        "Unemployment"
      ],
      answer: 0
    },

    {
      question: "Demand refers to the quantity of a commodity consumers are willing and able to:",
      options: ["Produce", "Buy", "Export", "Store"],
      answer: 1
    },

    {
      question: "A market with only one seller is called:",
      options: ["Perfect competition", "Monopoly", "Duopoly", "Oligopoly"],
      answer: 1
    },

    {
      question: "Money serves as a medium of:",
      options: ["Exchange", "Production", "Transport", "Population"],
      answer: 0
    },

    {
      question: "Inflation means a sustained rise in the general:",
      options: [
        "Level of prices",
        "Level of rainfall",
        "Population",
        "Production only"
      ],
      answer: 0
    }

  ],


  "Civic Education": [

    {
      question: "A citizen's right to vote is known as:",
      options: [
        "Political participation",
        "Economic right",
        "Private right",
        "Trade right"
      ],
      answer: 0
    },

    {
      question: "Democracy is government by the:",
      options: ["Military", "People", "Judiciary", "Police"],
      answer: 1
    },

    {
      question: "The rule of law means that:",
      options: [
        "Only leaders obey laws",
        "Everyone is subject to the law",
        "Laws are unnecessary",
        "Citizens make no laws"
      ],
      answer: 1
    },

    {
      question: "Which is a fundamental human right?",
      options: [
        "Right to life",
        "Right to steal",
        "Right to destroy property",
        "Right to disobey every law"
      ],
      answer: 0
    }

  ],


  "Accounting": [

    {
      question: "The process of recording business transactions is called:",
      options: ["Accounting", "Marketing", "Advertising", "Banking"],
      answer: 0
    },

    {
      question: "A document used to record credit sales is:",
      options: ["Invoice", "Cheque", "Receipt", "Passbook"],
      answer: 0
    },

    {
      question: "The left side of an account is called:",
      options: ["Credit", "Debit", "Balance", "Capital"],
      answer: 1
    },

    {
      question: "A trial balance is prepared to check the:",
      options: [
        "Arithmetic accuracy of ledger entries",
        "Number of employees",
        "Price of goods",
        "Business location"
      ],
      answer: 0
    }

  ],


  "Marketing": [

    {
      question: "Marketing is mainly concerned with:",
      options: [
        "Satisfying customer needs",
        "Producing electricity",
        "Building roads",
        "Writing laws"
      ],
      answer: 0
    },

    {
      question: "Advertising is a form of:",
      options: ["Promotion", "Production", "Transportation", "Storage"],
      answer: 0
    },

    {
      question: "The amount charged for a product is its:",
      options: ["Brand", "Price", "Package", "Channel"],
      answer: 1
    },

    {
      question: "Market research helps a business understand:",
      options: [
        "Customers and the market",
        "Only employees",
        "Only government",
        "Only competitors"
      ],
      answer: 0
    }

  ],


  "Commerce": [

    {
      question: "Commerce involves activities that facilitate:",
      options: [
        "The exchange of goods and services",
        "Only farming",
        "Only manufacturing",
        "Only education"
      ],
      answer: 0
    },

    {
      question: "A bank is a financial institution that mainly deals with:",
      options: ["Money", "Crops", "Clothing", "Buildings"],
      answer: 0
    },

    {
      question: "Insurance provides protection against:",
      options: ["Risk", "Profit", "Education", "Advertising"],
      answer: 0
    },

    {
      question: "The movement of goods from one place to another is:",
      options: ["Transport", "Banking", "Insurance", "Warehousing"],
      answer: 0
    }

  ],


  "Government": [

    {
      question: "The constitution is the:",
      options: [
        "Supreme law of a country",
        "School timetable",
        "Tax receipt",
        "Political speech"
      ],
      answer: 0
    },

    {
      question: "The three major arms of government are the executive, legislature and:",
      options: ["Judiciary", "Military", "Police", "Civil service"],
      answer: 0
    },

    {
      question: "An election is a process of:",
      options: [
        "Choosing representatives",
        "Collecting taxes",
        "Writing textbooks",
        "Building roads"
      ],
      answer: 0
    },

    {
      question: "A political party seeks to:",
      options: [
        "Gain political power through elections",
        "Stop all elections",
        "Control schools",
        "Ban citizens"
      ],
      answer: 0
    }

  ],


  "Literature": [

    {
      question: "A comparison using 'like' or 'as' is called:",
      options: ["Metaphor", "Simile", "Irony", "Pun"],
      answer: 1
    },

    {
      question: "A play is mainly written to be:",
      options: ["Performed", "Calculated", "Cooked", "Measured"],
      answer: 0
    },

    {
      question: "The main character in a story is usually called the:",
      options: ["Protagonist", "Audience", "Narrator only", "Editor"],
      answer: 0
    },

    {
      question: "The time and place of a story is its:",
      options: ["Plot", "Setting", "Theme", "Conflict"],
      answer: 1
    }

  ],


  "Yoruba / Igbo / Hausa": [

    {
      question: "Oral literature is transmitted mainly through:",
      options: [
        "Spoken traditions",
        "Computers only",
        "Newspapers only",
        "Television only"
      ],
      answer: 0
    },

    {
      question: "A proverb generally expresses:",
      options: [
        "Wisdom or experience",
        "A mathematical equation",
        "A business receipt",
        "A timetable"
      ],
      answer: 0
    },

    {
      question: "Translation means:",
      options: [
        "Changing meaning from one language to another",
        "Changing numbers",
        "Deleting a paragraph",
        "Writing without meaning"
      ],
      answer: 0
    }

  ]

};


/* =====================================================
   STATE
===================================================== */

let student = JSON.parse(localStorage.getItem("cbtStudent")) || null;

let selectedDepartment = "";
let selectedSubject = "";
let selectedClass = "";

let examQuestions = [];
let currentQuestion = 0;
let answers = [];

let timeLeft = 120 * 60;
let timerInterval = null;


/* =====================================================
   AUTH
===================================================== */

function showRegister() {

  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("registerBox").classList.remove("hidden");

}


function showLogin() {

  document.getElementById("registerBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");

}


document.getElementById("registerForm").addEventListener("submit", function(e) {

  e.preventDefault();

  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const studentClass = document.getElementById("regClass").value;

  const account = {
    name,
    email,
    password,
    classLevel: studentClass
  };

  localStorage.setItem("cbtStudent", JSON.stringify(account));

  student = account;

  showToast("Account created successfully!");

  loadApplication();

});


document.getElementById("loginForm").addEventListener("submit", function(e) {

  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const savedStudent =
    JSON.parse(localStorage.getItem("cbtStudent"));

  if (!savedStudent) {

    showToast("No account found. Please register first.");
    return;

  }

  if (
    email !== savedStudent.email ||
    password !== savedStudent.password
  ) {

    showToast("Incorrect email or password.");
    return;

  }

  student = savedStudent;

  showToast("Login successful!");

  loadApplication();

});


function logout() {

  student = null;

  document.getElementById("appScreen")
    .classList.add("hidden");

  document.getElementById("authScreen")
    .classList.remove("hidden");

  showLogin();

}


/* =====================================================
   LOAD APP
===================================================== */

function loadApplication() {

  document.getElementById("authScreen")
    .classList.add("hidden");

  document.getElementById("appScreen")
    .classList.remove("hidden");

  updateStudentInfo();

  updateDashboardStats();

  renderLibrarySubjects();

}


function updateStudentInfo() {

  if (!student) return;

  document.getElementById("studentName").textContent =
    student.name;

  document.getElementById("studentClass").textContent =
    student.classLevel;

  document.getElementById("welcomeName").textContent =
    student.name.split(" ")[0];

  document.getElementById("studentAvatar").textContent =
    student.name.charAt(0).toUpperCase();

}


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageId, navButton = null) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");

  if (navButton) {

    document.querySelectorAll(".nav-item")
      .forEach(btn => btn.classList.remove("active"));

    navButton.classList.add("active");

  }

  const titles = {

    dashboardPage: ["Dashboard", "Welcome back!"],

    cbtPage: ["CBT Practice", "Practice and improve your knowledge."],

    libraryPage: ["Digital Library", "Read notes and revise your subjects."],

    resultsPage: ["My Results", "Track your CBT performance."],

    examPage: ["CBT Examination", "Answer all questions carefully."],

    resultPage: ["Exam Result", "Your CBT performance."]
  };

  if (titles[pageId]) {

    document.getElementById("pageTitle").textContent =
      titles[pageId][0];

    document.getElementById("pageSubtitle").textContent =
      titles[pageId][1];

  }

}


function openCBT() {

  showPage("cbtPage");

  document.querySelectorAll(".nav-item")
    .forEach(btn => btn.classList.remove("active"));

  document.querySelectorAll(".nav-item")[1]
    .classList.add("active");

  resetCBTSelection();

}


/* =====================================================
   CBT SELECTION
===================================================== */

function resetCBTSelection() {

  document.getElementById("departmentSelection")
    .classList.remove("hidden");

  document.getElementById("subjectSelection")
    .classList.add("hidden");

  document.getElementById("classSelection")
    .classList.add("hidden");

}


function selectDepartment(department) {

  selectedDepartment = department;

  document.getElementById("departmentSelection")
    .classList.add("hidden");

  document.getElementById("subjectSelection")
    .classList.remove("hidden");

  const subjectGrid =
    document.getElementById("subjectGrid");

  subjectGrid.innerHTML = "";

  departments[department].forEach(subject => {

    const card = document.createElement("div");

    card.className = "subject-card";

    card.onclick = () => selectSubject(subject);

    card.innerHTML = `

      <div class="subject-icon">
        <i class="fa-solid fa-book"></i>
      </div>

      <h3>${subject}</h3>

      <p>
        50 practice questions
      </p>

    `;

    subjectGrid.appendChild(card);

  });

}


function selectSubject(subject) {

  selectedSubject = subject;

  document.getElementById("subjectSelection")
    .classList.add("hidden");

  document.getElementById("classSelection")
    .classList.remove("hidden");

}


function backToDepartments() {

  resetCBTSelection();

}


function backToSubjects() {

  document.getElementById("classSelection")
    .classList.add("hidden");

  document.getElementById("subjectSelection")
    .classList.remove("hidden");

}


/* =====================================================
   QUESTION GENERATOR
===================================================== */

function generateQuestions(subject, classLevel) {

  const original =
    seedQuestions[subject] ||
    seedQuestions["English Language"];

  const questions = [];

  for (let i = 0; i < 50; i++) {

    const base = original[i % original.length];

    questions.push({

      question:
        base.question +
        (i >= original.length
          ? ` (Practice ${i + 1})`
          : ""),

      options: [...base.options],

      answer: base.answer,

      subject,

      classLevel

    });

  }

  return questions;

}


/* =====================================================
   START EXAM
===================================================== */

function startExam(classLevel) {

  selectedClass = classLevel;

  examQuestions =
    generateQuestions(
      selectedSubject,
      selectedClass
    );

  currentQuestion = 0;

  answers = new Array(50).fill(null);

  timeLeft = 120 * 60;

  showPage("examPage");

  document.getElementById("examDepartment")
    .textContent = selectedDepartment.toUpperCase();

  document.getElementById("examSubject")
    .textContent = selectedSubject;

  document.getElementById("examClass")
    .textContent = selectedClass;

  buildQuestionNavigator();

  displayQuestion();

  startTimer();

}


/* =====================================================
   DISPLAY QUESTION
===================================================== */

function displayQuestion() {

  const question =
    examQuestions[currentQuestion];

  document.getElementById("questionNumber")
    .textContent = currentQuestion + 1;

  document.getElementById("questionText")
    .textContent = question.question;

  document.getElementById("questionProgress")
    .style.width =
      ((currentQuestion + 1) / 50 * 100) + "%";

  document.getElementById("answeredText")
    .textContent =
      answers.filter(a => a !== null).length +
      " answered";


  const optionsContainer =
    document.getElementById("optionsContainer");

  optionsContainer.innerHTML = "";

  const letters = ["A", "B", "C", "D"];

  question.options.forEach((option, index) => {

    const div = document.createElement("div");

    div.className = "option";

    if (answers[currentQuestion] === index) {
      div.classList.add("selected");
    }

    div.onclick = () => selectAnswer(index);

    div.innerHTML = `

      <div class="option-letter">
        ${letters[index]}
      </div>

      <span>${option}</span>

    `;

    optionsContainer.appendChild(div);

  });


  document.getElementById("previousBtn")
    .disabled = currentQuestion === 0;

  if (currentQuestion === 49) {

    document.getElementById("nextBtn")
      .classList.add("hidden");

    document.getElementById("submitBtn")
      .classList.remove("hidden");

  } else {

    document.getElementById("nextBtn")
      .classList.remove("hidden");

    document.getElementById("submitBtn")
      .classList.add("hidden");

  }

  updateQuestionNavigator();

}


/* =====================================================
   SELECT ANSWER
===================================================== */

function selectAnswer(index) {

  answers[currentQuestion] = index;

  displayQuestion();

}


/* =====================================================
   NEXT / PREVIOUS
===================================================== */

function nextQuestion() {

  if (currentQuestion < 49) {

    currentQuestion++;

    displayQuestion();

  }

}


function previousQuestion() {

  if (currentQuestion > 0) {

    currentQuestion--;

    displayQuestion();

  }

}


/* =====================================================
   QUESTION NAVIGATOR
===================================================== */

function buildQuestionNavigator() {

  const container =
    document.getElementById("questionNumbers");

  container.innerHTML = "";

  for (let i = 0; i < 50; i++) {

    const button =
      document.createElement("div");

    button.className = "question-number";

    button.textContent = i + 1;

    button.onclick = () => {

      currentQuestion = i;

      displayQuestion();

    };

    container.appendChild(button);

  }

}


function updateQuestionNavigator() {

  document
    .querySelectorAll(".question-number")
    .forEach((button, index) => {

      button.classList.remove(
        "current",
        "answered"
      );

      if (index === currentQuestion) {
        button.classList.add("current");
      }

      if (answers[index] !== null) {
        button.classList.add("answered");
      }

    });

}


/* =====================================================
   TIMER
===================================================== */

function startTimer() {

  clearInterval(timerInterval);

  updateTimerDisplay();

  timerInterval = setInterval(() => {

    timeLeft--;

    updateTimerDisplay();

    if (timeLeft <= 0) {

      clearInterval(timerInterval);

      showToast("Time is up. Your exam will be submitted.");

      submitExam();

    }

  }, 1000);

}


function updateTimerDisplay() {

  const minutes =
    Math.floor(timeLeft / 60);

  const seconds =
    timeLeft % 60;

  document.getElementById("timer")
    .textContent =
      `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}


/* =====================================================
   SUBMIT EXAM
===================================================== */

function submitExam() {

  clearInterval(timerInterval);

  let score = 0;

  examQuestions.forEach((question, index) => {

    if (answers[index] === question.answer) {
      score++;
    }

  });

  const percentage =
    Math.round((score / 50) * 100);

  const result = {

    id: Date.now(),

    student: student.name,

    department: selectedDepartment,

    subject: selectedSubject,

    classLevel: selectedClass,

    score,

    total: 50,

    percentage,

    date: new Date().toLocaleString()

  };


  const results =
    JSON.parse(
      localStorage.getItem("cbtResults")
    ) || [];

  results.unshift(result);

  localStorage.setItem(
    "cbtResults",
    JSON.stringify(results)
  );


  document.getElementById("resultPercentage")
    .textContent = percentage + "%";

  document.getElementById("resultScore")
    .textContent = `${score} / 50`;

  document.getElementById("resultSubject")
    .textContent = selectedSubject;

  document.getElementById("resultClass")
    .textContent = selectedClass;


  if (percentage >= 70) {

    document.getElementById("resultMessage")
      .textContent =
      "Excellent performance! Keep up the good work.";

  } else if (percentage >= 50) {

    document.getElementById("resultMessage")
      .textContent =
      "Good effort. Continue practising to improve.";

  } else {

    document.getElementById("resultMessage")
      .textContent =
      "Keep studying and practising. You can improve.";

  }


  updateDashboardStats();

  renderResults();

  showPage("resultPage");

}


/* =====================================================
   RESULTS
===================================================== */

function getResults() {

  return JSON.parse(
    localStorage.getItem("cbtResults")
  ) || [];

}


function renderResults() {

  const container =
    document.getElementById("resultsContainer");

  const results = getResults();

  if (results.length === 0) {

    container.innerHTML = `

      <div class="empty-state">

        <i class="fa-solid fa-chart-simple"></i>

        <h3>No Results Yet</h3>

        <p>
          Complete a CBT practice test to see your results here.
        </p>

      </div>

    `;

    return;

  }


  let html = `

    <div class="result-history">

      <div class="result-row">

        <strong>Subject</strong>
        <strong>Class</strong>
        <strong>Score</strong>
        <strong>Date</strong>

      </div>

  `;


  results.forEach(result => {

    html += `

      <div class="result-row">

        <div>
          <strong>${result.subject}</strong>
          <small>${result.department}</small>
        </div>

        <div>
          ${result.classLevel}
        </div>

        <div>
          <span class="result-badge">
            ${result.score}/${result.total}
            (${result.percentage}%)
          </span>
        </div>

        <div>
          <small>${result.date}</small>
        </div>

      </div>

    `;

  });


  html += `</div>`;

  container.innerHTML = html;

}


function updateDashboardStats() {

  const results = getResults();

  document.getElementById("examCount")
    .textContent = results.length;

  if (results.length > 0) {

    const best =
      Math.max(
        ...results.map(r => r.percentage)
      );

    document.getElementById("bestScore")
      .textContent = best + "%";

  } else {

    document.getElementById("bestScore")
      .textContent = "0%";

  }

}


/* =====================================================
   LIBRARY
===================================================== */

function renderLibrarySubjects() {

  const container =
    document.getElementById("librarySubjects");

  container.innerHTML = "";

  const allSubjects =
    [...new Set(
      Object.values(departments).flat()
    )];


  allSubjects.forEach(subject => {

    const card =
      document.createElement("div");

    card.className = "subject-card";

    card.onclick =
      () => openLibrarySubject(subject);

    card.innerHTML = `

      <div class="subject-icon">

        <i class="fa-solid fa-book-open"></i>

      </div>

      <h3>${subject}</h3>

      <p>
        SS1 • SS2 • SS3 Notes
      </p>

    `;

    container.appendChild(card);

  });

}


let librarySelectedSubject = "";


function openLibrarySubject(subject) {

  librarySelectedSubject = subject;

  document.getElementById("librarySubjects")
    .classList.add("hidden");

  document.getElementById("libraryClasses")
    .classList.remove("hidden");

  document.getElementById("notesArea")
    .classList.add("hidden");

  document.getElementById("librarySubjectTitle")
    .textContent =
      `${subject} — Choose Class`;

}


function backToLibrarySubjects() {

  document.getElementById("libraryClasses")
    .classList.add("hidden");

  document.getElementById("librarySubjects")
    .classList.remove("hidden");

}


function openNotes(classLevel) {

  document.getElementById("libraryClasses")
    .classList.add("hidden");

  document.getElementById("notesArea")
    .classList.remove("hidden");

  document.getElementById("notesClass")
    .textContent = classLevel;

  document.getElementById("notesTitle")
    .textContent = librarySelectedSubject;

  createNotes(
    librarySelectedSubject,
    classLevel
  );

}


function backToLibraryClasses() {

  document.getElementById("notesArea")
    .classList.add("hidden");

  document.getElementById("libraryClasses")
    .classList.remove("hidden");

}


/* =====================================================
   NOTES
===================================================== */

function createNotes(subject, classLevel) {

  const container =
    document.getElementById("notesContent");

  const subjectTopics =
    topics[subject] || [
      "Introduction",
      "Basic Concepts",
      "Revision",
      "Practice"
    ];


  let html = "";

  subjectTopics.forEach((topic, index) => {

    html += `

      <div class="note-section">

        <h3>
          ${index + 1}. ${topic}
        </h3>

        <p>
          <strong>${topic}</strong> is an important
          area of ${subject} for ${classLevel} students.
          Study the main concepts, definitions,
          examples and applications related to this topic.
        </p>

        <p>
          Students should revise their school notes,
          understand worked examples and practise
          relevant examination-style questions.
        </p>

      </div>

    `;

  });


  container.innerHTML = html;

}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

  const toast =
    document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 7200);

}


/* =====================================================
   STARTUP
===================================================== */

window.addEventListener("DOMContentLoaded", () => {

  if (student) {

    loadApplication();

  } else {

    document.getElementById("authScreen")
      .classList.remove("hidden");

    document.getElementById("appScreen")
      .classList.add("hidden");

  }

  renderResults();

});