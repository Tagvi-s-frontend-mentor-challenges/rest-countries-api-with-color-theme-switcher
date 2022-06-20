import type { NextPage } from "next";
import Navbar from "@components/Navbar";
import SetState from "@localTypes/SetState";
import CountryDetails from "@components/CountryDetails/Index";
import Borders from "@components/CountryDetails/Borders";
import Flag from "@components/CountryDetails/Flag";
import { Main, FlexOnDesktop, Wrapper } from "@styles/Country/Index";
import BackButton from "@components/CountryDetails/BackButton";
import { StaticProps } from "@utils/Country/ssg";
import Head from "next/head";

interface Props {
  setTheme: SetState<"dark" | "light">;
}

const DetailedCountryInfo: NextPage<StaticProps & Props> = ({
  countryData,
  setTheme,
}) => {
  const { flags, name, borders } = countryData;
  return (
    <>
      <Head><title>{name.common}</title></Head>
      <Navbar setTheme={setTheme} />
      <Main>
        <BackButton />
        <FlexOnDesktop>
          <Flag {...{ flags, name }} />
          <Wrapper>
            <h1>{name.common}</h1>
            <CountryDetails countryData={countryData} />
            <Borders borders={borders} />
          </Wrapper>
        </FlexOnDesktop>
      </Main>
    </>
  );
};

export { getStaticPaths, getStaticProps } from "@utils/Country/ssg";

export default DetailedCountryInfo;
