import Image from "next/image";
import type { FC } from "react";
import type { DetailedCountry } from "@localTypes/Country";
import AspectRatio from "@components/AspectRatio";
import extra from "@styles/Country/CountryDetails/Flag";

interface Props {
  flags: DetailedCountry["flags"];
  name: DetailedCountry["name"];
}

const Flag: FC<Props> = ({ flags: { svg: flag }, name }) => {
  return (
    <AspectRatio extraStyles={extra} width="100%" ratio={16 / 10}>
      <Image
        src={flag}
        alt={`The flag of ${name.common}`}
        priority
        layout="fill"
        objectFit="cover"
      />
    </AspectRatio>
  );
};

export default Flag;
