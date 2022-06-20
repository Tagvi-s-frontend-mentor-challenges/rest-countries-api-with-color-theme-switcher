import type { NextPage } from "next";
import Navbar from "@components/Navbar";
import Input from "@components/Input";
import Filter from "@components/Filter";
import { useEffect, useState } from "react";
import SetState from "@localTypes/SetState";
import { StaticProps } from "@utils/Index/ssg";
import { FilterManager } from "@utils/Index/filterCountries";
import { Main, Wrapper } from "@styles/Index/Index";
import Grid from "@components/Grid";
import Head from "next/head";

const Home: NextPage<
  StaticProps & {
    setTheme: SetState<"dark" | "light">;
  }
> = ({ countries, regions, setTheme }) => {
  const [input, setInput] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);
  useEffect(() => {
    const filterManager = new FilterManager(countries, setFilteredCountries);
    filterManager.handleInputChange(input, regionFilter);
  }, [input, regionFilter, countries, setFilteredCountries]);
  return (
    <>
      <Head>
        <title>Where in the world?</title>
      </Head>
      <Navbar setTheme={setTheme} />
      <Main>
        <Wrapper>
          <Input setInput={setInput} input={input} />
          <Filter setRegionFilter={setRegionFilter} regions={regions} />
        </Wrapper>
        <Grid countries={filteredCountries} />
      </Main>
    </>
  );
};

export { getStaticProps } from "@utils/Index/ssg";
export default Home;
