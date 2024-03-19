import Image from "next/image";

export default function Projects() {
  const projects: {
    name: string;
    description: string;
    img: string;
    linkDemo: string;
    linkCode: string;
  }[] = [
    {
      name: "Dues",
      description:
        "Google Student Developer Clubs UNSW Hackathon - First Place. An application where students can set reminders on their course assignments automatically.",
      img: "/images/dues.jpg",
      linkDemo: "https://dues-deploy.vercel.app/",
      linkCode: "https://github.com/mallo03/dues",
    },
    {
      name: "EZ Invoice",
      description:
        "Invoice management web application project for SENG2021 course at UNSW.",
      img: "/images/ezinvoice.jpg",
      linkDemo:
        "https://se2021-23t1-einvoicing-frontend-f14a-di-git-342b0e-merryrosalie.vercel.app/",
      linkCode: "https://github.com/HARI-PRMD/SENG2021-application",
    },

    {
      name: "Love Letter",
      description:
        "A forum like application where love letters are posted and customisable.",
      img: "/images/loveletters.jpg",
      linkDemo: "https://trainee-3-23t2.vercel.app/login",
      linkCode: "https://github.com/csesoc/trainee-3-23t2",
    },
    {
      name: "Note Trader",
      description:
        "Forum where students can collaborate with one another by sharing notes.",
      img: "/images/notetrader.jpg",
      linkDemo: "https://trainee-3-23t1-deploy.vercel.app/",
      linkCode: "https://github.com/csesoc/trainee-3-23t1",
    },
  ];

  return (
    <div className="bg-white dark:bg-lightgray dark:text-white py-12 " id="projects">
      <div className=" mx-10">
        <h1 className="text-3xl text-black/70 dark:text-white/70 font-semibold mb-4">Projects</h1>
        <h4>Just some projects that I have been involved in through competitions, university courses and societies.</h4>
      </div>

      <div className="grid md:grid-cols-3 justify-items-center">
        {projects.map((projects, index) => (
          <div key={index} className="project mt-12 w-80">
            <h3 className="text-xl text-black/70 dark:text-white/70 font-semibold">{projects.name}</h3>
            <p className="text-xs h-14 pt-2">{projects.description}</p>
            <a
              href={projects.linkDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={projects.img}
                alt={projects.name}
                width={500}
                height={500}
                className="w-80 rounded shadow-2xl my-6 grayscale hover:grayscale-0 transition duration-500 hover:scale-110"
              />
            </a>
            <div className="font-semibold">
              <a
                href={projects.linkCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{"<codebase/>"}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
