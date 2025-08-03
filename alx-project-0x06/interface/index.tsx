// Home page props
export interface PageRouteProps {
  pageRoute: string;
}

// Button props
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// Layout props
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}
