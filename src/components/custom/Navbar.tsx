// "use client";

import { FaLeaf } from "react-icons/fa";
// import { IoMdMenu } from "react-icons/io";
// import { Button } from "../ui/button";
// import { RxCross1 } from "react-icons/rx";
// import { useShowHideStore } from "@/stateManagement/Stores";

// export default function () {
//   const { initial, toggle } = useShowHideStore();

//   const links = [
//     {
//       name: "Home",
//       href: "",
//     },
//     {
//       name: "About",
//       href: "",
//     },
//     {
//       name: "Service",
//       href: "",
//     },
//     {
//       name: "Features",
//       href: "",
//     },
//   ];

//   return (
//     <>
//       <div className="bg-black duration-300  text-white h-16 flex lg:px-20 justify-between items-center">
//         <div className=" flex gap-2 items-center p-4 ">
//           <FaLeaf />
//           Plantify
//         </div>
//         {/* <button className="px-4" onClick={() => setinitialMenu(!initial)}> */}
//         {/* </div> */}
//         <div className="md:hidden">
//           <Button onClick={toggle} className="hover:bg-slate-800 bg-black">
//             {initial ? <RxCross1 size={25} /> : <IoMdMenu size={25} />}
//           </Button>
//         </div>
//         <div className="hidden md:block">
//           <div className="flex flex-row gap-2 p-2 ">
//             {links.map((obj: { name: string; href: string }, index: number) => (
//               <Button
//                 className="hover:bg-slate-800 bg-black font-medium"
//                 key={index}
//               >
//                 {obj.name}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div
//         className={`relative md:hidden w-full duration-500   ${
//           initial ? "top-0" : "top-[-80rem]"
//         } `}
//       >
//         <div className="p-2 bg-black text-white flex items-center justify-center flex-col">
//           {links.map((obj: { name: string; href: string }, index: number) => (
//             <Button
//               key={index}
//               className="flex items-center justify-center p-2 w-[40%] bg-black hover:bg-gray-800 font-medium"
//             >
//               {obj.name}
//             </Button>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";

export default function Component() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b border-b-muted/20 px-4 py-3 md:px-6 md:py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <div className=" flex gap-2 items-center p-4 ">
            <FaLeaf />
            Plantify
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
            // data-active={window.location.pathname === "/"}
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
            // data-active={window.location.pathname === "/about"}
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
            // data-active={window.location.pathname === "/services"}
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
            // data-active={window.location.pathname === "/contact"}
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <div className="grid gap-4 p-4">
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
                // data-active={window.location.pathname === "/"}
                prefetch={false}
              >
                <HomeIcon className="h-5 w-5" />
                Home
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
                // data-active={window.location.pathname === "/about"}
                prefetch={false}
              >
                <InfoIcon className="h-5 w-5" />
                About
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
                // data-active={window.location.pathname === "/services"}
                prefetch={false}
              >
                <ServerIcon className="h-5 w-5" />
                Services
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
                // data-active={window.location.pathname === "/contact"}
                prefetch={false}
              >
                <ContactIcon className="h-5 w-5" />
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function ContactIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function InfoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ServerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
