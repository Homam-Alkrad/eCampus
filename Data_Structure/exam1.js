const questions = [
    {
        "question": "What is a data structure?",
        "options": [
            "A) A method for data transmission",
            "B) A language used to define data",
            "C) A tool for data encryption",
            "D) A way to store and organize data"
        ],
        "answer": "D) A way to store and organize data"
    },    {
        "question": "Trees are a type of linear data structure.",
        "options": [
            "A) True",
            "B) False"
        ],
        "answer": "B) False"
    },    {
        "question": "Arrays allow constant-time access to elements using an index.",
        "options": [
            "A) True",
            "B) False"
        ],
        "answer": "A) True"
    },
    {
        "question": "A singly linked list supports efficient access to the last element in O(1) time.",
        "options": [
            "A) True",
            "B) False"
        ],
        "answer": "B) False"
    },
    {
        "question": "Graphs are a type of non-linear data structure.",
        "options": [
            "A) True",
            "B) False"
        ],
        "answer": "A) True"
    },
    {
        "question": "A stack is considered a linear data structure.",
        "options": [
            "A) True",
            "B) False"
        ],
        "answer": "A) True"
    },
    {
        "question": "Which of the following statement(s) will cause a dangle pointer?",
        "options": [
            "A) int *x = 0, a ; x = &a ;",
            "B) int *x = new int ; delete x ; x = 0;",
            "C) int *x = new int ; *x = 0 ;",
            "D) int *x = new int ; x = 0 ; delete x ;"
        ],
        "answer": "A) int *x = 0, a ; x = &a ;"
    },
    {
        "question": "Which of the following statement(s) will cause a memory leak?",
        "options": [
            "A) int* x = new int ; x = 0;",
            "B) int* x, a ; x = &a ;",
            "C) int* x = NULL, a ; x = &a ;",
            "D) int*x = new int ; delete x ;"
        ],
        "answer": "A) int* x = new int ; x = 0;"
    },
    {
        "question": "Assuming 'S' is a pointer to a class, which of the following is equivalent to S->data?",
        "options": [
            "A) (*S).data",
            "B) S.*data",
            "C) (*S.data)",
            "D) *(S.data)"
        ],
        "answer": "A) (*S).data"
    },
    {
        "question": "If A->next = A then which of the following must be true?",
        "options": [
            "A) A->next->next == 0;",
            "B) A->next == 0;",
            "C) A == A->next->next;",
            "D) All of these"
        ],
        "answer": "C) A == A->next->next;"
    },
    {
        "question": "What is the effect of De-referencing a pointer variable, which has the value NULL?",
        "options": [
            "A) Zero is returned.",
            "B) The operation is ignored.",
            "C) Syntax error.",
            "D) A run-time error."
        ],
        "answer": "D) A run-time error."
    },
    {
        "question": "If you have implemented a linked list, keeping track of a head and tail pointers. Which of pointers will change during an insertion into an EMPTY linked-list?",
        "options": [
            "A) Only head pointer changes.",
            "B) Only tail pointer changes.",
            "C) Neither change",
            "D) Both will change"
        ],
        "answer": "D) Both will change"
    },
    {
        "question": "Which of the following best describes the advantages of data structures in software development?",
        "options": [
            "A) They enable efficient data organization and manipulation.",
            "B) They ensure programs are bug-free.",
            "C) They simplify the syntax of programming languages."
        ],
        "answer": "A) They enable efficient data organization and manipulation."
    },
    {
        "question": "A good data structure should aim to:",
        "options": [
            "A) Reducing the complexity of algorithms meant to process the data",
            "B) Saving in memory space",
            "C) Easing up the retrieval of needed data",
            "D) All the above but not necessarily at the same time."
        ],
        "answer": "D) All the above but not necessarily at the same time."
    },
    {
        "question": "We have a pointer ptr pointing to the first element of an array, how can we print the second element of the array using this pointer?",
        "options": [
            "A) cout << ptr [1];",
            "B) cout << ptr++;",
            "C) cout << ++ptr;",
            "D) We can only print the first element."
        ],
        "answer": "A) cout << ptr [1];"
    },
    {
        "question": "What is the purpose of a destructor in a C++ class?",
        "options": [
            "A) To allocate memory for class objects",
            "B) To destruct class objects",
            "C) To initialize class objects",
            "D) To access class members"
        ],
        "answer": "B) To destruct class objects"
    },
    {
        "question": "What is NOT TRUE about class constructors?",
        "options": [
            "A) They have the same name as their class",
            "B) They do not have return type",
            "C) They cannot take parameters",
            "D) Constructors are called when objects are created"
        ],
        "answer": "C) They cannot take parameters"
    },
    {
        "question": "In which of these cases, using a linked list is better than using an array?",
        "options": [
            "A) When we might need to insert elements in between previously stored elements.",
            "B) When we need the elements to be accessed in sequential order.",
            "C) When we need to remove elements in the middle very often.",
            "D) All of the above."
        ],
        "answer": "D) All of the above."
    },
    {
        "question": "Which of the following statement(s) is/are invalid?",
        "options": [
            "A) int *P = new int; *P = 2;",
            "B) int *p; p++;",
            "C) float *p = new int[3];",
            "D) a + b"
        ],
        "answer": "D) a + b"
    },
    {
        "question": "What is the time complexity of deletion of an element in the singly-linked list?",
        "options": [
            "A) O(1)",
            "B) O(n)",
            "C) O(log n)",
            "D) Either A or B"
        ],
        "answer": "D) Either A or B"
    },
    {
        "question": "Deleting a node from the end of a linked list (implemented with head pointer only) requires the modification of how many pointers?",
        "options": [
            "A) 1",
            "B) 2",
            "C) 3",
            "D) a OR b"
        ],
        "answer": "D) a OR b"
    },
    {
        "question": "Which of the following sets of statements will correctly delete the node from a linked list named 'List' that q is pointing to?",
        "options": [
            "A) p->next = q->next; delete q;",
            "B) p->next = q->next; delete q->next;",
            "C) p->next->next = q; delete q;",
            "D) None of these"
        ],
        "answer": "A) p->next = q->next; delete q;"
    },
    {
        "question": "What is a data structure?",
        "options": [
            "A) A way to organize and store data to enable efficient access and modification.",
            "B) A specific format for representing data.",
            "C) A program that performs specific operations on data.",
            "D) A sequence of instructions for solving a problem."
        ],
        "answer": "A) A way to organize and store data to enable efficient access and modification."
    },
    {
        "question": "The study of data structures helps us to answer the following:",
        "options": [
            "A) What data should we store from what data should we discard",
            "B) How to secure the data from being accessed by attackers",
            "C) How to store and organize the data in memory",
            "D) Whether we should store data on the stack or dynamically on the heap"
        ],
        "answer": "C) How to store and organize the data in memory"
    },
    {
        "question": "What is the primary purpose of classes in C++?",
        "options": [
            "A) To define functions",
            "B) To create user-defined data types",
            "C) To allocate memory dynamically",
            "D) To perform mathematical calculations"
        ],
        "answer": "B) To create user-defined data types"
    },
    {
        "question": "Which of the following statements is correct?",
        "options": [
            "A) Data items in a class must be private.",
            "B) Member functions of a class must be private.",
            "C) Both data and functions can be either private or public.",
            "D) The class can have more than one destructor."
        ],
        "answer": "C) Both data and functions can be either private or public."
    },
    {
        "question": "In which of these cases, is using an array better than using a linked list to store data?",
        "options": [
            "A) If we need to access the stored elements sequentially.",
            "B) Arrays are always better to use in all cases.",
            "C) Linked Lists are always better to use in all cases.",
            "D) If we need to access the stored elements randomly using indices."
        ],
        "answer": "D) If we need to access the stored elements randomly using indices."
    },
    {
        "question": "How is the second element in an array named 'A' accessed based on pointer notation?",
        "options": [
            "A) *A + 1",
            "B) *(A+1)",
            "C) *(A + 1)",
            "D) &(A + 1)"
        ],
        "answer": "B) *(A+1)"
    },
    {
        "question": "Which of the following pointer(s) will be a dangle pointer(s) after executing the following code: int *p = new int, *q = new int; p = q; delete p; p = 0;",
        "options": [
            "A) q",
            "B) p",
            "C) p and q"
        ],
        "answer": "A) q"
    },
    {
        "question": "What is the disadvantage of a Linked List?",
        "options": [
            "A) Dynamic size",
            "B) Random access is not allowed",
            "C) Ease of insertion/deletion",
            "D) None of the above"
        ],
        "answer": "B) Random access is not allowed"
    },
    {
        "question": "Memory leaks occur when dynamically allocated memory is properly deallocated.",
        "options": [
            "A) True",
            "B) False"
        ],
        "answer": "B) False"
    },
    {
        "question": "Number of Null pointers in a circular linked list?",
        "options": [
            "A) 0",
            "B) 1",
            "C) 2",
            "D) 4"
        ],
        "answer": "A) 0"
    },
    {
        "question": "Which operation DOESN'T depend on Linked List length?",
        "options": [
            "A) Delete last node",
            "B) Add at end",
            "C) Delete first node",
            "C) Add at middle"
        ],
        "answer": "C) Delete first node"
    },
    {
        "question": "Single linked list with only head: what depends on length?",
        "options": [
            "A) Delete first",
            "B) Insert as first",
            "C) Print first",
            "D) Add at end"
        ],
        "answer": "D) Add at end"
    },
    {
        "question": "What is a memory leak?",
        "options": [
            "A) Memory deallocated properly",
            "B) Allocated on stack",
            "C) Not deallocated",
            "D) Using new operator"
        ],
        "answer": "C) Not deallocated"
    },
    {
        "question": "What is a class in C++?",
        "options": [
            "A) A collection of variables",
            "B) A built-in data type like int or float",
            "C) A collection of functions",
            "D) A user-defined data type that contains data members and member functions"
        ],
        "answer": "D) A user-defined data type that contains data members and member functions"
    },
    {
        "question": "What will happen when the structure is declared?",
        "options": [
            "A) It will allocate the memory",
            "B) It will be declared and initialized",
            "C) It will not allocate any memory",
            "D) It will allocate the memory and initialized"
        ],
        "answer": "C) It will not allocate any memory"
    },
    {
        "question": "Which of the following gets called when an object is being created?",
        "options": [
            "A) Destructor",
            "B) Variables",
            "C) Virtual function",
            "D) Constructor"
        ],
        "answer": "D) Constructor"
    },
    {
        "question": "The operation of visiting each element in the list is known as:",
        "options": [
            "A) Traversal",
            "B) Sorting",
            "C) Inserting",
            "D) Merging"
        ],
        "answer": "A) Traversal"
    },
    {
        "question": "Which of the following best describes the significance of data structures in software development?",
        "options": [
            "A) They enable efficient data organization and manipulation",
            "B) They make programs run faster",
            "C) They ensure programs are bug-free",
            "D) They simplify the syntax of programming languages"
        ],
        "answer": "A) They enable efficient data organization and manipulation"
    },
    {
        "question": "The delete operator is used to deallocate dynamically allocated memory.",
        "options": [
            "A) True",
            "B) False"
        ],
        "answer": "A) True"
    },
    {
        "question": "A linked list of nodes can be implemented using:",
        "options": [
            "A) Neither struct nor class",
            "B) struct",
            "C) class",
            "D) struct or class"
        ],
        "answer": "D) struct or class"
    },
];


let currentQuestion = 0;
let score = 0;
let userAnswers = new Array(questions.length).fill(null);
let currentSet = 0; // Track the current set of 20 questions
const questionsPerSet = 20; // Number of questions per set

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
const totalQuestionsDisplay = document.getElementById("total-questions");
const totalQuestionsResultsDisplay = document.getElementById("total-questions-results");

// Display the total number of questions on both exam and results pages
totalQuestionsDisplay.textContent = `عدد الأسئلة: ${questions.length}`;
totalQuestionsResultsDisplay.textContent = `عدد الأسئلة: ${questions.length}`;

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
        // Check if we've reached the end of a set of 20 questions
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
    // Calculate score for the current set of questions
    const start = currentSet * questionsPerSet;
    const end = Math.min((currentSet + 1) * questionsPerSet, questions.length);
    for (let i = start; i < end; i++) {
        if (userAnswers[i] === questions[i].answer) {
            score++;
        }
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
    const start = currentSet * questionsPerSet + 1;
    const end = Math.min((currentSet + 1) * questionsPerSet, questions.length);
    scoreDisplay.textContent = ` ${score} / ${end - start + 1} for questions ${start} to ${end}`;
    // Change the restart button text to "Continue" if there are more questions
    restartBtn.textContent = currentQuestion < questions.length - 1 ? "Continue" : "Restart Exam";
}

function restartExam() {
    if (currentQuestion < questions.length - 1) {
        // Continue to the next set
        currentSet++;
        examPage.classList.add("active");
        resultsPage.classList.remove("active");
        showQuestion();
    } else {
        // Reset the quiz
        currentQuestion = 0;
        currentSet = 0;
        score = 0;
        userAnswers.fill(null);
        resultsPage.classList.remove("active");
        examPage.classList.add("active");
        showQuestion();
    }
}