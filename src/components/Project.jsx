
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpg";

const projects = [
  {
    id: 1,
    title: "Activating Supply Chain of Electric Cooking in Rural India",
    description:
      "J-Wires and IIT Bombay are collaborating to develop and test efficient, sustainable, and marketable electric pressure cookers. Partnership of IIT Bombay and funded by MECS (Loughborough University, UK)",
    image: project1,
  },
  {
    id: 2,
    title: "Clean Energy Access programme",
    description:
      "Clean Energy Access programme in Partnership of TERI (The Energy and Resources Institute, New Delhi) to reduce the indoor pollution and providing clean energy 24*7.",
    image: project2,
  },
  {
    id: 3,
    title: "DRE LIVELIHOOD PROJECT",
    description:
      "DRE livelihood projects in the Partnership of CEEW and Villgro. Provides reliable electricity to rural areas, aiding governments and promoting sustainable energy for meeting energy needs.",
    image: project3,
  },

];

const Project = () => {
  return (
    <section id="project" className="py-8 bg-gray-100">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-4">
        Projects
      </h1>
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 mx-4 my-4 max-w-xs"
          >
            <div className="relative rounded-md overflow-hidden">
              <img
                className="w-full h-44 object-cover rounded-md"
                src={project.image}
                alt={`Project ${project.id}`}
              />
            </div>
            <div className="mt-4">
              <h1 className="text-xl lg:text-2xl font-bold mb-2">
                {project.title}
              </h1>
              <p className="text-gray-700">{project.description}</p>
              {/* <a className="cursor-pointer" href="https://www.google.com" target="_blank" rel="noopener noreferrer">Read More ...</a> */}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
