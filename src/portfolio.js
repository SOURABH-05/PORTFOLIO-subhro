/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shubhro Dev",
  title: "Hi, I'm Shubhro",
  subTitle: emoji(
    "I am 3rd year undergraduate student of Computer Science Engineering at RGIPT I am highly motivated with a strong drive to continue learning new things in the field of AI-ML"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1-kB9YLxSAeFWUbDMcbIZN5jTweFd_kNl/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/spearb0lt",
  linkedin: "https://www.linkedin.com/in/shubhro-dev/",
  gmail: "shubhro2004@gmail.com",
  instagram:"https://www.instagram.com/shubhro_x/",

 
 
 
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY AI & ML ENTHUSIAST WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡I am deeply interested in applications of deep learning andbr Artificial Intelligence focusing on medical image analysis."

    ),
    emoji("⚡I build deep learning models to solve day to day problems faced by the world."),
    emoji(
      "⚡ I am also interested in  Generative AI, and Natural Language Processing"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "numpy",
    fontAwesomeClassname: "fas fa-square-root-alt"
  },
  {
    skillName: "pandas",
    fontAwesomeClassname: "fas fa-table"
  },
  {
    skillName: "matplotlib",
    fontAwesomeClassname: "fas fa-chart-line"
  },
  {
    skillName: "seaborn",
    fontAwesomeClassname: "fas fa-chart-bar"
  },
  {
    skillName: "scikit-learn",
    fontAwesomeClassname: "fas fa-brain"
  },
  {
    skillName: "tensorflow",
    fontAwesomeClassname: "fab fa-google"
  },
  {
    skillName: "keras",
    fontAwesomeClassname: "fas fa-brain"
  },
  {
    skillName: "pytorch",
    fontAwesomeClassname: "fas fa-flask"
  },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "mlflow",
    fontAwesomeClassname: "fas fa-code-branch"
  },
  {
    skillName: "opencv",
    fontAwesomeClassname: "fas fa-camera"
  }
],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bharatiya Vidya Bhavans Kolkata",
      logo: require("./assets/images/jn.png"),
      subHeader: "Class 12",
      duration: "2022",
      desc: "Secured 90.6% marks.Qualified JEE Advanced  with AIR 17078",
      descBullets: [
        
        "Secured AIR 1859 in WBJEE 2022",
        "Secured AIR 1899 in MHTCET 2022"
      ]
    },
    {
      schoolName: "RGIPT B.Tech Computer Science Engineering",
      logo: require("./assets/images/Rgipt_Logo.jpg"),
      subHeader: "Bachelor of Technolgy in Computer Science",
      duration: "2022 - present",
      desc: "Secured 7.92 cpi till 5th sem",
      descBullets: ["Secretary of OWASP student chapter DPBH 2023 Finalist"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Deep learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Intern",
      company: "IIT-(BHU) Varanasi",

      companylogo: "https://upload.wikimedia.org/wikipedia/en/4/4c/Official_Logo_of_IIT%28BHU%29%2CVaranasi%2CIndia%2C2013.png",
      date: "June 2024 – Oct 2024",
      desc: "Studied Convoluted Neural Networks, Federated Learning, Transfer Learning, Multimodal models and Knowledge Distillation Proposing a Federated Learning algorithm for early diagnosis of Alzheimer’s disease in patients based on multimodal data in form of biological markers and image data."
,

      
    },
    {
      role: "Reseacrh Intern",
      company: "Jadavpur University",

      companylogo:"https://weadapt.org/wp-content/uploads/2023/05/jadavpur_0.jpg",
      date: "May 2024 – july 2024",
      desc: "Studied Supervised Learning Techniques, Data Preprocessing, Attention Mechanisms, Deep Neural Networks, and Transfer Learning Experimented with various algorithms and techniques such as Attention, PCA, Color channel splitting analysis and Image partitioning analysis for better lung cancer classification and recognition."

    },
    {
      role: "Summer Student",
      company: "IIT Khragpur Summer of Quant 2024",
      companylogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEyO0K1EuRsp4YelVPohTf88rFzjnmb8hJg&s",
      date: "June 2024 – August 2024",
      desc: "I have also qualified and attended the prestigious Summer of Quant 2024 hosted by Indian Institute of Technology(IIT)-Kharagpur where I gained advanced knowledge about Quantitative Finance and Algorithmic Trading."
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      image:"https://www.naplesnews.com/gcdn/-mm-/8abb9890ee570c4071c091db6835761f9d7ec56a/c=29-0-471-332/local/-/media/2016/01/15/TXNMGroup/LasCruces/635884696341198425-January-Cervical-Cancer.jpg",
      projectName: "Cervical Cancer Detection using FL"
,
      projectDesc: "Cervical Cancer Detection on Pap Smear dataset implementing FL algorithms",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/spearb0lt/Cervical-Cancer-Detection-implementing-FL-using-Pap-Smear-Dataset"

        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdLKUVAo2h2Pvr3iSi0qH_9I1znFm9ob17w&s",
      projectName: "Lung Cancer Detection using DL",
      projectDesc: "Lung Cancer Detection using DL and Attention mechanism",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/spearb0lt/Lung-Cancer-Detection-Using-DL "
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
      title: "Machine Learning Specialization",
      subtitle:
        "Stanford Online & DeepLearning.AI",
      image: require("./assets/images/image.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1XD6LjnD5eNB89RWOFcGL1AQlP3al_2PH/view?usp=drive_link"
        },
        
        
      ]
    },
    {
      title: "Advanced Learning Algorithms",
      subtitle:
        "Stanford Online & DeepLearning.AI",
      image: require("./assets/images/image copy.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1PB-3vrnSoyPUe7tod31ylkvDcDDHUFZk/view?usp=drive_link"
        }
      ]
    },

    {
      title: " Regression and Classification",
      subtitle: "Stanford Online & DeepLearning.AI",
      image: require("./assets/images/image copy 2.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1Z6j0YWqm0jHxZ0E5LKEEe82fp0L3bHrH/view?usp=drive_link"},
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8272979689",
  email_address: "shubhro2004@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection
};
