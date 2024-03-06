function survey() {
  return {
    step: 1,
    userData: {
      name: "",
      dob: "",
      id: "",
      addr: "",
      // Add other user data properties here
    },
    yesNoQuestions: [
      { text: "Java is a strictly typed programming language", answer: null },
      {
        text: "The front-end of a website is responsible for server-side logic.",
        answer: null,
      },
      {
        text: "A semitone is the smallest interval in Western music.",
        answer: null,
      },
      {
        text: "Have you ever streamed movies or TV shows online?",
        answer: null,
      },
      { text: "HTML stands for Hyper Text Markup Language.", answer: null },
      { text: "Have you ever taken an online course or class?", answer: null },
      { text: "Gaming consoles use Java for game development.", answer: null },
      {
        text: "A boolean variable can only have two possible values: true or false.",
        answer: null,
      },
      {
        text: "The fretboard of a guitar is divided into segments called frets.",
        answer: null,
      },
      {
        text: "In Java, final is used to declare a constant variable.",
        answer: null,
      },
      // Add more yes/no questions here
    ],
    // Add data for other question types here
    multipleChoiceQuestions: [
      {
        text: "What does HTML stand for?",
        options: [
          "Hyper Transfer Markup Language",
          "Hyper Text Makeup Language",
          "Hyper Text Markup Language",
          "High-Level Text Language",
        ],
        answer: null,
      },
      {
        text: "Which programming language is commonly used for front-end development",
        options: ["Java", "Python", "JavaScript", "C++"],
        answer: null,
      },
      {
        text: "Which device do you primarily use to access the internet?",
        options: ["Desktop computer", "Laptop", "Smartphone", "Tablet"],
        answer: null,
      },
      {
        text: "Which search engine do you use the most?",
        options: ["Google", "Bing", "Yahoo", "DuckDuckGo"],
        answer: null,
      },
      {
        text: "Which social media platform do you use the most?",
        options: ["Facebook", "Twitter", "Instagram", "Snapchat"],
        answer: null,
      },
      {
        text: "What is your preferred method of online shopping?",
        options: ["Desktop computer", "Mobile app", "Mobile website", "Tablet"],
        answer: null,
      },
      {
        text: "What is the standard tuning for a guitar",
        options: ["EADGBE", "EADGBB", "EADGCD", "EADGFD"],
        answer: null,
      },
      {
        text: "Which online payment method do you use the most?",
        options: [
          "Credit/Debit card",
          "PayPal",
          "Digital wallets (e.g., Apple Pay, Google Pay)",
          "Bank transfer",
        ],
        answer: null,
      },
      {
        text: "What is the function of CSS in web development",
        options: [
          "Define structure",
          "Control layout",
          "Style presentation",
          "Handle server-side logic",
        ],
        answer: null,
      },
      {
        text: "How many keys are there on a standard piano?",
        options: ["76", "88", "64", "72"],
        answer: null,
      },
      // Add more multiple choice questions here
    ],
    multipleSelectionQuestions: [
      {
        text: "What is the purpose of the else statement in programming",
        options: [
          "Define a loop",
          "Handle exceptions",
          "Provide an alternative condition",
          "LinkedIn",
        ],
        answer: [],
      },
      {
        text: "Which online entertainment services do you subscribe to? (Select all that apply)",
        options: [
          "Video streaming (e.g., Netflix, Hulu)",
          "Music streaming (e.g., Spotify, Apple Music)",
          "Online gaming services",
          "Online fitness or wellness platforms",
        ],
        answer: [],
      },
      {
        text: "Which online activities do you engage in? (Select all that apply)",
        options: [
          "Browsing websites",
          "Online shopping",
          "Streaming videos",
          "Online gaming",
        ],
        answer: [],
      },
      {
        text: "Which types of online content do you consume? (Select all that apply)",
        options: ["News articles", "Blogs", "Podcasts", "Video tutorials"],
        answer: [],
      },
      {
        text: "Which online services do you use for communication? (Select all that apply)",
        options: [
          "Email",
          "Instant messaging",
          "Video calls",
          "Social media messaging",
        ],
        answer: [],
      },
      {
        text: "Which online resources do you use for job searching or professional development? (Select all that apply)",
        options: [
          "Job boards",
          "Professional networking platforms (e.g., LinkedIn)",
          "Online portfolios or personal websites",
          "Online skill-building courses or certifications",
        ],
        answer: [],
      },
      {
        text: "Which online security measures do you take? (Select all that apply)",
        options: [
          "Using strong passwords",
          "Enabling two-factor authentication",
          "Keeping software updated",
          "Using a virtual private network (VPN)",
        ],
        answer: [],
      },

      {
        text: "Which online productivity tools do you use? (Select all that apply)",
        options: [
          "Word processing software",
          "Spreadsheet software",
          "Cloud storage",
          "Task management apps",
        ],
        answer: [],
      },

      {
        text: "Which online learning resources do you use? (Select all that apply)",
        options: [
          "Online courses",
          "Educational videos",
          "E-books or digital publications",
          "Online tutorials or workshops",
        ],
        answer: [],
      },
      {
        text: "Which online platforms do you use for financial transactions? (Select all that apply)",
        options: [
          "Online banking",
          "Mobile banking apps",
          "Online payment services (e.g., PayPal, Venmo)",
          "Cryptocurrency exchanges",
        ],
        answer: [],
      },

      // Add more multiple selection questions here
    ],
    openEndedQuestions: [
      {
        text: "What are some ways in which you believe the internet could be improved or made more accessible?",
        answer: "",
      },
      {
        text: "What are some challenges or drawbacks of using the internet that you've encountered?",
        answer: "",
      },
      {
        text: "What improvements would you like to see in online services or websites?",
        answer: "",
      },
      {
        text: "How has the internet influenced your daily life or routine?",
        answer: "",
      },
      {
        text: "What are some ways in which you believe the internet has positively impacted society?",
        answer: "",
      },

      {
        text: "How do you think the internet will continue to evolve in the future, and what changes or advancements do you anticipate?",
        answer: "",
      },
      {
        text: "What are some benefits of using the internet that you've experienced?",
        answer: "",
      },
      {
        text: "What are some online privacy or security practices that you follow?",
        answer: "",
      },
      {
        text: "How do you typically evaluate the credibility or trustworthiness of online information or sources?",
        answer: "",
      },
      {
        text: "What are some concerns or risks associated with internet usage that you're aware of?",
        answer: "",
      },

      // Add more open-ended questions here
    ],
    allQuestions: [],

    nextStep() {
      this.step++;
      if (this.step === 6) {
        this.compileAllQuestions();
      }
    },
    restart() {
      this.step = 1;
      this.userData = {
        name: "",
        dob: "",
        id: "",
        addr: "",
        // Reset other user data properties here
      };
      this.yesNoQuestions.forEach((q) => (q.answer = null));
      this.multipleChoiceQuestions.forEach((q) => (q.answer = null));
      this.multipleSelectionQuestions.forEach((q) => (q.answer = []));
      this.openEndedQuestions.forEach((q) => (q.answer = ""));
      this.allQuestions = [];
    },

    compileAllQuestions() {
      this.allQuestions = [
        ...this.yesNoQuestions,
        ...this.multipleChoiceQuestions,
        ...this.multipleSelectionQuestions,
        ...this.openEndedQuestions,
      ];
    },

    submitSurvey() {
      // Add code to handle form submission here
      console.log("Survey submitted");
      this.step = 7;
    },
  };
}
