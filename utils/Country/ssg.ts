import type {
  DetailedCountry,
  RecievedDetailedCountry,
} from "@localTypes/Country";
import { fetchData } from "@utils/fetchData";
import { processCountryDetails } from "@utils/processData";
import type { GetStaticPaths, GetStaticProps } from "next";

type Path = {
  country: string;
};

export const getStaticPaths: GetStaticPaths<Path> = async () => {
  const data: { cca2: string }[] = await fetchData(
    "https://restcountries.com/v3.1/all?fields=cca2"
  );
  return {
    paths: data.map(({ cca2 }) => ({ params: { country: cca2 } })),
    fallback: false,
  };
};
export type StaticProps = {
  countryData: DetailedCountry;
};

export const getStaticProps: GetStaticProps<StaticProps, Path> = async ({
  params,
}) => {
  if (!params)
    return {
      notFound: true,
    };
  const { country } = params;
  const [data]: RecievedDetailedCountry[] = await fetchData(
    `https://restcountries.com/v3.1/alpha?codes=${country}&fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders`
  );
  return {
    props: { countryData: await processCountryDetails(data) },
  };
};
