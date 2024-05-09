export interface data {
  id: number;
  title: string;
  desc: string;
  image: string;
  tag: string;
  href: string;
  padding: number
  badges: badges[];
}

export interface badges {
  color: string;
  label: string;
}
