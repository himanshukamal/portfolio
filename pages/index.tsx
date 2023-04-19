import Layout from "@/components/Layout";
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiChakraui,
  // SiMaterialui,
  SiBootstrap,
  SiReact,
  SiReactrouter,
  SiGit,
  // SiResponsive,
  // SiAccessibility,
  // SiPerformance,
  SiRedux,
  SiJest,
  SiTestinglibrary,
  // SiRestapi,
  SiGraphql,
  SiWebpack,
  // SiAgile,
} from "react-icons/si";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto bg-white dark:bg-gray-800 text-black dark:text-white">
        <section
          id="introduction"
          className="my-10 h-screen p-2 dark:bg-green-800"
        >
          <h1 className="text-4xl font-bold mb-5">Hello, I'm Himanshu Kamal</h1>
          <p className="text-xl">
            I'm a Frontend Developer based in India. I specialize in building
            high-quality, user-friendly websites , Dashboards and web
            applications.
          </p>
        </section>

        <section
          id="about-me"
          className="my-10 h-screen text-black dark:text-white"
        >
          <h2 className="text-3xl font-bold mb-5">Career Journey</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold">
                Smart Agriculture Startup
              </h3>
              <p>
                I began my journey as an intern at a smart agriculture startup
                that focused on calculating farm yields using satellite images.
                This experience allowed me to understand the potential of
                technology in optimizing agricultural processes and provided a
                strong foundation for my future projects.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Fashion Brand</h3>
              <p>
                After my internship, I worked with a renowned Fashion Brand
                where I contributed to the development of their online presence.
                This role further expanded my skillset and enabled me to work on
                diverse projects.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">E-commerce Company</h3>
              <p>
                My next role was with an e-commerce company, where I learned
                about React and its applications in building user-friendly and
                efficient web applications. This experience significantly
                enhanced my expertise in frontend development.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Stackera Pvt Ltd</h3>
              <p>
                For the past 1.5 years, I have been working at Stackera Pvt Ltd,
                focusing on Next.js and blockchain applications. This
                opportunity has allowed me to explore cutting-edge technologies
                and work on state-of-the-art solutions, further enriching my
                skills and experience.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="my-10 text-black dark:text-white">
          <h2 className="text-3xl font-bold mb-5">Skills & Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <SiHtml5 className="text-4xl" />
              <span className="font-semibold mt-2">HTML</span>
            </div>
            <div className="flex flex-col items-center">
              <SiCss3 className="text-4xl" />
              <span className="font-semibold mt-2">CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <SiSass className="text-4xl" />
              <span className="font-semibold mt-2">SCSS</span>
            </div>
            <div className="flex flex-col items-center">
              <SiJavascript className="text-4xl" />
              <span className="font-semibold mt-2">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTypescript className="text-4xl" />
              <span className="font-semibold mt-2">TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-4xl" />
              <span className="font-semibold mt-2">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <SiChakraui className="text-4xl" />
              <span className="font-semibold mt-2">Chakra UI</span>
            </div>
            <div className="flex flex-col items-center">
              {/* <SiMaterialui className="text-4xl" /> */}
              <span className="font-semibold mt-2">Material-UI</span>
            </div>
            <div className="flex flex-col items-center">
              <SiBootstrap className="text-4xl" />
              <span className="font-semibold mt-2">Bootstrap</span>
            </div>
            <div className="flex flex-col items-center">
              <SiReact className="text-4xl" />
              <span className="font-semibold mt-2">React.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiReactrouter className="text-4xl" />
              <span className="font-semibold mt-2">React Query</span>
            </div>
            <div className="flex flex-col items-center">
              <SiGit className="text-4xl" />
              <span className="font-semibold mt-2">Git</span>
            </div>
            <div className="flex flex-col items-center">
              {/* <SiResponsive className="text-4xl" /> */}
              <span className="font-semibold mt-2">Responsive Design</span>
            </div>
            <div className="flex flex-col items-center">
              {/* <SiAccessibility className="text-4xl" /> */}
              <span className="font-semibold mt-2">Accessibility</span>
            </div>
            <div className="flex flex-col items-center">
              {/* <SiPerformance className="text-4xl" /> */}
              <span className="font-semibold mt-2">
                Performance Optimization
              </span>
            </div>
            <div className="flex flex-col items-center">
              <SiRedux className="text-4xl" />
              <span className="font-semibold mt-2">Redux</span>
            </div>
            <div className="flex flex-col items-center">
              <SiJest className="text-4xl" />
              <span className="font-semibold mt-2">Jest</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTestinglibrary className="text-4xl" />
              <span className="font-semibold mt-2">Testing Library</span>
            </div>
            <div className="flex flex-col items-center">
              {/* <SiRestapi className="text-4xl" /> */}
              <span className="font-semibold mt-2">REST APIs</span>
            </div>
            <div className="flex flex-col items-center">
              <SiGraphql className="text-4xl" />
              <span className="font-semibold mt-2">GraphQL</span>
            </div>
            <div className="flex flex-col items-center">
              <SiWebpack className="text-4xl" />
              <span className="font-semibold mt-2">Webpack</span>
            </div>
            <div className="flex flex-col items-center">
              {/* <SiAgile className="text-4xl" /> */}
              <span className="font-semibold mt-2">Agile Methodologies</span>
            </div>
          </div>
        </section>

        <section id="projects" className="my-10  h-screen">
          <h2 className="text-3xl font-bold mb-5">Projects</h2>
          {/* Replace the divs with your project information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border rounded p-5">
              <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
              <p>Project description</p>
            </div>
            <div className="border rounded p-5">
              <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
              <p>Project description</p>
            </div>
          </div>
        </section>
        <section id="contact" className="my-10  h-screen">
          <h2 className="text-3xl font-bold mb-5">Contact Information</h2>
          <p className="text-xl">Email: [Your Email]</p>
          <p className="text-xl">Phone: [Your Phone Number]</p>
        </section>
        <section id="blog" className="my-10  h-screen">
          <h2 className="text-3xl font-bold mb-5">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Replace the divs with your blog post information */}
            <div className="border rounded p-5">
              <h3 className="text-2xl font-semibold mb-2">Blog Post 1</h3>
              <p>Blog post summary</p>
            </div>
            <div className="border rounded p-5">
              <h3 className="text-2xl font-semibold mb-2">Blog Post 2</h3>
              <p>Blog post summary</p>
            </div>
          </div>
        </section>
        <section id="testimonials" className="my-10  h-screen">
          <h2 className="text-3xl font-bold mb-5">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Replace the divs with your testimonials */}
            <div className="border rounded p-5">
              <p>Client testimonial</p>
              <p className="font-semibold">- Client Name</p>
            </div>
            <div className="border rounded p-5">
              <p>Client testimonial</p>
              <p className="font-semibold">- Client Name</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
