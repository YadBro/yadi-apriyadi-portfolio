import type { ReactNode } from "react";
import type { Icons } from "@/components/component-icon";

export interface PortfolioProject {
  title: string;
  link: string;
}

export interface PortfolioItemData {
  img: string;
  width: number;
  height: number;
  unoptimized?: boolean;
  altImg: string;
  project: PortfolioProject;
  techStacks?: Icons[];
  cardImgClassName?: string;
  description: ReactNode;
}
