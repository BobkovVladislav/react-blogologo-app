import { memo } from "react";
import { TabButton } from "./styles";

interface TabsProps {
  tabName: string;
  setTab: () => void;
  isActive: boolean;
}

export const Tabs = memo(({ setTab, tabName, isActive }: TabsProps) => {
  return (
    <TabButton to={""} onClick={setTab} $isActive={isActive}>
      {tabName}
    </TabButton>
  );
});
