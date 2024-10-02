// components/ThemeSwitcher.jsx
import { useTheme } from "next-themes";
import { GoMoon } from "react-icons/go";
import { LuSunDim } from "react-icons/lu";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevents mismatch between server-side rendering and client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoids rendering until mounted on client

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <button onClick={toggleTheme} className="text-2xl">
        {theme === "dark" ? <LuSunDim /> : <GoMoon />}
      </button>
    </div>
  );
};
