import {
    faUserFriends, faCheck,
    faClipboard, faCalendarAlt, faCalculator,
    faLock, faTape, faEdit,
    faLayerGroup, faMagic,
    faArrowAltCircleUp, faFastForward, faArrowsAlt,
    
} from '@fortawesome/free-solid-svg-icons';
import {
    faHtml5, faCss3, faJs, faReact, faNodeJs,
    faJava, faPython, faUnity, faAndroid,
    faTrello, faAdobe, faGithub,
    
} from '@fortawesome/free-brands-svg-icons';


export const database = {
    fullname: "Anh Tran",
    firstName: "Anh",
    title: "Full-stack software developer",
    email: "tug50154@temple.edu",
    address: "Philadelphia, PA ",
    phone: "215-391 6621",
    piclogo: require('./Resources/dogcat.png'),
    background: require('./Resources/banner2.jpg'),
    line0: "My focus is on Software Development, Web Development and problems solving in general.",
    line1: "I studied Bachelor of Computer Science at Temple University and is doing many lessons on LinkedIn Learning, Youtube, and other online programming courses.",
    line2: "I tend to code all my projects from scratch. This both delivers an unique experience as well as helps me thoroughly understand my stacks arsenal.",
    line3: "I enjoy doing Web Development and running a magazine for international students in my freetime. Check out my magazine: https://freelymagazine.com/",
    line4: "",
    
    quote: {
        trueQuote: "Society is ruled by one, but built by many."
    },
    skill: [{ name: "HTML", icon: faHtml5 }, { name: "CSS", icon: faCss3 }, { name: "Javascript", icon: faJs },
    , { name: "React", icon: faReact }, { name: "Nodejs", icon: faNodeJs }, { name: "Markdown", icon: "" }
    , { name: "Netlify", icon: "" }, { name: "MySQL", icon: "" }, { name: "Tomcat", icon: "" },
    { name: "Axure", icon: faLayerGroup }, { name: "Adobe XD", icon: faAdobe }, { name: "Google AdWork", icon: "" },
    { name: "Google Analytic", icon: "" }, { name: "Corvid", icon: "" }, { name: "Adobe Illustrator", icon: "" }, { name: "Adobe Premeire", icon: "" },
    { name: "UI/UX design", icon: faUserFriends }, { name: "Photoshop", icon: faMagic }, ],

    skill2: [{ name: "Java", icon: faJava }, { name: "Python", icon: faPython }, { name: "C#", icon: "" }, { name: "C", icon: "" },
    { name: "Unity", icon: faUnity }, { name: "Android Studio", icon: faAndroid }, ],

    skill3: [{ name: "Agile development", icon: faCalendarAlt }, { name: "Scrum", icon: faTrello }, { name: "Usability testing", icon: faClipboard },
    { name: "Version Control", icon: faGithub }, { name: "Software Security", icon: faLock },
    { name: "Software Testing", icon: faEdit }, { name: "Application Prototyping", icon: faTape }, { name: "Machine learning", icon: faCalculator },],

    characteristic: [{
        icon: faArrowAltCircleUp,
        quality: "Ambitious",
        des: "Aiming for the moon and we can land on the stars."
    },
    {
        icon: faFastForward,
        quality: "Quick-learned",
        des: "I'm confident in my ability to catch up and reapply my understanding into the craft."
    },
    {
        icon: faArrowsAlt,
        quality: "Adaptable",
        des: "I have no fear in new environment. If you give me lemon, I will give you back a good glass of lemonade."
    }],
    school: {
        name: "Temple University",
        grad: "Graduate: Dec 2020",
        location: "Philadelphia, PA, USA, 19122",
        major: "Bachelor of Computer Science",
        schoolLogo: require('./Resources/temple.png'),
        corsework: ["Data Structure and Algorithm", 
            "Mobile App Development", "Software Design",
            "Principles of Data Science", "Probability and Statistic", "Technical Writing",
            "Final Project in Computer Science", "UI/UX design", "Business Law",
            "Human Management", "IT Project Management", "Infographic Design"]
    },
    project: [

    {
        name: "Path Finder Visualizer",
        desc: "This is a project made with ReactJS and Sass to represent PathFinder Algorithm visually.",
        longdes: "",
        problem: ".",
        fix: "",
        visitlink: "",
        codelink: "",
        projectpic: require('./Resources/projectCS.png'),
        stack: "",
    },

    {
        name: "Bug Tracker 3000",
        desc: "A 1-month full-fledge Java bug tracking application. I made this to understand more on bug tracker, which is commonly used in professional working environment.",
        longdes: "As my initial programming language is Java, I want to take the opportunity to try out the full potential of java for once. The program contains thorough bug tracking functionality when working in a team, including create bug task, moving, updating, deleting. Also there's different functionality for different user roles and an email system that will send email with JavaMail.jar.",
        problem: "There are a lot of problems when developing the apps, and we continuously note down then resolve it one by one. One of the most prominent problem is the integration and output into executable file for other people to test it. While netbean display the program with a decent UI porportion regarding the screen, the executable file was somehow get zoomed in and many UI element was lost.",
        fix: "In the end, I found that my screen resolution is not the same as the normal resolution used in netbean. There's no way around it besides redo the whole UI system and put constrains in so that the UI will render well in most scenario. At least now I see the benefit both java and javascript regarding UI rendering.",
        visitlink: "https://github.com/Kylist/Bug-Tracker",
        codelink: "https://github.com/Kylist/Bug-Tracker",
        projectpic: require('./Resources/project8.png'),
        stack: "Java, javax.mail.jar, JPlanner.jar, json-simple-1.1.1.jar, commons-lang3-3.10.jar",
    },

    {
        name: "MySQL Website ",
        desc: "I made this website with MySQL, HTML, CSS for database management training purpose. I hosted this website with local netbean server.",
        longdes: "In this project, I created a simple website in 1 week to showcase my database system made with MySQL.",
        problem: "Netbean local host server has some problem that prevent me with hosting from different device.",
        fix: "I found out a way to attach the database file to a netbean file in computer and run normally. The instruction is in github readme",
        visitlink: "https://github.com/Kylist/Database-Web-project",
        codelink: "https://github.com/Kylist/Database-Web-project",
        projectpic: require('./Resources/Project 3.png'),
        stack: "MySQL, HTML, CSS, netbean.",
    },
    {
        name: "Castle Game",
        desc: "Used C#, JSON and Unity to build a multiplayer strategy game like the combination of Heart Stone and chess. Each player will have units & cards and tried to destroy enemy’s castle. ",
        longdes: "I learnt C# from this project and wanted to try making a video game with Unity. ",
        problem: "There are a lot of problems with pushing and merging from unity to github. The Scene merge conflict happened a lots when my team members and I tried to combine all the indivifual scene into final intergration. ",
        fix: "For the final integration, we have to work together to bring all the feature into 1 single scene and we tried to use third party tool like Unity YAML merge tool to get the best result.",
        visitlink: "https://docs.google.com/presentation/d/17pmE2-M3LhW9hGdS_-vtd6MrzaQ1m76T0z6fkg7vuJ8/edit?usp=sharing",
        codelink: "https://github.com/Kylist/Castle-Game",
        projectpic: require('./Resources/project4.png'),
        stack: "C#, Unity, Unity Yaml merge, JSON",
    },
    {
        name: "Website for client - Tozuda (Code belongs to Client so cannot show)",
        desc: "This is a responsive website I made for my client during internship (ReactJS &  Markdown). The goal is building and utilizing SEO to attract organic customer engagement for KickStarter.",
        longdes: "In this project, I tried to write most of my code with ReactJS and Markdown",
        problem: "I have to utilize SEO to increase ROI of my website while building from scratch in 2 months to boost engagement for KickStarter Campaign.",
        fix: "I utilized Head Tag, minimized number of plug-in to boost website speed, conducted keyword research with GoogleAdwork and maintain Internal Links and Back Links with Google Analytics. ",
        visitlink: "https://www.tozuda.com/",
        codelink: "This is my client's website so the code is confidential.",
        projectpic: require('./Resources/Project5.png'),
        stack: "ReactJS, Markdown, HTML, CSS, photoshop, Google Adwork, Google Analytics.",
        
    },

    {
        name: "Website for client - BeaService (Code belongs to Client so cannot show)" ,
        desc: "This is a dual-langual responsive website I have made for my client during my internship (JavaScript and Corvid IDE). This is a dual langual website with English and Spanish.",
        longdes: "The main focus is building not a complicated but a suitable website for my client to boost customer's engagement.",
        problem: "I tried to created a multilangual database so the website can be a multil langual web. However the database didn't response to all the elements in the website so only part of the web is translated into new language.",
        fix: "I found out that Corvid doesn't support multi languages for all elements so I have to borrow some Wix feature like wix form (Do those part seperatedly and manually) and then the website works fine.",
        visitlink: "https://www.beaprofessionalservices.com/",
        codelink: "This is my client's website so the code is confidential.",
        projectpic: require('./Resources/Project7.png'),
        stack: "HTML, CSS, JavaScript, Corvid, Corvid API",
        note: "Code belongs to clients so the code is confidential"
    },

    {
        name: "Website for client - FreelyMagazine (Code belongs to Client so cannot show)",
        desc: "This is a responsive website which I made for the magazine that I founded during my freshman year in Temple (still running). I made with WordPress Code Editor.",
        longdes: "This is my first website I made to learn JavaScript, HTML and CSS.",
        problem: "All the problem come from researching to build a best website that is suitable for a magazine where reader can find what they want to read and updated articles. ",
        fix: "I have to do research with people from Temple communication and media school to find out the best magazine structure.",
        visitlink: "https://freelymagazine.com/",
        codelink: "This is my client's website so the code is confidential.",
        projectpic: require('./Resources/Project6.png'),
        stack: "WordPress, JavaScipt, HTML, CSS, Photoshop.",
        note: "Code belongs to clients so the code is confidential"
    }

    
    ],
    links: {
        github: "https://github.com/Kylist/",
        linkedIn: "https://www.linkedin.com/in/kyle-tran-77797712a/",
        email: "tug50154@temple.edu",
        //codepen: "",
        connectionpic: require('./Resources/connection.png'),
    }
}
