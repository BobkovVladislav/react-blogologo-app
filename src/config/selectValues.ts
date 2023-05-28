import { SelectOption } from "../types/types";

export const options: readonly SelectOption[] = [
  { value: "publishedAt:DESC", label: "Date (Latest)" },
  { value: "publishedAt", label: "Date (Earliest)" },
  { value: "title", label: "Title (A-Z)" },
  { value: "title:DESC", label: "Title (Z-A)" },
];
