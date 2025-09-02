import { useState, useEffect } from "react";

function TypingTitle() {
  const roles = ["Full Stack Developer", "Programmer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // current role index
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let speed = isDeleting ? 50 : 120; // typing vs deleting speed

    const handler = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length); // switch role
        }
      }
    }, speed);

    return () => clearTimeout(handler);
  }, [text, isDeleting, index]);

  return (
    <div className="mt-2 flex items-center space-x-2 text-3xl font-semibold text-white">
      <h2 className="text-white">I am a </h2>
      <h2 className="text-purple-400 border-r-2 border-purple-400 animate-blink">
        {text}
      </h2>
    </div>
  );
}

export default TypingTitle;
