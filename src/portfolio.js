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
    "A Full Stack Developer with contributions to open source LLM frameworks (LangChain) and experience building apps in various frameworks - Ruby on Rails, NestJS, Phoenix, and Flask to name a few"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1l6UbQLr1nZPDoEor9mo4KpSTknU2jO9P4vT40cchrAg/edit?usp=sharing", // Set to empty to hide the button
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
      skillName: "Learn",
      fontAwesomeClassname: "fas fa-graduation-cap"
    },
    {
      skillName: "Ruby on Rails",
      fontAwesomeClassname: "fas fa-gem"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Verilog",
      fontAwesomeClassname: "fas fa-bolt"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Toronto",
      logo: require("./assets/images/utorontologo.png"),
      subHeader: "Bachelor of Applied Science in Engineering Science - Major in Machine Intelligence",
      duration: "September 2019 - Present",
      desc: "",
      descBullets: [
        "Pursuing a four year degree in Engineering Science with a Major in Machine Intelligence and Minor in Business, which is a program known for providing its students with a rigorous undergraduate experience"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Ruby",
      progressPercentage: "85%"
    },
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
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
      role: "Software Developer (Paid)",
      company: "IBM",
      companylogo: require("./assets/images/ibm_logo.svg"),
      date: "May 2022 – Present",
      desc: "",
      descBullets: [
        "Created a platform for managing products and product performance in Ruby on Rails",
        "Created a LLM backed 'chatbot' to enhance teaching instructions",
        "Created a LLM backed learning environment for people to practice prompt engineering"
      ]
    },
    {
      role: "Programmer Analyst (Paid)",
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
    },
    {
      role: "Head Orientation Leader",
      company: "University of Toronto: Orientation Committee",
      companylogo: require("./assets/images/utorontologo.png"),
      date: "April 2021 – April 2023",
      desc: "",
      descBullets: [
        "Developed and practiced leadership skills through managing a team of 25+ student volunteers and 50 incoming students with my co-head lead, while working with the orientation committee to run the University of Toronto's first large scale in-person event since initial shutdowns"
      ]
    },
    {
      role: "Rover Autonomy Developer",
      company: "University of Toronto Robotics for Space Exploration Team",
      companylogo: require("./assets/images/rsx-logo.svg"),
      date: "March 2021 – January 2022",
      desc: "",
      descBullets: [
        "Assembled Raspberry Pi powered Mini Rover for use in testing rover software",
        "Aided in documenting Mini Rover assembly and software setup"
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
      image: require("./assets/images/sn_logo.png"),
      projectName: "Skills Network Feature Development",
      projectDesc: "Developed and deployed custom features to Skills Network's Open edX instance.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://skills.network"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/tai.png"),
      projectName: "Teaching Artifical Assistant",
      projectDesc: "Created an LLM powered Teaching Assistant.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://skills.network"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/generative-ai-classroom.png"),
      projectName: "Generative AI Classroom",
      projectDesc: "Built a general purpose LLM service to aid in mastering LLMs.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://skills.network/lab-tools/generative-ai-classroom"
        }
        //  you can add extra buttons here.
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

