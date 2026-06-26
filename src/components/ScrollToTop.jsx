import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", scroll);

    return () =>
      window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={`fixed bottom-8 right-8
      w-12 h-12 rounded-full
      bg-blue-600
      flex items-center justify-center
      transition-all duration-300
      ${
        visible
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTop;