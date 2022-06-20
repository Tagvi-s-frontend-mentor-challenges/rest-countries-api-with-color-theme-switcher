import { FC } from "react";
import { IoMoon } from "react-icons/io5";
import { useTheme } from "styled-components";
import type { Theme } from "@styles/themes";
import SetState from "@localTypes/SetState";
import Nav from "@styles/Navbar";
import Link from "next/link";

interface Props {
  setTheme: SetState<"dark" | "light">;
}

const Navbar: FC<Props> = ({ setTheme }) => {
  const { name } = useTheme() as Theme;
  return (
    <Nav>
      <Link href="/">
        <a aria-label="Back to homepage">Where in the world?</a>
      </Link>
      <button
        type="button"
        aria-label="Toggle theme"
        onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      >
        <IoMoon aria-hidden="true" />
        {`${name[0].toUpperCase()}${name.substring(1)}`} Mode
      </button>
    </Nav>
  );
};

export default Navbar;
