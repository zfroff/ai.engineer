import { ReactNode } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}
