import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  let [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <>
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6 ${className}`}
      >
        {items.map((item, idx) => (
          <div
            key={item?.link}
            className="relative group block p-2 h-full w-full cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedProject(item)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-purple-200/70 dark:bg-purple-800/60 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              {item.image && <CardImage src={item.image} alt={item.title} />}
              {item.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-purple-900/40 text-purple-300 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <CardTitle>{item.title}</CardTitle>
              {item.dates && (
                <p className="text-gray-400 text-sm mt-1">{item.dates}</p>
              )}
              <CardDescription>{item.description}</CardDescription>
              {item.members && (
                <div className="flex mt-4 -space-x-3">
                  {item.members.slice(0, 4).map((member, i) => (
                    <img
                      key={i}
                      src={member.avatar}
                      alt={member.name}
                      className="w-8 h-8 rounded-full border-2 border-gray-900 object-cover"
                    />
                  ))}
                  {item.members.length > 4 && (
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-700 text-white text-xs font-semibold border-2 border-gray-900">
                      +{item.members.length - 4}
                    </span>
                  )}
                </div>
              )}
            </Card>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] my-10 p-6 relative overflow-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-transparent"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                className="absolute top-4 right-4 text-xl font-extrabold text-white hover:text-red-600"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              <div>
                {selectedProject.image && (
                  <CardImage
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="mt-10 h-auto"
                  />
                )}

                {selectedProject.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-purple-900/40 text-purple-300 text-xs font-medium px-3 py-2 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <h2 className="text-white text-xl font-bold mt-4">
                  {selectedProject.title}
                </h2>
                {selectedProject.dates && (
                  <p className="text-gray-400 text-sm mt-1">
                    {selectedProject.dates}
                  </p>
                )}
                <p className="text-gray-300 text-base mt-3 leading-relaxed">
                  {selectedProject.description}
                </p>

                {selectedProject.members && (
                  <div className="mt-6">
                    <h3 className="text-lg text-purple-300 font-semibold mb-3">
                      Team Members
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.members.map((member, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-4 bg-gray-800/80 hover:bg-gray-700 transition-colors px-4 py-3 rounded-xl shadow-md"
                        >
                          {member.avatar && (
                            <img
                              src={member.avatar}
                              alt={member.name}
                              className="w-10 h-10 rounded-full object-cover border border-purple-500/30"
                            />
                          )}

                          <div className="flex items-center gap-6">
                            <span className="text-gray-200 font-medium w-40">
                              {member.name}
                            </span>

                            <div className="flex items-center space-x-4">
                              {member.github && member.github !== "#" && (
                                <a
                                  href={member.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-400 hover:text-white transition-colors"
                                >
                                  <FaGithub size={20} />
                                </a>
                              )}
                              {member.linkedin && member.linkedin !== "#" && (
                                <a
                                  href={member.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:text-blue-500 transition-colors"
                                >
                                  <FaLinkedin size={20} />
                                </a>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex gap-4 mt-6">
                  <div className="flex gap-4 mt-6">
                    {selectedProject.code && selectedProject.code !== "#" && (
                      <a
                        href={selectedProject.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-6 py-3 border-2 border-purple-600 hover:bg-purple-600 hover:text-white text-purple-600 font-semibold rounded-lg transition-all duration-300"
                      >
                        View Code
                      </a>
                    )}
                    {selectedProject.live && selectedProject.live !== "#" && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
                      >
                        View Live App
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export const Card = ({ className, children }) => {
  return (
    <div
      className={`rounded-2xl h-full w-full px-4 pb-6 overflow-hidden bg-gray-900 border border-transparent 
      dark:border-purple-400/30 group-hover:border-purple-500 relative z-20 ${className}`}
    >
      <div className="relative z-50">
        <div className="px-2">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={`text-gray-100 font-bold tracking-wide text-lg mt-4 ${className}`}
    >
      {children}
    </h4>
  );
};

export const CardImage = ({ src, alt, className }) => {
  return (
    <div className="mt-4">
      <img
        src={src}
        alt={alt}
        className={`w-full object-cover rounded-xl border border-purple-500/30 ${className}`}
      />
    </div>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={`mt-4 text-gray-300 tracking-wide leading-relaxed text-sm line-clamp-2 ${className}`}
    >
      {children}
    </p>
  );
};
