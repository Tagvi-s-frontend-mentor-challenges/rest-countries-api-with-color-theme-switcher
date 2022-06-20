import { FC } from "react";
import Button from "@styles/Country/CountryDetails/Button";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const BackButton: FC = () => {
  return (
    <Link href="/">
      <Button aria-label="Go back" width="max-content">
        <IoArrowBack aria-hidden />
        Back
      </Button>
    </Link>
  );
};

export default BackButton;
