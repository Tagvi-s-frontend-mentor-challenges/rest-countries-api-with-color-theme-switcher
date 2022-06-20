import { Country } from "@localTypes/Country";
import SetState from "@localTypes/SetState";
import Fuse from "fuse.js";
import throttle from "lodash.throttle";
export class FilterManager {
  private fuse: Fuse<Country>;
  private countries: Country[];
  private setFilteredCountries: SetState<Country[]>;
  constructor(countries: Country[], setFilteredCountries: SetState<Country[]>) {
    this.fuse = new Fuse(countries, {
      threshold: 0.3,
      keys: ["name.common"],
    });
    this.setFilteredCountries = setFilteredCountries;
    this.countries = countries;
  }
  handleInputChange = throttle((input: string, regionFilter: string) => {
    if (!input && regionFilter) {
      this.setFilteredCountries(
        this.countries.filter(({ region }) => region === regionFilter)
      );
      return;
    }

    if (!input) return this.setFilteredCountries(this.countries);
    const results = this.fuse.search(input).map(({ item }) => item);
    if (regionFilter) {
      this.setFilteredCountries(
        results.filter((item) => item.region === regionFilter)
      );
      return;
    }

    this.setFilteredCountries(results);
  }, 1000);
}
