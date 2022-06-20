import { FC } from "react";
import Image from "next/image";
import AspectRatio from "./AspectRatio";
import Router from "next/router";
import { Container, InfoContainer } from "@styles/Index/Country";

interface Props {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  idx: number;
  cca2: string;
}

const Country: FC<Props> = ({
  flag,
  name,
  population,
  region,
  capital,
  idx,
  cca2,
}) => {
  return (
    <Container onClick={() => Router.push(`/${cca2}`)}>
      <AspectRatio width="100%" ratio={16 / 9}>
        <Image
          itemRef=""
          {...(idx <= 10 ? { priority: true } : {})}
          src={flag}
          alt={`Flag of ${name}`}
          layout="fill"
          objectFit="cover"
        />
      </AspectRatio>
      <InfoContainer>
        <h1>{name}</h1>
        <ul>
          <li>
            <p>
              Population: <span>{population.toLocaleString()}</span>
            </p>
          </li>
          <li>
            <p>
              Region: <span>{region}</span>
            </p>
          </li>
          <li>
            <p>
              Capital: <span>{capital}</span>
            </p>
          </li>
        </ul>
      </InfoContainer>
    </Container>
  );
};

export default Country;
