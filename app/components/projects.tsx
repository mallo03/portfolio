export default function Projects() {
  const projects: {
    name: string;
    description: string;
    img: string;
    linkDemo: string;
    linkCode: string;
  }[] = [
    {
      name: "EZ Invoice",
      description: "Description of Project1",
      img: "/images/ezinvoice.jpg",
      linkDemo: "https://se2021-23t1-einvoicing-frontend-f14a-di-git-342b0e-merryrosalie.vercel.app/",
      linkCode: "https://github.com/HARI-PRMD/SENG2021-application",
    },
    {
      name: "Love Letter",
      description: "Description of Project2",
      img: "/images/loveletters.jpg",
      linkDemo: "https://trainee-3-23t2.vercel.app/login",
      linkCode: "https://github.com/csesoc/trainee-3-23t2",
    },
    {
        name: "Note Trader",
        description: "Description of Project2",
        img: "/images/notetrader.jpg",
        linkDemo: "https://trainee-3-23t1-deploy.vercel.app/",
        linkCode: "https://github.com/csesoc/trainee-3-23t1",
      },
  ];

  return (
    <div className="grid md:grid-cols-3">
      {projects.map((projects, i) => (
        <div key={i} className="project">
          <h3>{projects.name}</h3>
          <p>{projects.description}</p>
          <img src={projects.img} alt={projects.name} />
          <a href={projects.linkDemo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={projects.linkCode} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </div>
      ))}
    </div>
  );
}
