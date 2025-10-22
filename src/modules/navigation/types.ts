export interface NavigationItem {
  path: string;
  label: string;
  children?: NavigationItem[];
}

export interface NavigationLinkProps {
  item: NavigationItem;
  isActive: boolean;
}
