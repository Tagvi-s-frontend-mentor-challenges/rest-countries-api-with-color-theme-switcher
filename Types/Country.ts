export type Country = {
  flags: {
    png: string;
    svg: string;
  };
  name: { common: string } & Record<string, any>;
  capital: string[];
  region: string;
  population: number;
  cca2: string;
};
export type RecievedDetailedCountry = {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    nativeName: Record<string, { official: string; common: string }> | {};
  };
  tld: string[];
  currencies: Record<string, { name: string; symbol: string }>;
  capital: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  borders: string[];
  population: number;
};

type Modify<A, B> = Omit<A, keyof B> & B;

export type DetailedCountry = Modify<
  RecievedDetailedCountry,
  {
    name: Modify<RecievedDetailedCountry["name"], { nativeName: string }>;
    tld: string;
    currencies: string;
    languages: string;
    borders: { name: string; code: string }[];
  }
>;
