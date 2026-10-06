/* =========================================================
   EDUCBT — SCHOOL CBT TRAINING PORTAL
   ========================================================= */


/* =========================================================
   APPLICATION STATE
   ========================================================= */

const state = {

  student: JSON.parse(
    localStorage.getItem("educbt_student") || "null"
  ),

  department: "",

  subject: "",

  classLevel: "",

  questions: [],

  current: 0,

  answers: [],

  timeLeft: 120 * 60,

  timer: null,

  submitted: false,

  librarySubject: "",

  libraryClass: ""

};


/* =========================================================
   DEPARTMENTS AND SUBJECTS
   ========================================================= */

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
    "Yoruba"
  ]

};


const allSubjects = [
  ...new Set(
    Object.values(departments).flat()
  )
];


/* =========================================================
   SUBJECT TOPICS
   ========================================================= */

const subjectTopics = {

  "Mathematics": [
    "Number",
    "Algebra",
    "Geometry",
    "Mensuration",
    "Statistics",
    "Probability",
    "Indices",
    "Sequences",
    "Trigonometry",
    "Coordinate Geometry"
  ],

  "English Language": [
    "Grammar",
    "Vocabulary",
    "Comprehension",
    "Concord",
    "Spelling",
    "Figures of Speech",
    "Sentence Structure",
    "Antonyms",
    "Synonyms",
    "Punctuation"
  ],

  "Chemistry": [
    "Matter",
    "Atomic Structure",
    "Periodic Table",
    "Chemical Bonding",
    "Acids and Bases",
    "Stoichiometry",
    "Organic Chemistry",
    "Rates of Reaction",
    "Electrochemistry",
    "Separation Techniques"
  ],

  "Physics": [
    "Measurement",
    "Motion",
    "Forces",
    "Energy",
    "Heat",
    "Waves",
    "Light",
    "Electricity",
    "Magnetism",
    "Modern Physics"
  ],

  "Biology": [
    "Cell Biology",
    "Nutrition",
    "Respiration",
    "Transport",
    "Reproduction",
    "Ecology",
    "Genetics",
    "Evolution",
    "Microorganisms",
    "Human Systems"
  ],

  "Agricultural Science": [
    "Farm Tools",
    "Soil",
    "Crop Production",
    "Animal Production",
    "Farm Management",
    "Pests",
    "Diseases",
    "Agricultural Economics",
    "Forestry",
    "Fisheries"
  ],

  "Economics": [
    "Demand",
    "Supply",
    "Production",
    "Market",
    "National Income",
    "Inflation",
    "Unemployment",
    "Money",
    "Public Finance",
    "International Trade"
  ],

  "Civic Education": [
    "Citizenship",
    "Human Rights",
    "Democracy",
    "Rule of Law",
    "National Values",
    "Political Participation",
    "Constitution",
    "Leadership",
    "Corruption",
    "National Unity"
  ],

  "Accounting": [
    "Accounting Concepts",
    "Source Documents",
    "Ledger",
    "Trial Balance",
    "Cash Book",
    "Bank Reconciliation",
    "Depreciation",
    "Final Accounts",
    "Partnership",
    "Company Accounts"
  ],

  "Marketing": [
    "Marketing Concepts",
    "Market Research",
    "Product",
    "Price",
    "Promotion",
    "Distribution",
    "Consumer Behaviour",
    "Branding",
    "Advertising",
    "Sales"
  ],

  "Commerce": [
    "Trade",
    "Occupation",
    "Business Units",
    "Retail Trade",
    "Wholesale Trade",
    "Transportation",
    "Insurance",
    "Banking",
    "Communication",
    "Warehousing"
  ],

  "Government": [
    "Constitution",
    "Democracy",
    "Legislature",
    "Executive",
    "Judiciary",
    "Political Parties",
    "Elections",
    "Public Administration",
    "Local Government",
    "International Relations"
  ],

  "Literature": [
    "Prose",
    "Poetry",
    "Drama",
    "Character",
    "Setting",
    "Theme",
    "Plot",
    "Figures of Speech",
    "Narrative Techniques",
    "Literary Devices"
  ],

  "Yoruba": [
    "Ede",
    "Aṣa",
    "Litireso",
    "Girama",
    "Owe",
    "Àkójọpọ̀ Ọ̀rọ̀",
    "Ìtumọ̀ Ọ̀rọ̀",
    "Ìwé Kíkà",
    "Àṣà Yorùbá",
    "Àkọ́kọ́"
  ]

};


/* =========================================================
   CLASS LEVEL
   ========================================================= */

const classFocus = {

  SS1: "foundation",

  SS2: "intermediate",

  SS3: "senior"

};


/* =========================================================
   QUESTION GENERATOR
   ========================================================= */

function makeQuestion(
  id,
  subject,
  cls,
  n
) {

  const topics =
    subjectTopics[subject] || ["General"];

  const topic =
    topics[(n - 1) % topics.length];

  const focus =
    classFocus[cls];


  /* ================= MATHEMATICS ================= */

  if (subject === "Mathematics") {

    const a =
      n +
      (
        cls === "SS1"
          ? 2
          : cls === "SS2"
            ? 12
            : 22
      );

    const b =
      (n % 9) + 2;

    const correct =
      a + b;

    return {

      id,

      subject,

      classLevel: cls,

      topic,

      question:
        `${cls} ${topic}: What is ${a} + ${b}?`,

      options: [
        String(correct),
        String(correct + 2),
        String(correct - 1),
        String(correct + 5)
      ],

      answer: 0

    };

  }


  /* ================= ENGLISH ================= */

  if (subject === "English Language") {

    const words = [

      [
        "rapid",
        "quick",
        "slow",
        "late",
        "heavy"
      ],

      [
        "ancient",
        "modern",
        "old",
        "past",
        "early"
      ],

      [
        "assist",
        "help",
        "stop",
        "refuse",
        "delay"
      ],

      [
        "honest",
        "truthful",
        "false",
        "angry",
        "weak"
      ],

      [
        "brief",
        "short",
        "wide",
        "heavy",
        "long"
      ]

    ];

    const item =
      words[(n - 1) % words.length];

    return {

      id,

      subject,

      classLevel: cls,

      topic,

      question:
        `Choose the word nearest in meaning to "${item[0]}".`,

      options: [
        item[1],
        item[2],
        item[3],
        item[4]
      ],

      answer: 0

    };

  }


  /* ================= OTHER SUBJECTS ================= */

  const stems = [

    `Which statement is most directly related to ${topic.toLowerCase()} at ${focus} level?`,

    `Which option is an important concept in ${topic.toLowerCase()}?`,

    `Which of the following best describes a basic idea in ${topic.toLowerCase()}?`,

    `Which option is most appropriate when studying ${topic.toLowerCase()}?`,

    `What should a student know about ${topic.toLowerCase()}?`

  ];


  const correct =
    `${topic} concept ${n}`;


  return {

    id,

    subject,

    classLevel: cls,

    topic,

    question:
      `${stems[(n - 1) % stems.length]} (Practice item ${n})`,

    options: [

      correct,

      `Unrelated idea ${n}`,

      `Incorrect statement ${n}`,

      `Opposite concept ${n}`

    ],

    answer: 0

  };

}


/* =========================================================
   BUILD QUESTION BANK
   ========================================================= */

function buildQuestionBank() {

  const bank = {};

  allSubjects.forEach(subject => {

    bank[subject] = {};

    ["SS1", "SS2", "SS3"].forEach(cls => {

      bank[subject][cls] =
        Array.from(
          { length: 50 },
          (_, i) => {

            return makeQuestion(
              `${subject}-${cls}-${i + 1}`,
              subject,
              cls,
              i + 1
            );

          }
        );

    });

  });

  return bank;

}


const questionBank =
  buildQuestionBank();


/* =========================================================
   DOM HELPERS
   ========================================================= */

const $ = id =>
  document.getElementById(id);


const qs = selector =>
  document.querySelector(selector);


const qsa = selector =>
  [...document.querySelectorAll(selector)];


/* =========================================================
   SCREEN MANAGEMENT
   ========================================================= */

function showScreen(id) {

  qsa(".screen").forEach(
    element =>
      element.classList.remove("active")
  );

  const screen = $(id);

  if (screen) {
    screen.classList.add("active");
  }

}


/* =========================================================
   APP SECTION MANAGEMENT
   ========================================================= */

function showAppSection(name) {

  qsa(".app-section").forEach(
    section =>
      section.classList.remove("active")
  );


  const section =
    $(`${name}Section`);

  if (section) {
    section.classList.add("active");
  }


  qsa(".side-nav button").forEach(
    button => {

      button.classList.toggle(
        "active",
        button.dataset.page === name
      );

    }
  );


  if (name === "dashboard") {

    refreshDashboard();

  }


  if (name === "results") {

    renderResults();

  }


  if (name === "practice") {

    renderDepartments();

  }


  if (name === "library") {

    renderLibrarySubjects();

  }

}


/* =========================================================
   AUTH
   ========================================================= */

function openAuth(mode) {

  showScreen("authPage");

  const login =
    $("loginForm");

  const register =
    $("registerForm");

  const title =
    $("authTitle");

  const subtitle =
    $("authSubtitle");


  if (mode === "register") {

    login.classList.add("hidden");

    register.classList.remove("hidden");

    title.textContent =
      "Create your account";

    subtitle.textContent =
      "Register to access your CBT dashboard.";

  }

  else {

    register.classList.add("hidden");

    login.classList.remove("hidden");

    title.textContent =
      "Welcome back";

    subtitle.textContent =
      "Login to continue to your CBT dashboard.";

  }

}


/* =========================================================
   REGISTER
   ========================================================= */

function handleRegister(event) {

  event.preventDefault();


  const name =
    $("registerName")
      .value
      .trim();


  const email =
    $("registerEmail")
      .value
      .trim()
      .toLowerCase();


  const password =
    $("registerPassword")
      .value;


  if (
    !name ||
    !email ||
    password.length < 6
  ) {

    toast(
      "Enter a name, valid email and password of at least 6 characters."
    );

    return;

  }


  state.student = {

    name,

    email,

    password

  };


  localStorage.setItem(
    "educbt_student",
    JSON.stringify(state.student)
  );


  enterApp();


  toast(
    "Account created successfully."
  );

}


/* =========================================================
   LOGIN
   ========================================================= */

function handleLogin(event) {

  event.preventDefault();


  const email =
    $("loginEmail")
      .value
      .trim()
      .toLowerCase();


  const password =
    $("loginPassword")
      .value;


  const saved =
    JSON.parse(
      localStorage.getItem(
        "educbt_student"
      ) || "null"
    );


  if (
    !saved ||
    saved.email !== email ||
    saved.password !== password
  ) {

    toast(
      "Incorrect email or password."
    );

    return;

  }


  state.student =
    saved;


  enterApp();


  toast(
    "Login successful."
  );

}


/* =========================================================
   ENTER APP
   ========================================================= */

function enterApp() {

  showScreen("appPage");

  updateStudentUI();

  showAppSection("dashboard");

}


/* =========================================================
   LOGOUT
   ========================================================= */

function logout() {

  stopTimer();

  state.student = null;

  showScreen("landingPage");

  toast(
    "You have been logged out."
  );

}


/* =========================================================
   STUDENT UI
   ========================================================= */

function updateStudentUI() {

  const name =
    state.student?.name ||
    "Student";


  $("sidebarStudentName")
    .textContent = name;


  $("dashboardStudentName")
    .textContent = name;


  $("studentAvatar")
    .textContent =
      name
        .charAt(0)
        .toUpperCase();

}


/* =========================================================
   DASHBOARD
   ========================================================= */

function getResults() {

  return JSON.parse(
    localStorage.getItem(
      "educhbt_results"
    ) || "[]"
  );

}


function refreshDashboard() {

  const results =
    getResults();


  $("attemptCount")
    .textContent =
      results.length;


  const best =
    results.length
      ? Math.max(
          ...results.map(
            result =>
              result.percentage
          )
        )
      : 0;


  $("bestScore")
    .textContent =
      `${best}%`;


  $("todayText")
    .textContent =
      new Date().toLocaleDateString(
        undefined,
        {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        }
      );

}


/* =========================================================
   DEPARTMENTS
   ========================================================= */

function renderDepartments() {

  const grid =
    $("departmentGrid");

  grid.innerHTML = "";


  Object.keys(departments)
    .forEach(department => {

      const button =
        document.createElement("button");


      button.className =
        "choice-btn";


      button.innerHTML = `

        <strong>
          ${department} Department
        </strong>

        <small>
          ${departments[department].length}
          subjects available
        </small>

      `;


      button.addEventListener(
        "click",
        () => {

          state.department =
            department;

          state.subject = "";

          state.classLevel = "";

          renderSubjects(
            department
          );

        }
      );


      grid.appendChild(button);

    });

}


/* =========================================================
   SUBJECTS
   ========================================================= */

function renderSubjects(department) {

  $("subjectStep")
    .classList.remove("hidden");


  $("classStep")
    .classList.add("hidden");


  const grid =
    $("subjectGrid");

  grid.innerHTML = "";


  departments[department]
    .forEach(subject => {

      const button =
        document.createElement("button");


      button.className =
        "choice-btn";


      button.innerHTML = `

        <strong>
          ${subject}
        </strong>

        <small>
          Practice ${subject}
        </small>

      `;


      button.addEventListener(
        "click",
        () => {

          state.subject =
            subject;

          renderClasses();

        }
      );


      grid.appendChild(button);

    });


  $("subjectStep")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================================================
   CLASS LEVEL
   ========================================================= */

function renderClasses() {

  $("classStep")
    .classList.remove("hidden");


  const grid =
    $("classGrid");

  grid.innerHTML = "";


  ["SS1", "SS2", "SS3"]
    .forEach(cls => {

      const button =
        document.createElement("button");


      button.className =
        "choice-btn";


      button.innerHTML = `

        <strong>
          ${cls}
        </strong>

        <small>
          50 unique questions
        </small>

      `;


      button.addEventListener(
        "click",
        () => {

          state.classLevel =
            cls;

          startExam();

        }
      );


      grid.appendChild(button);

    });


  $("classStep")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================================================
   START EXAM
   ========================================================= */

function startExam() {

  const bank =
    questionBank[state.subject];


  if (
    !bank ||
    !bank[state.classLevel]
  ) {

    toast(
      "Questions are not available for this selection."
    );

    return;

  }


  state.questions =
    [...bank[state.classLevel]];


  state.current = 0;


  state.answers =
    new Array(
      state.questions.length
    ).fill(null);


  state.timeLeft =
    120 * 60;


  state.submitted = false;


  $("examTitle")
    .textContent =
      state.subject;


  $("examSubtitle")
    .textContent =
      `${state.department} • ${state.classLevel}`;


  showScreen("examPage");


  renderQuestionNavigator();

  renderQuestion();

  startTimer();

}


/* =========================================================
   RENDER QUESTION
   ========================================================= */

function renderQuestion() {

  const question =
    state.questions[state.current];


  if (!question) {
    return;
  }


  $("questionNumber")
    .textContent =
      `Question ${
        state.current + 1
      } of ${
        state.questions.length
      }`;


  $("questionTopic")
    .textContent =
      question.topic;


  $("questionText")
    .textContent =
      question.question;


  const options =
    $("optionsContainer");


  options.innerHTML = "";


  question.options
    .forEach(
      (option, index) => {

        const button =
          document.createElement(
            "button"
          );


        button.className =
          "option-btn";


        if (
          state.answers[
            state.current
          ] === index
        ) {

          button.classList.add(
            "selected"
          );

        }


        button.textContent =
          `${String.fromCharCode(
            65 + index
          )}. ${option}`;


        button.addEventListener(
          "click",
          () => {

            state.answers[
              state.current
            ] = index;


            renderQuestion();

            renderQuestionNavigator();

          }
        );


        options.appendChild(
          button
        );

      }
    );


  $("prevBtn")
    .disabled =
      state.current === 0;


  $("nextBtn")
    .classList.toggle(
      "hidden",
      state.current ===
        state.questions.length - 1
    );


  $("submitBtn")
    .classList.toggle(
      "hidden",
      state.current !==
        state.questions.length - 1
    );


  renderQuestionNavigator();

}


/* =========================================================
   QUESTION NAVIGATOR
   ========================================================= */

function renderQuestionNavigator() {

  const nav =
    $("questionNavigator");


  nav.innerHTML = "";


  state.questions.forEach(
    (_, index) => {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "question-number";


      button.textContent =
        index + 1;


      if (
        index === state.current
      ) {

        button.classList.add(
          "current"
        );

      }


      if (
        state.answers[index] !== null
      ) {

        button.classList.add(
          "answered"
        );

      }


      button.addEventListener(
        "click",
        () => {

          state.current =
            index;

          renderQuestion();

        }
      );


      nav.appendChild(
        button
      );

    }
  );

}


/* =========================================================
   NEXT QUESTION
   ========================================================= */

function nextQuestion() {

  if (
    state.current <
    state.questions.length - 1
  ) {

    state.current++;

    renderQuestion();

  }

}


/* =========================================================
   PREVIOUS QUESTION
   ========================================================= */

function previousQuestion() {

  if (
    state.current > 0
  ) {

    state.current--;

    renderQuestion();

  }

}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {

  stopTimer();

  updateTimer();


  state.timer =
    setInterval(
      () => {

        state.timeLeft--;

        updateTimer();


        if (
          state.timeLeft <= 0
        ) {

          stopTimer();

          submitExam(true);

        }

      },
      1000
    );

}


/* =========================================================
   STOP TIMER
   ========================================================= */

function stopTimer() {

  if (state.timer) {

    clearInterval(
      state.timer
    );

  }


  state.timer = null;

}


/* =========================================================
   UPDATE TIMER
   ========================================================= */

function updateTimer() {

  const hours =
    Math.floor(
      state.timeLeft / 3600
    );


  const minutes =
    Math.floor(
      (state.timeLeft % 3600) /
      60
    );


  const seconds =
    state.timeLeft % 60;


  $("timer")
    .textContent =
      `${String(hours).padStart(2, "0")}:` +
      `${String(minutes).padStart(2, "0")}:` +
      `${String(seconds).padStart(2, "0")}`;


  if (
    state.timeLeft <= 300
  ) {

    $("timer").style.color =
      "#ff7777";

  }

  else {

    $("timer").style.color = "";

  }

}


/* =========================================================
   SUBMIT EXAM
   ========================================================= */

function submitExam(auto = false) {

  if (state.submitted) {
    return;
  }


  state.submitted = true;


  stopTimer();


  let correct = 0;


  state.questions.forEach(
    (question, index) => {

      if (
        state.answers[index] ===
        question.answer
      ) {

        correct++;

      }

    }
  );


  const total =
    state.questions.length;


  const percentage =
    Math.round(
      (correct / total) * 100
    );


  const result = {

    id: Date.now(),

    student:
      state.student?.name ||
      "Student",

    department:
      state.department,

    subject:
      state.subject,

    classLevel:
      state.classLevel,

    correct,

    total,

    percentage,

    date:
      new Date().toLocaleString()

  };


  const results =
    getResults();


  results.push(result);


  localStorage.setItem(
    "educhbt_results",
    JSON.stringify(results)
  );


  $("resultExamLabel")
    .textContent =
      `${result.subject} • ${
        result.classLevel
      } • ${
        result.department
      } Department`;


  $("resultPercentage")
    .textContent =
      `${percentage}%`;


  $("resultCorrect")
    .textContent =
      correct;


  $("resultTotal")
    .textContent =
      total;


  $("resultGrade")
    .textContent =
      gradeFor(
        percentage
      );


  showScreen(
    "resultPage"
  );


  toast(
    auto
      ? "Time is up. Your exam was submitted."
      : "Exam submitted successfully."
  );

}


/* =========================================================
   GRADING
   ========================================================= */

function gradeFor(percentage) {

  if (percentage >= 75) {
    return "A";
  }

  if (percentage >= 65) {
    return "B";
  }

  if (percentage >= 55) {
    return "C";
  }

  if (percentage >= 45) {
    return "D";
  }

  if (percentage >= 40) {
    return "E";
  }

  return "F";

}


/* =========================================================
   RESULTS HISTORY
   ========================================================= */

function renderResults() {

  const container =
    $("resultsList");


  const results =
    getResults()
      .slice()
      .reverse();


  container.innerHTML = "";


  if (!results.length) {

    container.innerHTML = `

      <div class="step-card">

        <h3>
          No results yet
        </h3>

        <p class="muted">
          Complete a CBT practice session
          and your result will appear here.
        </p>

      </div>

    `;

    return;

  }


  results.forEach(
    result => {

      const card =
        document.createElement(
          "article"
        );


      const scoreClass =
        result.percentage >= 65
          ? "score-good"
          : result.percentage >= 45
            ? "score-mid"
            : "score-low";


      card.className =
        "result-history-card";


      card.innerHTML = `

        <div>

          <strong>
            ${escapeHtml(
              result.subject
            )}
          </strong>

          <span>
            ${escapeHtml(
              result.department
            )}
            •
            ${escapeHtml(
              result.classLevel
            )}
          </span>

        </div>


        <div>

          <strong>
            ${result.correct}/${result.total}
          </strong>

          <span>
            Correct
          </span>

        </div>


        <div>

          <strong
            class="${scoreClass}">
            ${result.percentage}%
          </strong>

          <span>
            Percentage
          </span>

        </div>


        <div>

          <strong>
            ${gradeFor(
              result.percentage
            )}
          </strong>

          <span>
            ${escapeHtml(
              result.date
            )}
          </span>

        </div>

      `;


      container.appendChild(
        card
      );

    }
  );

}


/* =========================================================
   LIBRARY SUBJECTS
   ========================================================= */

function renderLibrarySubjects() {

  $("libraryHeading")
    .textContent =
      "Choose a subject";


  $("librarySubjects")
    .classList.remove(
      "hidden"
    );


  $("libraryClassArea")
    .classList.add(
      "hidden"
    );


  $("notesArea")
    .classList.add(
      "hidden"
    );


  const grid =
    $("librarySubjects");


  grid.innerHTML = "";


  allSubjects.forEach(
    subject => {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "choice-btn";


      button.innerHTML = `

        <strong>
          ${subject}
        </strong>

        <small>
          SS1 • SS2 • SS3 notes
        </small>

      `;


      button.addEventListener(
        "click",
        () => {

          openLibrarySubject(
            subject
          );

        }
      );


      grid.appendChild(
        button
      );

    }
  );

}


/* =========================================================
   OPEN LIBRARY SUBJECT
   ========================================================= */

function openLibrarySubject(
  subject
) {

  state.librarySubject =
    subject;


  $("librarySubjects")
    .classList.add(
      "hidden"
    );


  $("libraryClassArea")
    .classList.remove(
      "hidden"
    );


  $("notesArea")
    .classList.add(
      "hidden"
    );


  $("libraryClassHeading")
    .textContent =
      `${subject} — Choose class`;


  const grid =
    $("libraryClassGrid");


  grid.innerHTML = "";


  ["SS1", "SS2", "SS3"]
    .forEach(cls => {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "choice-btn";


      button.innerHTML = `

        <strong>
          ${cls}
        </strong>

        <small>
          Open ${subject}
          revision notes
        </small>

      `;


      button.addEventListener(
        "click",
        () => {

          openNotes(cls);

        }
      );


      grid.appendChild(
        button
      );

    });

}


/* =========================================================
   OPEN NOTES
   ========================================================= */

function openNotes(cls) {

  state.libraryClass =
    cls;


  $("libraryClassArea")
    .classList.add(
      "hidden"
    );


  $("notesArea")
    .classList.remove(
      "hidden"
    );


  const subject =
    state.librarySubject;


  const topics =
    subjectTopics[subject] ||
    ["General"];


  $("notesContent")
    .innerHTML = `

      <span class="eyebrow">
        ${escapeHtml(cls)}
        DIGITAL NOTES
      </span>

      <h2>
        ${escapeHtml(subject)}
      </h2>

      <p class="muted">
        Original revision notes for school practice.
        These are study materials, not official
        examination questions.
      </p>

      <h3>
        Topics to revise
      </h3>

      <ul>
        ${topics
          .map(
            topic =>
              `<li>${escapeHtml(topic)}</li>`
          )
          .join("")}
      </ul>

      <h3>
        Study approach
      </h3>

      <p>
        Read each topic carefully, make short
        revision points, practise questions,
        and review your mistakes after each
        CBT session.
      </p>

    `;

}


/* =========================================================
   TOAST
   ========================================================= */

function toast(message) {

  const element =
    $("toast");


  element.textContent =
    message;


  element.classList.add(
    "show"
  );


  clearTimeout(
    toast.timer
  );


  toast.timer =
    setTimeout(
      () => {

        element.classList.remove(
          "show"
        );

      },
      2800
    );

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHtml(value) {

  return String(value)

    .replaceAll(
      "&",
      "&amp;"
    )

    .replaceAll(
      "<",
      "&lt;"
    )

    .replaceAll(
      ">",
      "&gt;"
    )

    .replaceAll(
      '"',
      "&quot;"
    )

    .replaceAll(
      "'",
      "&#039;"
    );

}


/* =========================================================
   CLICK EVENTS
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const actionElement =
      event.target.closest(
        "[data-action]"
      );


    if (actionElement) {

      const action =
        actionElement.dataset.action;


      if (
        action === "open-login"
      ) {

        openAuth("login");

      }


      if (
        action === "open-register"
      ) {

        openAuth("register");

      }


      if (
        action === "close-auth"
      ) {

        showScreen(
          "landingPage"
        );

      }


      if (
        action === "show-login"
      ) {

        openAuth("login");

      }


      if (
        action === "show-register"
      ) {

        openAuth("register");

      }


      if (
        action === "logout"
      ) {

        logout();

      }


      if (
        action === "dashboard"
      ) {

        showScreen(
          "appPage"
        );

        showAppSection(
          "dashboard"
        );

      }


      if (
        action === "library-back"
      ) {

        renderLibrarySubjects();

      }


      if (
        action === "notes-back"
      ) {

        openLibrarySubject(
          state.librarySubject
        );

      }


      if (
        action === "result-dashboard"
      ) {

        showScreen(
          "appPage"
        );

        showAppSection(
          "dashboard"
        );

      }

    }


    const pageElement =
      event.target.closest(
        "[data-page]"
      );


    if (pageElement) {

      showScreen(
        "appPage"
      );


      showAppSection(
        pageElement.dataset.page
      );

    }

  }
);


/* =========================================================
   FORM EVENTS
   ========================================================= */

document.addEventListener(
  "submit",
  event => {

    if (
      event.target.id ===
      "loginForm"
    ) {

      handleLogin(event);

    }


    if (
      event.target.id ===
      "registerForm"
    ) {

      handleRegister(event);

    }

  }
);


/* =========================================================
   EXAM BUTTON EVENTS
   ========================================================= */

$("prevBtn")
  .addEventListener(
    "click",
    previousQuestion
  );


$("nextBtn")
  .addEventListener(
    "click",
    nextQuestion
  );


$("submitBtn")
  .addEventListener(
    "click",
    () =>
      submitExam(false)
  );


/* =========================================================
   PREVENT ACCIDENTAL EXAM EXIT
   ========================================================= */

window.addEventListener(
  "beforeunload",
  event => {

    if (
      state.questions.length &&
      !state.submitted &&
      $("examPage").classList.contains(
        "active"
      )
    ) {

      event.preventDefault();

      event.returnValue = "";

    }

  }
);


/* =========================================================
   INITIAL STATE
   ========================================================= */

if (state.student) {

  showScreen(
    "appPage"
  );

  updateStudentUI();

  showAppSection(
    "dashboard"
  );

}

else {

  showScreen(
    "landingPage"
  );

}