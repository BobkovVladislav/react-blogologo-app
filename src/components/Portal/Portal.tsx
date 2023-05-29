import { memo, ReactNode } from "react";
import { createPortal } from "react-dom";

export enum PortalTarget {
  ROOT = "root",
  MODAL = "modal",
}

interface PortalProps {
  target: PortalTarget;
  children: ReactNode;
}

export const Portal = memo(({ children, target }: PortalProps) => {
  const container = document.getElementById(target) as HTMLElement;
  return createPortal(children, container);
});
