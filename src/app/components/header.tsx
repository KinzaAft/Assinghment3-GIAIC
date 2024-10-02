import Link from "next/link";
import about from "../aboutUs/page";

export default function Header() {
  return (
    <div id="nav-bar" className="flex justify-between w-full">
      <h1 className="logo mt-3 text-3xl ml-2.5">Portfolio</h1>
      <ul className="flex gap-4 md:gap-6 mt-3 text-xl">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/aboutUs">About</Link>
        </li>
        <li>
          <Link href="/contactUs">Contact us</Link>
        </li>
      </ul>
    </div>
  );
}
