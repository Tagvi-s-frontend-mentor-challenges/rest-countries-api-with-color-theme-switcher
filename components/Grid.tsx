import { Country as CountryType } from "@localTypes/Country";
import Country from "@components/Country";
import { FC } from "react";
import Container from "@styles/Index/Grid";

interface Props {
  countries: CountryType[];
}

const Grid: FC<Props> = ({ countries }) => {
  return (
    <Container>
      {countries.map(
        ({ flags, name, capital, region, population, cca2 }, idx) => {
          return (
            <Country
              idx={idx}
              key={name.common}
              flag={flags.png}
              name={name.common}
              capital={capital[0]}
              region={region}
              population={population}
              cca2={cca2}
            />
          );
        }
      )}
    </Container>
  );
};

export default Grid;
