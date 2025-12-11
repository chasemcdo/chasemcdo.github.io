/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chase McDougall",
  title: "Howdy! I'm Chase",
  subTitle: emoji(
    "A Full Stack Developer building AI-powered healthcare platforms. Contributing to open source Generative AI frameworks (LangChain) and building scalable systems with Python, TypeScript, React, FastAPI, and more."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1bLWcdSOYlMEGcATKZpWf7jA0CT_urJoxz8Q4a6vzQzE/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/chasemcdo",
  linkedin: "https://www.linkedin.com/in/chasem/",
  gmail: "mcdougallchase@gmail.com",
  facebook: "https://www.facebook.com/McDougallChase/",
  instagram: "https://www.instagram.com/chase.pl/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Ruby on Rails",
      fontAwesomeClassname: "fas fa-gem"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Toronto",
      logo: require("./assets/images/utorontologo.png"),
      subHeader:
        "Bachelor of Applied Science in Engineering Science - Major in Machine Intelligence",
      desc: "",
      descBullets: [
        "Graduated with honours from a five year degree in Engineering Science with a Major in Machine Intelligence and Minor in Business, which is a program known for providing its students with a rigorous undergraduate experience"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Ruby",
      progressPercentage: "85%"
    },
    {
      Stack: "JavaScript", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Learning",
      progressPercentage: "110%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Founding Engineer",
      company: "Decoda Health",
      companylogo: require("./assets/images/decodahealth-logo.jpeg"),
      date: "May 2024 – Present",
      desc: "Building AI-Driven administrative platforms for healthcare practitioners. Empowering them to focus on what matters.",
      descBullets: [
        "Built AI-powered medical scribe system reducing doctors' documentation time with real-time transcription and AI note generation",
        "Architected e-prescription system integrating DoseSpot platform with SSO authentication, RESTful APIs, and React frontend",
        "Built custom form builder system enabling clinics to create unlimited custom forms with automatic patient record propagation",
        "Built scalable AI calling infrastructure using LiveKit to replace Retell-based system, including SignalWire migration and multi-channel communication"
      ]
    },
    {
      role: "AI Researcher",
      company: "University of Toronto: Dynamic Graphics Project",
      companylogo: require("./assets/images/utorontologo.png"),
      date: "September 2023 – April 2024",
      desc: "",
      descBullets: [
        "Building Generative AI powered education tools",
        "Generative AI powered teaching assistant and code grader",
        "Generative AI powered personalized tasks",
        "Investigating and analyzing the use of Generative AI to improve learning metrics"
      ]
    },
    {
      role: "OS Contributor",
      company: "LangChain",
      companylogo: require("./assets/images/langchain-logo.png"),
      desc: "",
      descBullets: [
        "Enabled Redis Sentinel support for various memory stores",
        "Added support for IBM WatsonX.ai LLM integrations",
        "Added Support for Gradient AI LLM integrations",
        "Added Support for Gradient AI Text Embeddings"
      ]
    },
    {
      role: "Software Developer",
      company: "IBM",
      companylogo: require("./assets/images/ibm_logo.svg"),
      date: "May 2022 – August 2023",
      desc: "",
      descBullets: [
        "Created a product management platform to improve performance transparency by 95% (Ruby on Rails)",
        "Created a Generative AI 'chatbot' to reduce support ticket volume by 82% (TypeScript, NestJS, React)",
        "Created a Generative AI learning environment for prompt engineering  (TypeScript, NextJS, React)",
        "Developed Ruby Models for a PostgreSQL database to improve marketing/management",
        "Developed bulk-management features and APIs to decrease instance management time by 90%",
        "Developed Open Source Ruby on Rails filtering/search components"
      ]
    },
    {
      role: "Programmer Analyst",
      company: "RCMP",
      companylogo: require("./assets/images/RCMP-logo.png"),
      date: "May 2021 – August 2021",
      desc: "",
      descBullets: [
        "Learned to quickly pick up new open-source applications such as MISP, Django, Flask and Cypress through the following:",
        "Developed and deployed customized MISP Python modules",
        "Enhanced and implemented authentication for a Python Django web app",
        "Developed and Deployed automated Cypress test suites to Azure DevOps Pipelines",
        "Prepared clear and concise technical documentation"
      ]
    },
    {
      role: "Vice Chair Leadership",
      company: "University of Toronto: Orientation Committee",
      companylogo: require("./assets/images/utorontologo.png"),
      date: "April 2023 – Present",
      desc: "",
      descBullets: [
        "Oversee creation of training content for 1000 volunteers",
        "Manage a team of 40 head leaders that then directly oversee the 1000 volunteers"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/project-images/scribe.png"),
      projectName: "AI-Powered Medical Scribe",
      projectDesc:
        "Built comprehensive AI-powered medical note-taking system that saves doctors' note-taking time with real-time transcription and AI note generation. Includes image annotation, attachment management, and EHR integration.",
      footerLink: []
    },
    {
      image: require("./assets/images/project-images/prescribe.png"),
      projectName: "E-Prescription System",
      projectDesc:
        "Architected and implemented complete e-prescription integration with DoseSpot platform, including SSO authentication, RESTful APIs, React frontend, and database migrations (4,154+ lines).",
      footerLink: []
    },
    {
      image: require("./assets/images/project-images/communications.png"),
      projectName: "AI Calling Infrastructure",
      projectDesc:
        "Built comprehensive AI calling infrastructure using LiveKit to replace Retell-based system with scaling issues. Includes SignalWire migration, DTMF support, observability, and voice/model management (366 commits).",
      footerLink: []
    },
    {
      image: require("./assets/images/project-images/import.png"),
      projectName: "Data Import/Integration Pipelines",
      projectDesc:
        "Created comprehensive ETL pipelines for data import and integration from multiple healthcare platforms (Boulevard, Fresha, TouchMD). Includes automated data validation, transformation, and patient record synchronization.",
      footerLink: []
    },
    {
      image: require("./assets/images/generative-ai-classroom.png"),
      projectName: "Generative AI Classroom",
      projectDesc:
        "Built a general purpose Generative AI service to aid in mastering Generative AIs.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://skills.network/lab-tools/generative-ai-classroom"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (604) 815-8957",
  email_address: "mcdougallchase@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
