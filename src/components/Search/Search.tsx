import { SearchIcon } from "../../assets";
import { useInput } from "../../hooks/useInput";
import { useDebounce } from "../../hooks/useDebounce";
import {
  ChangeEvent,
  FormEvent,
  HTMLInputTypeAttribute,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/routes";
import { InputWrapper, StyledForm, StyledInput, SubmitButton } from "./styles";
import { setSearchValue } from "../../store/features/blogsSlice/blogsSlice";
import { useAppDispatch } from "../../store/hooks/hooks";

interface SearchProps {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

export const Search = memo((props: SearchProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInputActive, setIsInputActive] = useState(false);
  const handleHide = () => {
    setIsInputActive(true);
  };

  const searchValue = useInput();
  const navigate = useNavigate();
  const debouncedValue = useDebounce(searchValue.value, 1000);
  const dispatch = useAppDispatch();
  const { reset } = useForm();

  const handleSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    navigate(ROUTE.SEARCH);
    reset();
  };

  useEffect(() => {
    dispatch(
      setSearchValue({
        searchValue: debouncedValue,
      })
    );
  }, [debouncedValue, dispatch]);

  return (
    <>
      {isInputActive ? (
        <StyledForm onSubmit={handleSearch}>
          <InputWrapper ref={ref}>
            <StyledInput
              type="search"
              placeholder="Search ..."
              name="search"
              {...searchValue}
            />
            <SubmitButton type="submit" onClick={props.onClick}></SubmitButton>
          </InputWrapper>
        </StyledForm>
      ) : (
        <SearchIcon onClick={handleHide} />
      )}
    </>
  );
});
