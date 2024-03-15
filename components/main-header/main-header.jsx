import Link from "next/link";
import LogoImage from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import classes from "@/components/main-header/main-header.module.css";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image
            src={LogoImage}
            alt="A plate with food on it"
            width={80}
            height={80}
            priority
          />
          <span>NextLevel Food</span>
        </Link>

        <nav className={classes.nav}>
          <ul className="flex items-center text-white justify-between space-x-6 font-bold text-xl">
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
