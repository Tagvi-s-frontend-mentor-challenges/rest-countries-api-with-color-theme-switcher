import Select from "react-select";
import { FC } from "react";
import { useTheme } from "styled-components";
import { Theme } from "@styles/themes";
import SetState from "@localTypes/SetState";

const styles: Record<string, (provided: any) => {}> = {
  dropdownIndicator: (provided) => ({
    ...provided,
    background: "transparent",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  menuList: (provided) => ({
    ...provided,
    padding: "0.5rem",
  }),

  option: (provided) => ({
    ...provided,
    background: "transparent !important",
    color: "inherit",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "inherit",
  }),
};
interface Props {
  regions: string[];
  setRegionFilter: SetState<string>;
}

const Filter: FC<Props> = ({ regions, setRegionFilter }) => {
  const theme = useTheme() as Theme;
  return (
    <Select
      placeholder="Filter by Region"
      aria-label="Filter by Region"
      id="id"
      instanceId="instanceId"
      inputId="inputId"
      isSearchable={false}
      onChange={(e) => {
        if (!e) return;
        setRegionFilter(e.value);
      }}
      styles={{
        ...styles,
        container: (provided) => ({
          ...provided,
          width: "max-content",
          boxShadow: "2px 2px 2px #00000011",
        }),
        singleValue: (provided) => ({
          ...provided,
          color: theme.text,
        }),
        control: (provided) => ({
          fontWeight: "600",
          fontSize: "0.8rem",
          ...provided,
          backgroundColor: theme.element,
          border: "none",
          borderRadius: ".25rem",
        }),
        menu: (provided) => ({
          ...provided,
          background: theme.element,
          width: "max-content",
        }),
      }}
      options={regions.sort().map((region) => ({
        value: region,
        label: region,
      }))}
    />
  );
};

export default Filter;
