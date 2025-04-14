const questions = [
    // Second new set of 3 questions
    {
        question: "What is a data structure?",
        options: [
            "A) A way to organize and store data efficiently",
            "B) A type of programming language",
            "C) A set of arithmetic operations",
            "D) An operating system component"
        ],
        answer: "A) A way to organize and store data efficiently"
    },
    {
        question: "Which of the following is a linear data structure?",
        options: ["A) Tree", "B) Graph", "C) Array", "D) Hash Table"],
        answer: "C) Array"
    },
    // Third new set of 3 questions
    {
        question: "Which of the following is a linear data structure?",
        options: [
            "A) Stack",
            "B) Tree",
            "C) Graph",
            "D) Hash Table"
        ],
        answer: "A) Stack"
    },
    {
        question: "Which of the following is a non-linear data structure?",
        options: [
            "A) Array",
            "B) Linked List",
            "C) Stack",
            "D) Binary Tree"
        ],
        answer: "D) Binary Tree"
    },
    {
        question: "The queue is considered as a:",
        options: [
            "A) Non-linear data structure",
            "B) Class",
            "C) Linear data structure",
            "D) Pointer"
        ],
        answer: "C) Linear data structure"
    },
    // Previous set of 10 questions
    {
        question: "What is an array?",
        options: [
            "A) A collection of elements of different types stored in random memory locations.",
            "B) A linear data structure that collects elements of the same type and stores them in contiguous memory locations.",
            "C) A data structure that uses a hash table for element storage.",
            "D) A non-linear data structure that allows dynamic resizing."
        ],
        answer: "B) A linear data structure that collects elements of the same type and stores them in contiguous memory locations."
    },
    {
        question: "What is the index range of an array with size 'n'?",
        options: ["A) 1 to n", "B) 0 to n-1", "C) 0 to n", "D) 1 to n-1"],
        answer: "B) 0 to n-1"
    },
    {
        question: "How do you declare a one-dimensional array in C?",
        options: ["A) int array[];", "B) int array[10];", "C) int[] array;", "D) array int[10];"],
        answer: "B) int array[10];"
    },
    {
        question: "What is the correct way to initialize an array in C?",
        options: [
            "A) int array = {1, 2, 3, 4, 5};",
            "B) int array[5] = {1, 2, 3, 4, 5};",
            "C) array int[5] = {1, 2, 3, 4, 5};",
            "D) int array[5] = [1, 2, 3, 4, 5];"
        ],
        answer: "B) int array[5] = {1, 2, 3, 4, 5};"
    },
    {
        question: "Which of the following expressions correctly accesses the first element of an array named arr in most programming languages?",
        options: ["A. arr[0]", "B. arr[1]", "C. arr[first]", "D. arr[-1]"],
        answer: "A. arr[0]"
    },
    {
        question: "In most programming languages, which index would you use to replace the first element of an array named numbers with the value 100?",
        options: ["A. numbers[1] = 100", "B. numbers[0] = 100", "C. numbers[first] = 100", "D. numbers[-1] = 100"],
        answer: "B. numbers[0] = 100"
    },
    {
        question: "In the declaration int array[5] = {1, 2, 3, 5, 4};, what does the keyword array indicate?",
        options: [
            "A) The address of the last item in the array",
            "B) The address of the first item in the array",
            "C) The value of the first item in the array",
            "D) The size of the array"
        ],
        answer: "B) The address of the first item in the array"
    },
    {
        question: "Given the array declaration int array[5] = {1, 2, 3, 5, 4};, which expression gives the address of the third item in the array?",
        options: ["A) array", "B) array + 1", "C) array + 2", "D) array + 3"],
        answer: "C) array + 2"
    },
    {
        question: "For the array int array[5] = {15, 21, 3, 5, 7};, what is the value stored at the address array + 4?",
        options: ["A) 15", "B) 3", "C) 5", "D) 7"],
        answer: "D) 7"
    },
    {
        question: "Given the array declaration int array[5] = {1, 2, 3, 5, 4};, what is the value of array[array[0]]?",
        options: ["A) 1", "B) 2", "C) 3", "D) 5"],
        answer: "C) 3"
    },
    // First new set of 10 questions
    {
        question: "Which of the following is a disadvantage of using an array?",
        options: [
            "A) Dynamic size",
            "B) Random access",
            "C) Fixed size",
            "D) Efficient insertion and deletion"
        ],
        answer: "C) Fixed size"
    },
    {
        question: "What does the -> operator do in C++?",
        options: [
            "A) Compares two values",
            "B) Accesses members of an object through a pointer",
            "C) Performs logical AND operation",
            "D) None of the above"
        ],
        answer: "B) Accesses members of an object through a pointer"
    },
    {
        question: "Assuming 'S' is a pointer to a struct, which of the following is equivalent to S->data?",
        options: ["A) *(S.data)", "B) (*S.data)", "C) (*S).data", "D) S.*data"],
        answer: "C) (*S).data"
    },
    {
        question: "What is the purpose of a constructor in a class?",
        options: [
            "A) To destroy an object",
            "B) To allocate memory for an object",
            "C) To initialize an object",
            "D) To declare member functions"
        ],
        answer: "C) To initialize an object"
    },
    {
        question: "What does a pointer store?",
        options: ["A) Memory address", "B) Value", "C) Data Type", "D) None"],
        answer: "A) Memory address"
    },
    {
        question: "What is the purpose of dynamic memory allocation?",
        options: [
            "A) Allocating memory at compile-time",
            "B) Allocating memory at runtime",
            "C) Allocating memory on the stack",
            "D) Allocating memory for global variables"
        ],
        answer: "B) Allocating memory at runtime"
    },
    {
        question: "Which operator is used to access members of an object through a pointer in C++?",
        options: ["A) .", "B) *", "C) ->", "D) ::"],
        answer: "C) ->"
    },
    {
        question: "What is a linked list?",
        options: [
            "A) A data structure that stores elements in a contiguous block of memory",
            "B) A data structure consisting of nodes where each node contains data and a reference to the next node",
            "C) A collection of elements accessed using indices",
            "D) A data structure that allows bidirectional traversal"
        ],
        answer: "B) A data structure consisting of nodes where each node contains data and a reference to the next node"
    },
    {
        question: "How is a node typically defined in a linked list?",
        options: [
            "A) A data value only",
            "B) A pointer to the previous node",
            "C) A data value and a pointer to the next node",
            "D) A data value and a pointer to the previous node"
        ],
        answer: "C) A data value and a pointer to the next node"
    },
    {
        question: "What is the purpose of the 'next' pointer in a linked list node?",
        options: [
            "A) Stores the data value of the node",
            "B) Points to the previous node",
            "C) Points to the next node in the sequence",
            "D) Determines the size of the linked list"
        ],
        answer: "C) Points to the next node in the sequence"
    },
    // Second new set of 3 questions
    {
        question: "What is a data structure?",
        options: [
            "A) A way to organize and store data efficiently",
            "B) A type of programming language",
            "C) A set of arithmetic operations",
            "D) An operating system component"
        ],
        answer: "A) A way to organize and store data efficiently"
    },
    {
        question: "Which of the following is a linear data structure?",
        options: ["A) Tree", "B) Graph", "C) Array", "D) Hash Table"],
        answer: "C) Array"
    },
    {
        question: "Which data structure uses First In First Out (FIFO) principle?",
        options: ["A) Stack", "B) Queue", "C) Tree", "D) Linked List"],
        answer: "B) Queue"
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = new Array(questions.length).fill(null);

const landingPage = document.getElementById("landing-page");
const examPage = document.getElementById("exam-page");
const resultsPage = document.getElementById("results-page");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const scoreDisplay = document.getElementById("score");
const startExamBtn = document.getElementById("start-exam-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const seeAnswerBtn = document.getElementById("see-answer-btn");
const correctAnswerDisplay = document.getElementById("correct-answer");

// Add event listeners to buttons
startExamBtn.addEventListener("click", startExam);
prevBtn.addEventListener("click", prevQuestion);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartExam);
seeAnswerBtn.addEventListener("click", showAnswer);

function startExam() {
    landingPage.classList.remove("active");
    examPage.classList.add("active");
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = `${currentQuestion + 1}. ${q.question}`;
    optionsContainer.innerHTML = "";
    correctAnswerDisplay.style.display = "none"; // Hide the answer when showing a new question
    correctAnswerDisplay.textContent = ""; // Clear the previous answer

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
        showQuestion();
    } else {
        calculateScore();
        showResults();
    }
}

function calculateScore() {
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].answer) {
            score++;
        }
    });
}

function showResults() {
    examPage.classList.remove("active");
    resultsPage.classList.add("active");
    scoreDisplay.textContent = `You scored ${score} out of ${questions.length}`;
}

function restartExam() {
    currentQuestion = 0;
    score = 0;
    userAnswers.fill(null);
    resultsPage.classList.remove("active");
    examPage.classList.add("active");
    showQuestion();
}