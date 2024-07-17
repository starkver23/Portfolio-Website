import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate software developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in programming languages like Java and Python, front-end technologies like React.js, as well as back-end technologies like Node.js and MySQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile software developer and data scientist with a passion for creating efficient and user-friendly web applications. With 3 years of experience, I have worked with a variety of technologies, including React, Node.js, MySQL, Java, Python and Machine Learning. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, enjoying football matches, and exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - July 2024",
    role: "Data Science Intern",
    company: "Celebal Technologies",
    description: `Developed and implemented advanced machine learning models for email classification at Celebal
    Technologies, improving accuracy from 82% to 92%.`,
    technologies: ["Python", "Machine Learning", "Naive Bayes", "SVM"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Brain Tumor Detection",
    image: project1,
    description: `Utilizing a pre-trained VGG 16 model and a Convolutional Neural Network (CNN), achieved 94% and 85% accuracy in detecting brain tumors.`,
    technologies: ["Python", "VGG-16", "CNN", "Jupyter Lab"],
  },
  {
    title: "Spam Email Classification",
    image: project2,
    description: `Utilizing Naive Bayes, Random Forest, Gradient Booster, and CNN, successfully achieved spam email detection with accuracies of 89%, 99%, 97%, 95%, and 98% respectively`,
    technologies: [
      "Python",
      "Naive Bayes",
      "SVM",
      "Random Forest",
      "Gradient Booster",
    ],
  },
  {
    title: "Hospital Management System",
    image: project3,
    description: `Harnessing the MobileNet architecture and Keras framework, this project successfully identifies and categorizes plant diseases using images from the PlantVillage dataset.`,
    technologies: ["Python", "MobileNet", "Keras", "Jupyter Lab"],
  },
  {
    title: "Self Driving Car",
    image: project4,
    description: `An autonomous self-driving car project equipped with advanced obstacle detection capabilities, ensuring immediate halting upon detecting obstacles`,
    technologies: ["IoT Sensors", "Arduino Uno", "C#"],
  },
];

export const CONTACT = {
  address: "MUJ, Jaipur",
  phoneNo: "+91 8210077351 ",
  email: "verma.vibes25@gmail.com",
};
