import { DetailedCountry } from "@localTypes/Country";
import { Border, Container } from "@styles/Country/CountryDetails/Borders";
import { FC } from "react";
import Link from "next/link";

interface Props {
  borders: DetailedCountry["borders"];
}

const Borders: FC<Props> = ({ borders }) => {
  return borders.length ? (
    <>
      <h2>Border Countries: </h2>
      <Container title="Borders">
        {borders.map(({ code, name }) => {
          return (
            <Link key={code} href={`/${code}`}>
              <Border>{name}</Border>
            </Link>
          );
        })}
      </Container>
    </>
  ) : null;
};

export default Borders;
