import {
  Country,
  DetailedCountry,
  RecievedDetailedCountry,
} from "@localTypes/Country";
import { fetchMultiple } from "./fetchData";

export function getRegions(countries: Country[]) {
  return Array.from(new Set(countries.map(({ region }) => region)));
}

type BorderFetchResult = {
  name: {
    common: string;
  };
  cca2: string;
}[][];

export async function getBorders(
  borders: RecievedDetailedCountry["borders"]
): Promise<DetailedCountry["borders"]> {
  const fetchUrls = borders.map(
    (border) =>
      `https://restcountries.com/v3.1/alpha?codes=${border}&fields=name,cca2`
  );
  const names: BorderFetchResult | void = await fetchMultiple(fetchUrls);

  if (!names) {
    throw new Error("Could not fetch borders");
  }

  const arr: DetailedCountry["borders"] = names.map((data) => {
    const [
      {
        name: { common },
        cca2,
      },
    ] = data;
    return { name: common, code: cca2 };
  });
  return arr;
}

export function getCurrencies(
  currencies: RecievedDetailedCountry["currencies"]
): string {
  const names: string[] = [];
  for (const currency of Object.values(currencies)) {
    if (!currency?.name) {
      continue;
    }
    names.push(currency.name);
  }
  return names.join(", ");
}
export function getLanguages(
  languages: RecievedDetailedCountry["languages"]
): string {
  const names: string[] = [];
  for (const language of Object.values(languages)) {
    if (!language) continue;
    names.push(language);
  }
  return names.join(", ");
}

export function getNativeName(
  nativeName: RecievedDetailedCountry["name"]["nativeName"]
): string {
  if (!Object.keys(nativeName).length) return "";
  const firstNativeName = Object.values(nativeName)[0];
  if (!firstNativeName.common) return "";
  return firstNativeName.common;
}
export async function processCountryDetails(
  data: RecievedDetailedCountry
): Promise<DetailedCountry> {
  const { borders, currencies, languages, name, population, tld } = data;
  return {
    ...data,
    population: population,
    name: {
      ...name,
      nativeName: getNativeName(name.nativeName),
    },
    tld: tld.length ? tld[0] : "",
    currencies: getCurrencies(currencies),
    languages: getLanguages(languages),
    borders: await getBorders(borders),
  };
}
