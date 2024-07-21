"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";
export default function () {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkmode = localStorage.getItem("darkmode") === "True";
    setDarkMode(darkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkmode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <Switch onClick={toggleDarkMode} />
        {darkMode ? <MdNightlight size={20} /> : <CiLight size={20} />}
      </div>
    </>
  );
}
