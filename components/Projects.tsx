'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects = [
    {
      id: 1,
      mainImage: '/imgAttachment/PFC2.jpg',
      hoverLogo: '/imgAttachment/Pozos290_Logo.png',
      thumbnails: ['/imgAttachment/PINT3A.jpg', '/imgAttachment/TerrazaPrueba.jpg', '/imgAttachment/P2ALiVING.jpg', '/imgAttachment/PCOCINA3A.jpg']
    },
    {
      id: 2,
      mainImage: '/imgAttachment/RF 12.jpg',
      thumbnails: ['/imgAttachment/RF 09.jpg', '/imgAttachment/RF 10.jpg', '/imgAttachment/RF 11.jpg', '/imgAttachment/RF 12.jpg']
    },
    // Add more projects here
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.thumbnails.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProject.thumbnails.length) % selectedProject.thumbnails.length)
  }

  return (
    <section id="proyectos" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative aspect-video cursor-pointer" onClick={() => openModal(project)}>
              <Image src={project.mainImage} alt={`Project ${project.id}`} layout="fill" objectFit="cover" />
              {project.hoverLogo && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-70">
                  <Image src={project.hoverLogo} alt={`Project ${project.id} Logo`} width={100} height={100} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl p-8">
            <button onClick={closeModal} className="absolute top-4 right-4 text-3xl">&times;</button>
            <div className="relative aspect-video mb-4">
              <Image src={selectedProject.thumbnails[currentImageIndex]} alt={`Project ${selectedProject.id}`} layout="fill" objectFit="cover" />
              <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2">&lt;</button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2">&gt;</button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {selectedProject.thumbnails.map((thumb, index) => (
                <Image
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  objectFit="cover"
                  className="cursor-pointer"
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

