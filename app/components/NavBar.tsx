import Link from "next/link";
import Search from "./Search";
import {FaYoutube, FaTwitter, FaGithub, FaLaptop} from "react-icons/fa"

export default function NavBar() {
  return (
    <nav className="bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href={"/"}>Rocket</Link>
      </h1>
      <div className="flex flex-row justify-center md:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
        <Link className="text-white/90 hover:text-white" href="https://www.youtube.com/" target="_blank"><FaYoutube /></Link>
        <Link className="text-white/90 hover:text-white" href="https://www.youtube.com/" target="_blank"><FaTwitter /></Link>
        <Link className="text-white/90 hover:text-white" href="https://www.youtube.com/" target="_blank"><FaGithub /></Link>
        <Link className="text-white/90 hover:text-white" href="https://www.youtube.com/" target="_blank"><FaLaptop /></Link>
      </div>
      <Search />
    </nav>
  )
}
