import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Brain, Code, Database, Cloud } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const projects = [
    {
      title: "Your Tongue Your Health",
      description: "AI-powered health analysis using image processing to analyze tongue colors and shape for health status assessment.",
      technologies: ["Python", "Image Processing", "AI", "Health Tech"],
      type: "Personal Project",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Fluid AI Medical Platform",
      description: "3D web application and stream platform for medical applications, deployed on Google Cloud Platform.",
      technologies: ["React", "3D Web", "GCP", "Medical AI"],
      type: "Premizone",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Facial Emotional Recognition",
      description: "Sentiment analysis system using facial recognition for the Promental project with GCP and Firebase integration.",
      technologies: ["Python", "AI", "GCP", "Firebase", "Big Query"],
      type: "AI Development",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Street Sign Detection AI",
      description: "Computer vision model for detecting and classifying street traffic signs for business intelligence applications.",
      technologies: ["Python", "Computer Vision", "AI", "Classification"],
      type: "Freelance",
      icon: <Database className="w-6 h-6" />
    },
        {
      title: "Trent",
      description: "Multi vendor e-commerce based on Saudi Arabia buit with Firebase and React and Flutter .",
      technologies: ["Firebase functions", "Firebase filestore ", "React", "Flutter"],
      type: "Freelance-CTO-trent.sa/",
      icon: <Database className="w-6 h-6" />
    },
            {
      title: "TicketChamber",
      description: " A toursim Mobile Apo and dashboard- .",
      technologies: ["Node js ", " Express js ", "Mysql", "Flutter"],
      type: "Freelance-CTO-ticketchamber.com/",
      icon: <Database className="w-6 h-6" />
    }
  ]

  const languages = [
    { name: "English", level: "Fluent", flag: "🇺🇸" },
    { name: "Spanish", level: "Fluent", flag: "🇪🇸" },
    { name: "Arabic", level: "Native", flag: "🇪🇬" }
  ]

  const skills = [
    { category: "AI/ML", items: ["Python", "Computer Vision", "Image Processing", "Facial Recognition"] },
    { category: "Web Development", items: ["React", "Node.js", "3D Web Apps", "Full Stack"] },
    { category: "Cloud & Data", items: ["GCP", "Azure", "Firebase", "Big Query", "SQL"] },
    { category: "Tools", items: ["Linux", "Git", "Tableau", "Data Studio"] }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Issam Almustafa</h1>
            <nav className="hidden md:flex space-x-6">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">
               Developer & Product Manager
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Versatile professional with expertise in AI, data science, and web development. 
              Driven by curiosity for technology, science, and philosophy with a background in art that enhances creativity in product design.
            </p>
          </div>

          {/* Languages Section - Prominently Featured */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-700 mb-6">Languages I Speak</h3>
            <div className="flex justify-center space-x-8">
              {languages.map((lang, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{lang.flag}</div>
                  <div className="font-semibold text-slate-800">{lang.name}</div>
                  <div className="text-sm text-slate-600">{lang.level}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex justify-center space-x-6 mb-8 text-slate-600">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Egypt, New Damiette</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Issam.almustafa@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+2010 95196958</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button variant="outline">
              <Github className="w-4 h-4 mr-2" />
              View Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-slate-200">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs">{project.type}</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Current Roles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg">Product Manager</CardTitle>
                <CardDescription>Premizone, UAE (May 2023 - Present)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Managing Fluid AI Medical project including website redesign and stream platform development.</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg">Developer</CardTitle>
                <CardDescription>Premizone, UAE (May 2024 - Present)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Developing 3D web applications for medical platforms and deploying to Google Cloud Platform.</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg">AI Developer</CardTitle>
                <CardDescription>Premizone, UAE (Nov 2023 - Present)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Implementing facial emotional recognition for sentiment analysis and integrating with cloud services.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-xl font-semibold mb-4">Let's Connect</h4>
          <p className="text-slate-300 mb-6">
            I excel in multicultural environments and foster collaboration. 
            Ready to drive innovation in a dynamic company.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-800">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-800">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-800">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-slate-400">
            <p>&copy; 2024 Issam Almustafa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

