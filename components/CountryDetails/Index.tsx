import { DetailedCountry } from "@localTypes/Country";
import { FC } from "react";
import { Container, List } from "@styles/Country/CountryDetails/Index";

interface Props {
  countryData: DetailedCountry;
}

const CountryDetails: FC<Props> = ({
  countryData: {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  },
}) => {
  return (
    <Container>
      <List>
        <li>
          Native Name: <span>{name.nativeName}</span>
        </li>
        <li>
          Population: <span>{population.toLocaleString()}</span>
        </li>
        <li>
          Region: <span>{region}</span>
        </li>
        <li>
          Sub Region: <span>{subregion}</span>
        </li>
        <li>
          Capital: <span>{capital[0]}</span>
        </li>
      </List>
      <br />
      <List>
        <li>
          Top Level Domain: <span>{tld} </span>
        </li>
        <li>
          Currencies: <span>{currencies}</span>
        </li>
        <li>
          Languages: <span>{languages}</span>
        </li>
      </List>
    </Container>
  );
};

export default CountryDetails;
