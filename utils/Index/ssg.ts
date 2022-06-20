import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { Country } from "@localTypes/Country";
import { fetchData } from "@utils/fetchData";
import { getRegions } from "@utils/processData";

export type StaticProps = {
  countries: Country[];
  regions: string[];
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const data: Country[] = await fetchData(
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca2"
  );
  return {
    props: {
      countries: data,
      regions: getRegions(data),
    },
  };
};
