// "use client";
// import { Switch } from "@/components/ui/switch";
// import { useEffect, useState } from "react";
// import { CiLight } from "react-icons/ci";
// import { MdNightlight } from "react-icons/md";
// import { useRecoilState } from "recoil";
// import { darkMode as DM } from "@/stateManagement/Stores";
// export default function () {
//   const [darkMode, setDarkMode] = useRecoilState(DM);

//   useEffect(() => {
//     const darkmode = localStorage.getItem("darkmode") === "True";
//     setDarkMode(darkMode);
//   }, []);

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", darkMode);
//     localStorage.setItem("darkmode", JSON.stringify(darkMode));
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <>
//       <div className="flex items-center justify-center gap-2">
//         <Switch onClick={toggleDarkMode} />
//         {darkMode ? <MdNightlight size={20} /> : <CiLight size={20} />}
//       </div>
//     </>
//   );
// }

"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only text-white">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
