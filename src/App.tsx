import { useState, useEffect } from 'react';
import { Home, User, Briefcase, GraduationCap, Award, ChevronUp, Sun, Moon, FileDown, Github, Phone, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDockVisible, setIsDockVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return true;
  });
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const projects = [
    {
      title: 'Rentcaroo',
      tech: 'React, Node.js, Razorpay',
      link: 'https://rentcaroo.netlify.app',
      repo: '',
      image: 'rentcaroo.png'
    },
    {
      title: 'CRM System',
      tech: 'Django, MySQL, TailwindCSS',
      link: 'https://github.com/Adarshvinodhan/Django-CRM',
      repo: '',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80'
    },
    {
      title: 'MovieFinder',
      tech: 'React, Node.js, RESTful API',
      link: 'legpieze-findmovie.netlify.app',
      repo: '',
      image: 'movie-finder.png'
    },
    {
      title: 'Threejs Landing-Page',
      tech: 'React, 3js,TailwindCSS',
      link: 'https://infoquest-kasc2k25.netlify.app/',
      repo: '',
      image: 'infoquest.png'
    },
    {
      title: 'CMS-Portfolio',
      tech: 'React,Nodejs,TailwindCSS',
      link: 'https://dean-kasc.netlify.app/',
      repo: '',
      image: 'cms.png'
    }

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const ProjectSlider = () => (
    <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProjectIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="absolute inset-0"
        >
          <a
            href={projects[currentProjectIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full group"
          >
            <div className="relative h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={projects[currentProjectIndex].image}
                  alt={projects[currentProjectIndex].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-2xl font-bold text-white mb-1">{projects[currentProjectIndex].title}</h3>
                <p className="text-base text-gray-200 mb-2">{projects[currentProjectIndex].tech}</p>
                <span className="inline-block px-4 py-2 bg-blue-600 rounded-full text-sm font-medium text-white shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:bg-blue-700">
                  View Live Project
                </span>
              </div>
            </div>
          </a>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProjectIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentProjectIndex
                ? 'bg-white w-4'
                : 'bg-white/50 hover:bg-white/75'
              }`}
          />
        ))}
      </div>
    </div>
  );

  const sections = {
    home: {
      icon: Home,
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <img
              src="/profile1.jpg"
              alt="Adarsh V"
              className="w-24 h-24 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-lg"
            />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold dark:text-white">Adarsh V</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">Full Stack Developer</p>
              <div className="flex gap-3">
                <a href="mailto:adarshvinodhan@gmail.com">
                  <Mail className="cursor-pointer" />
                </a>

                <a href="tel:+919626229454">
                  <Phone className="cursor-pointer" />
                </a>

                <a href="https://github.com/AdarshVinodhan" target="_blank" rel="noopener noreferrer">
                  <Github className="cursor-pointer" />
                </a>

                <a href="https://linkedin.com/in/AdarshVinodhan" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="cursor-pointer" />
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://drive.google.com/file/d/1qpFp3cQW5FXzdvg-95E_DFOwISFeR6LB/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors duration-200"
                >
                  <FileDown className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold dark:text-white">Featured Project</h2>
            <ProjectSlider />
          </div>
        </div>
      )
    },
    skills: {
      icon: User,
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">Skills</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { category: 'Programming', skills: ['Python', 'JavaScript'] },
              { category: 'Frontend', skills: ['React', 'Tailwind CSS'] },
              { category: 'Backend', skills: ['Nodejs', 'ExpressJS', 'Django'] },
              { category: 'Database', skills: ['MySQL', 'MongoDB'] }
            ].map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white/5 backdrop-blur-sm p-3 rounded-lg">
                <h3 className="font-medium mb-2 text-base dark:text-white">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span key={skill} className="bg-white/10 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    projects: {
      icon: Briefcase,
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">Projects</h2>
          <div className="grid gap-3">
            {projects.map((project) => (
              <div key={project.title} className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
                <div className="flex">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-32 h-32 object-cover"
                  />
                  <div className="p-3 flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium dark:text-white">{project.title}</h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 text-sm hover:underline"
                      >
                        View Project
                      </a>
                    </div>
                    <p className="text-base text-gray-400 mt-1">{project.tech}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    education: {
      icon: GraduationCap,
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">Education</h2>
          <div className="space-y-3">
            {[
              {
                school: 'Kongunadu Arts and Science College',
                degree: 'M.Sc. in Computer Science',
                location: 'Coimbatore, India',
                period: 'Aug 2023 – Present',
                grade: 'CGPA: 8.0'
              },
              {
                school: 'Sri Krishna College of Arts and Science',
                degree: 'B.Sc. in Computer Science',
                location: 'Coimbatore, India',
                period: 'Jun 2019 – Jul 2022',
                grade: 'CGPA: 8.0'
              }
            ].map((edu) => (
              <div key={edu.school} className="bg-white/5 backdrop-blur-sm p-3 rounded-lg">
                <h3 className="font-medium text-lg dark:text-white">{edu.school}</h3>
                <p className="text-gray-400 text-base mt-1">{edu.degree}</p>
                <div className="flex justify-between mt-2 text-sm text-gray-400">
                  <span>{edu.location}</span>
                  <span>{edu.period}</span>
                </div>
                <p className="mt-1 text-sm text-gray-400">{edu.grade}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    certifications: {
      icon: Award,
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">Certifications</h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="flex">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80"
                alt="Full Stack Developer Course"
                className="w-32 h-32 object-cover"
              />
              <div className="p-3 flex-1">
                <h3 className="font-medium text-lg dark:text-white">Full Stack Developer Course</h3>
                <p className="text-gray-400 text-base mt-1">Guvi Geek Network Pvt Ltd — 2025</p>
                <ul className="mt-3 space-y-2">
                  <li className="text-sm text-gray-300">• Trained on a project-based Full Stack Development Program</li>
                  <li className="text-sm text-gray-300">• Gained expertise in front-end and back-end development</li>
                  <li className="text-sm text-gray-300">• Knowledge of Git and web deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${isDarkMode ? 'bg-amoled text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-colors duration-200 ${isDarkMode
              ? 'bg-white/5 hover:bg-white/10'
              : 'bg-gray-200 hover:bg-gray-300'
            }`}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden pb-16 md:pb-0">
        <div className="h-full container mx-auto px-4 py-4">
          <div className="h-full max-w-2xl mx-auto overflow-y-auto custom-scrollbar">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="pb-4"
              >
                {sections[activeSection as keyof typeof sections].content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Dock */}
      <div className="fixed bottom-0 left-0 right-0">
        <div
          className={`transition-transform duration-300 ease-in-out md:transform-none ${!isDockVisible ? 'translate-y-[calc(100%-2rem)]' : ''
            }`}
        >
          {/* Arrow Button */}
          <div className="md:hidden flex justify-center">
            <button
              onClick={() => setIsDockVisible(!isDockVisible)}
              className={`px-4 py-1 -mt-4 transform transition-transform duration-300 rounded-t-lg ${isDarkMode
                  ? 'bg-white/5 backdrop-blur-md'
                  : 'bg-white/70 backdrop-blur-md'
                }`}
            >
              <ChevronUp className={`w-5 h-5 transition-transform duration-300 ${!isDockVisible ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className={`${isDarkMode
              ? 'bg-white/5 backdrop-blur-md'
              : 'bg-white/70 backdrop-blur-md'
            }`}>
            <div className="container mx-auto max-w-2xl">
              <div className="flex justify-around p-3">
                {Object.entries(sections).map(([key, { icon: Icon }]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`p-2 rounded-full transition-colors ${activeSection === key
                        ? isDarkMode
                          ? 'text-blue-400 bg-white/10'
                          : 'text-blue-600 bg-black/5'
                        : isDarkMode
                          ? 'text-gray-400 hover:text-blue-400'
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;