import { memo } from "react";
import { PaginationButton } from "./styles";

interface PaginationProps {
  handlePage: () => void;
  requestParams: number;
  isActive: boolean;
}

export const Pagination = memo(
  ({ handlePage, requestParams, isActive }: PaginationProps) => {
    return (
      <PaginationButton
        onClick={handlePage}
        current={requestParams}
        $isActive={isActive}
      >
        {requestParams}
      </PaginationButton>
    );
  }
);
