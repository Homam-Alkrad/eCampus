const questions = [
    {
        question: "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects', which can contain data in the form of fields and code in the form of procedures.",
        options: ["True", "False"],
        answer: "True"
    },
    // Section 1: True / False / Yes / No
    {
        question: "A constructor in C# can have a return type.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "A class can contain both fields and methods.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "Objects of a class share the same set of member variables.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "The this keyword in C# refers to the current instance of the class.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "A foreach loop can be used to iterate over elements of an array but not over elements of a list.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "A constructor with parameters is called a default constructor.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Objects of reference types are typically allocated on the stack.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Access modifiers control the visibility and accessibility of types and members in C#.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "The private access modifier restricts access to members to the same class in which they are declared.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "Value types are typically allocated on the heap.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "The public access modifier allows a member to be accessed from outside its containing class.",
        options: ["True", "False"],
        answer: "True"
    },
    // Section 2: Concept Definitions
    {
        question: "In object-oriented programming, a class is a:",
        options: [
            "A) Blueprint for creating objects",
            "B) Instance of an object",
            "C) Method within an object",
            "D) Variable declaration"
        ],
        answer: "A) Blueprint for creating objects"
    },
    {
        question: "Encapsulation in object-oriented programming refers to:",
        options: [
            "A) Grouping similar objects into classes",
            "B) Exposing internal implementation details",
            "C) Bundling data and methods within a class",
            "D) Instantiating objects from a class"
        ],
        answer: "C) Bundling data and methods within a class"
    },
    {
        question: "In C#, which keyword is used to create an instance of a class?",
        options: ["A) create", "B) new", "C) instance", "D) initialize"],
        answer: "B) new"
    },
    {
        question: "When is a constructor called in C#?",
        options: [
            "A) When an object is created.",
            "B) When a method is called.",
            "C) When a property is accessed.",
            "D) When an object is destroyed."
        ],
        answer: "A) When an object is created."
    },
    {
        question: "Which of the following statements accurately describes a constructor?",
        options: [
            "A) Constructors must be public.",
            "B) Constructors have the same name as the class.",
            "C) Constructors have no return data type.",
            "D) All of the above."
        ],
        answer: "D) All of the above."
    },
    {
        question: "What is the name of the property 'Id' in the Exam class?",
        options: [
            "A) Instance variable",
            "B) Class variable",
            "C) Read-only property",
            "D) None of the above"
        ],
        answer: "A) Instance variable"
    },
    {
        question: "What is the name of the property representing the total number of students in the Exam class?",
        options: [
            "A) Instance variable",
            "B) Class variable",
            "C) Read-only property",
            "D) None of the above"
        ],
        answer: "B) Class variable"
    },
    {
        question: "What is the name of the property representing the Title in the Exam class?",
        options: [
            "A) Write-only property",
            "B) Class variable",
            "C) Read-only property",
            "D) None of the above"
        ],
        answer: "C) Read-only property"
    },
    {
        question: "What is a constructor in C#?",
        options: [
            "A) A method used to destroy an object",
            "B) A method used to initialize an object",
            "C) A method used to clone an object",
            "D) A static method inside a class"
        ],
        answer: "B) A method used to initialize an object"
    },
    {
        question: "What is a default constructor in C#?",
        options: [
            "A) A constructor with parameters",
            "B) A constructor with a return type",
            "C) A parameterless constructor",
            "D) A static constructor"
        ],
        answer: "C) A parameterless constructor"
    },
    {
        question: "What is constructor overloading in C#?",
        options: [
            "A) Defining multiple constructors with the same parameters",
            "B) Defining multiple constructors with different parameter lists",
            "C) Using a constructor inside another constructor",
            "D) Calling base class constructors only"
        ],
        answer: "B) Defining multiple constructors with different parameter lists"
    },
    {
        question: "What is the main purpose of using access modifiers in C#?",
        options: [
            "A) To specify the size of variables",
            "B) To control the accessibility of members within a class",
            "C) To define the type of a variable",
            "D) To determine the scope of a variable"
        ],
        answer: "B) To control the accessibility of members within a class"
    },
    {
        question: "In C#, which access modifier allows a member to be accessible only within its own class or struct?",
        options: [
            "A) public",
            "B) private",
            "C) protected",
            "D) internal"
        ],
        answer: "B) private"
    },
    {
        question: "Which of the following is an example of encapsulation?",
        options: [
            "A) Making class members public",
            "B) Providing a public getter and setter for a private member variable",
            "C) Exposing internal implementation details to external classes",
            "D) Allowing direct access to private member variables"
        ],
        answer: "B) Providing a public getter and setter for a private member variable"
    },
    {
        question: "In C#, how is a class variable declared?",
        options: [
            "A) Using the \"var\" keyword",
            "B) Using the \"instance\" keyword",
            "C) Using the \"static\" keyword",
            "D) Using the \"new\" keyword"
        ],
        answer: "C) Using the \"static\" keyword"
    },
    {
        question: "In object-oriented programming, what do we call a property that is defined within a class?",
        options: [
            "A) Instance variable",
            "B) Local variable",
            "C) Global variable",
            "D) Static variable"
        ],
        answer: "A) Instance variable"
    },
    {
        question: "Boxing in C# is the process of:",
        options: [
            "A) Converting a value type to a reference type",
            "B) Converting a reference type to a value type",
            "C) Inheriting from a base class",
            "D) Implementing encapsulation"
        ],
        answer: "A) Converting a value type to a reference type"
    },
    {
        question: "What is the purpose of unboxing in C#?",
        options: [
            "A) Converting a reference type to a value type",
            "B) Converting a value type to a reference type",
            "C) Converting a subclass object to a superclass reference",
            "D) Converting a superclass object to a subclass reference"
        ],
        answer: "A) Converting a reference type to a value type"
    },
    {
        question: "In C#, what is the process of converting a value type to a reference type called?",
        options: [
            "A) Casting",
            "B) Boxing",
            "C) Unboxing",
            "D) Upcasting"
        ],
        answer: "B) Boxing"
    },
    {
        question: "How are enums defined in C#?",
        options: [
            "A) Using the keyword \"class\"",
            "B) Using the keyword \"enum\"",
            "C) Using the keyword \"struct\"",
            "D) Using the keyword \"interface\""
        ],
        answer: "B) Using the keyword \"enum\""
    },
    {
        question: "Enumerations (enums) in C# are primarily used for:",
        options: [
            "A) Defining classes",
            "B) Storing multiple values in a single variable",
            "C) Creating objects",
            "D) Defining named constant values"
        ],
        answer: "D) Defining named constant values"
    },
    {
        question: "What does the this keyword refer to in C#?",
        options: [
            "A) It refers to the current class instance",
            "B) It refers to the base class",
            "C) It refers to a static member of the class",
            "D) It refers to a method parameter"
        ],
        answer: "A) It refers to the current class instance"
    },

    // Section 3: Other Questions
    {
        question: "Which statement about constructors in C# is true?",
        options: [
            "A) A class can only have one constructor",
            "B) Constructors must have a return type",
            "C) Constructors can be overloaded",
            "D) Constructors are defined with the keyword 'construct'"
        ],
        answer: "C) Constructors can be overloaded"
    },
    {
        question: "What happens if you don't define any constructor in a C# class?",
        options: [
            "A) Compilation error",
            "B) Runtime error",
            "C) The class automatically gets a default parameterless constructor",
            "D) The class cannot be instantiated"
        ],
        answer: "C) The class automatically gets a default parameterless constructor"
    },
    {
        question: "How many constructors can a C# class have?",
        options: [
            "A) Only one constructor",
            "B) Multiple constructors",
            "C) No constructors",
            "D) Constructors are not allowed in classes"
        ],
        answer: "B) Multiple constructors"
    },
    {
        question: "What is the purpose of a constructor in C#?",
        options: [
            "A) To instantiate a new object",
            "B) To destroy an object",
            "C) To define properties of a class",
            "D) To define methods of a class"
        ],
        answer: "A) To instantiate a new object"
    },
    {
        question: "Which of the following is a valid way to access a class variable in C#?",
        options: [
            "A) By using the new keyword followed by the class name.",
            "B) By using the class name followed by the dot operator and the variable name.",
            "C) By creating an instance of the class and then accessing the variable using the instance name.",
            "D) By declaring the variable as static within a method, making it accessible from any part of the code."
        ],
        answer: "C) By creating an instance of the class and then accessing the variable using the instance name."
    },
    {
        question: "When is boxing and unboxing typically used in C#?",
        options: [
            "A) When dealing with inheritance",
            "B) When working with value types in a context that requires reference types",
            "C) When implementing polymorphism",
            "D) When encapsulating data within objects"
        ],
        answer: "B) When working with value types in a context that requires reference types"
    },
];


// Add your questions list here
// const questions = [ ... ];

let currentQuestion = 0;
let score = 0;
let totalScore = 0; // To track the cumulative score across all sets
let userAnswers = new Array(questions.length).fill(null);
let currentSet = 0;
const questionsPerSet = 10;

const landingPage = document.getElementById("landing-page");
const examPage = document.getElementById("exam-page");
const resultsPage = document.getElementById("results-page");
const wrongAnswersPage = document.getElementById("wrong-answers-page");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const scoreDisplay = document.getElementById("score");
const startExamBtn = document.getElementById("start-exam-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const seeAnswerBtn = document.getElementById("see-answer-btn");
const viewWrongBtn = document.getElementById("view-wrong-btn");
const backToResultsBtn = document.getElementById("back-to-results-btn");
const correctAnswerDisplay = document.getElementById("correct-answer");
const wrongAnswersContainer = document.getElementById("wrong-answers-container");
const totalQuestionsDisplay = document.getElementById("total-questions");
const totalQuestionsResultsDisplay = document.getElementById("total-questions-results");

// Set the total questions display
totalQuestionsDisplay.textContent = `عدد الأسئلة: ${questions.length}`;
totalQuestionsResultsDisplay.textContent = `عدد الأسئلة: ${questions.length}`;

// Add event listeners
startExamBtn.addEventListener("click", startExam);
prevBtn.addEventListener("click", prevQuestion);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartExam);
seeAnswerBtn.addEventListener("click", showAnswer);
viewWrongBtn.addEventListener("click", showWrongAnswers);
backToResultsBtn.addEventListener("click", backToResults);

function startExam() {
    landingPage.classList.remove("active");
    examPage.classList.add("active");
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = `${currentQuestion + 1}. ${q.question}`;
    optionsContainer.innerHTML = "";
    correctAnswerDisplay.style.display = "none";
    correctAnswerDisplay.textContent = "";

    q.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = option;
        if (userAnswers[currentQuestion] === option) {
            optionElement.classList.add("selected");
        }
        optionElement.addEventListener("click", () => selectOption(option));
        optionsContainer.appendChild(optionElement);
    });

    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === questions.length - 1 ? "Submit" : "Next";
}

function selectOption(option) {
    userAnswers[currentQuestion] = option;
    showQuestion();
}

function showAnswer() {
    const q = questions[currentQuestion];
    correctAnswerDisplay.textContent = `Correct Answer: ${q.answer}`;
    correctAnswerDisplay.style.display = "block";
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        if ((currentQuestion + 1) % questionsPerSet === 0 && currentQuestion < questions.length - 1) {
            calculateScoreForSet();
            showResults();
        } else {
            showQuestion();
        }
    } else {
        calculateScoreForSet();
        showResults();
    }
}

function calculateScoreForSet() {
    score = 0;
    const start = currentSet * questionsPerSet;
    const end = Math.min((currentSet + 1) * questionsPerSet, questions.length);
    for (let i = start; i < end; i++) {
        if (userAnswers[i] === questions[i].answer) {
            score++;
        }
    }
    totalScore += score; // Add the set score to the cumulative total
}

function showResults() {
    examPage.classList.remove("active");
    resultsPage.classList.add("active");
    const start = currentSet * questionsPerSet + 1;
    const end = Math.min((currentSet + 1) * questionsPerSet, questions.length);
    scoreDisplay.textContent = `Set Score: ${score} / ${end - start + 1} for questions ${start} to ${end} | Total Score: ${totalScore} / ${currentQuestion + 1}`;
    restartBtn.textContent = currentQuestion < questions.length - 1 ? "Continue" : "Restart Exam";
}

function restartExam() {
    if (currentQuestion < questions.length - 1) {
        currentSet++;
        examPage.classList.add("active");
        resultsPage.classList.remove("active");
        showQuestion();
    } else {
        currentQuestion = 0;
        currentSet = 0;
        score = 0;
        totalScore = 0; // Reset total score on restart
        userAnswers.fill(null);
        resultsPage.classList.remove("active");
        examPage.classList.add("active");
        showQuestion();
    }
}

function showWrongAnswers() {
    resultsPage.classList.remove("active");
    wrongAnswersPage.classList.add("active");
    wrongAnswersContainer.innerHTML = "";

    const start = currentSet * questionsPerSet;
    const end = Math.min((currentSet + 1) * questionsPerSet, questions.length);
    let hasWrongAnswers = false;

    for (let i = start; i < end; i++) {
        if (userAnswers[i] !== questions[i].answer && userAnswers[i] !== null) {
            hasWrongAnswers = true;
            const wrongAnswerDiv = document.createElement("div");
            wrongAnswerDiv.classList.add("wrong-answer");
            wrongAnswerDiv.innerHTML = `
                <h3>${i + 1}. ${questions[i].question}</h3>
                <p><strong>Your Answer:</strong> ${userAnswers[i]}</p>
                <p><strong>Correct Answer:</strong> ${questions[i].answer}</p>
            `;
            wrongAnswersContainer.appendChild(wrongAnswerDiv);
        }
    }

    if (!hasWrongAnswers) {
        wrongAnswersContainer.innerHTML = "<p>No incorrect answers in this set.</p>";
    }
}

function backToResults() {
    wrongAnswersPage.classList.remove("active");
    resultsPage.classList.add("active");
}
