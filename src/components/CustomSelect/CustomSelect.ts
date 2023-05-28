import Select, { SingleValue } from "react-select";
import { selectStyles } from "./styles";
import { SelectOption } from "../../types/types";
import { options } from "../../config";

interface SelectProps {
  handleSelect: (option: SingleValue<SelectOption | null | any>) => void;
}

export const CustomSelect = ({ handleSelect }: SelectProps) => {
  return (
    <Select
      options={options}
      onChange={handleSelect}
      styles={selectStyles}
      defaultValue={options[0]}
      isMulti={false}
      isSearchable={false}
    />
  );
};
