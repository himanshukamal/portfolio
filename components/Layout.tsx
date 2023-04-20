// // import React, { ReactNode } from "react";
// // import { BsSun, BsMoon } from "react-icons/bs";
// // import { useTheme } from "./ThemeContext";

// // interface LayoutProps {
// //   children: ReactNode;
// // }

// // const Layout: React.FC<LayoutProps> = ({ children }) => {
// //   const { darkMode, toggleDarkMode } = useTheme();

// //   return (
// //     <div
// //       className={`flex flex-col min-h-screen ${
// //         darkMode ? "dark bg-gray-800" : ""
// //       }`}
// //     >
// //       <header className="flex justify-between items-center p-5 bg-white dark:bg-gray-800 text-black dark:text-white">
// //         <nav className="flex space-x-4">
// //           <a
// //             href="#introduction"
// //             className="hover:text-blue-600 dark:hover:text-blue-400"
// //           >
// //             Introduction
// //           </a>
// //           <a
// //             href="#about-me"
// //             className="hover:text-blue-600 dark:hover:text-blue-400"
// //           >
// //             About Me
// //           </a>
// //           <a
// //             href="#skills"
// //             className="hover:text-blue-600 dark:hover:text-blue-400"
// //           >
// //             Skills & Expertise
// //           </a>
// //           <a
// //             href="#projects"
// //             className="hover:text-blue-600 dark:hover:text-blue-400"
// //           >
// //             Projects
// //           </a>
// //           <a
// //             href="#testimonials"
// //             className="hover:text-blue-600 dark:hover:text-blue-400"
// //           >
// //             Testimonials
// //           </a>
// //           <a
// //             href="#contact"
// //             className="hover:text-blue-600 dark:hover:text-blue-400"
// //           >
// //             Contact Information
// //           </a>
// //           <a
// //             href="#blog"
// //             className="hover:text-blue-600 dark:hover:text-blue-400"
// //           >
// //             Blog
// //           </a>
// //         </nav>
// //         <button
// //           className="flex items-center p-2 rounded-md"
// //           onClick={toggleDarkMode}
// //         >
// //           {darkMode ? (
// //             <BsSun
// //               size={24}
// //               className="text-yellow-500 fill-current shadow-md"
// //             />
// //           ) : (
// //             <BsMoon
// //               size={24}
// //               className="text-blue-500 fill-current shadow-md"
// //             />
// //           )}
// //         </button>
// //       </header>
// //       <main className="flex-grow">{children}</main>
// //     </div>
// //   );
// // };

// // export default Layout;

// import React, { ReactNode } from "react";
// import { useTheme } from "./ThemeContext";

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const { darkMode, toggleDarkMode } = useTheme();

//   return (
//     <div
//       className={`flex flex-col min-h-screen ${
//         darkMode ? "dark bg-gray-800" : ""
//       }`}
//     >
//       <header className="flex justify-evenly items-center p-5 bg-white dark:bg-gray-800 text-black dark:text-white">
//         <nav className="flex space-x-4">
//           {/* Navigation links */}
//           <a
//             href="#introduction"
//             className="hover:text-blue-600 dark:hover:text-blue-400"
//           >
//             Introduction
//           </a>
//           <a
//             href="#about-me"
//             className="hover:text-blue-600 dark:hover:text-blue-400"
//           >
//             About Me
//           </a>
//           <a
//             href="#skills"
//             className="hover:text-blue-600 dark:hover:text-blue-400"
//           >
//             Skills & Expertise
//           </a>
//           <a
//             href="#projects"
//             className="hover:text-blue-600 dark:hover:text-blue-400"
//           >
//             Projects
//           </a>
//           <a
//             href="#testimonials"
//             className="hover:text-blue-600 dark:hover:text-blue-400"
//           >
//             Testimonials
//           </a>
//           <a
//             href="#contact"
//             className="hover:text-blue-600 dark:hover:text-blue-400"
//           >
//             Contact Information
//           </a>
//           <a
//             href="#blog"
//             className="hover:text-blue-600 dark:hover:text-blue-400"
//           >
//             Blog
//           </a>
//         </nav>
//         <label
//           htmlFor="darkModeSwitch"
//           className="inline-flex items-center cursor-pointer"
//         >
//           {/* <span className="mr-3 text-sm">Dark Mode</span> */}
//           <span className="relative">
//             <input
//               type="checkbox"
//               id="darkModeSwitch"
//               className="hidden"
//               onChange={toggleDarkMode}
//               checked={darkMode}
//             />
//             <span
//               className={`${
//                 darkMode ? "bg-blue-600" : "bg-gray-300"
//               } absolute left-0 w-12 h-6 rounded-full transition-colors duration-300`}
//             ></span>
//             <span
//               className={`${
//                 darkMode ? "translate-x-6" : "translate-x-0"
//               } absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-300`}
//             ></span>
//           </span>
//         </label>
//       </header>
//       <main className="flex-grow">{children}</main>
//     </div>
//   );
// };

// export default Layout;

import React, { ReactNode } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io"; // Import IoIosMoon and IoIosSunny icons
import { useTheme } from "./ThemeContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        darkMode ? "dark bg-gray-800" : ""
      }`}
    >
      <header className="flex justify-around items-center p-5 bg-white dark:bg-gray-800 text-black dark:text-white">
        <nav className="flex space-x-4">
          {/* Navigation links */}
          {/* Navigation links */}
          <a
            href="#introduction"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Introduction
          </a>
          <a
            href="#about-me"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Skills & Expertise
          </a>
          <a
            href="#projects"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Projects
          </a>
          <a
            href="#testimonials"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact Information
          </a>
          <a
            href="#blog"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Blog
          </a>
        </nav>
        <label
          htmlFor="darkModeSwitch"
          className="inline-flex items-center cursor-pointer"
        >
          <span className="relative">
            <input
              type="checkbox"
              id="darkModeSwitch"
              className="hidden"
              onChange={toggleDarkMode}
              checked={darkMode}
            />
            <span
              className={`${
                darkMode ? "bg-blue-600" : "bg-gray-300"
              } absolute left-0 w-12 h-6 rounded-full transition-colors duration-300 flex items-center justify-between px-1`}
            >
              <IoIosMoon
                size={18}
                className={`${
                  darkMode ? "opacity-40" : "text-yellow-300 "
                } fill-current`}
              />
              <IoIosSunny
                size={18}
                className={`${
                  darkMode ? "opacity-40 " : " text-yellow-300"
                } fill-current`}
              />
            </span>
            <span
              className={`${
                darkMode ? "translate-x-6" : "translate-x-0"
              } absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-300`}
            ></span>
          </span>
        </label>
      </header>
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
