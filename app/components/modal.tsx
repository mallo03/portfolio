import React from "react";

interface ProjectModalProps {
  project: {
    name: string;
    description: string;
    img: string;
    linkDemo: string;
    linkCode: string;
  };
  closeModal: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <span
          className="absolute top-2 right-2 text-gray-600 cursor-pointer"
          onClick={closeModal}
        >
          &times;
        </span>
        <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
        <p className="mb-4">{project.description}</p>
        <img
          src={project.img}
          alt={project.name}
          className="w-full rounded-lg mb-4"
        />
        <div className="flex space-x-2">
          <a
            href={project.linkDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Demo
          </a>
          <a
            href={project.linkCode}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
