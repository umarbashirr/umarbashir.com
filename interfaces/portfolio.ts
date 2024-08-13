export interface Portfolios {
  title: string;
  porfolios: Portfolio[];
}

export interface Portfolio {
  title: string;
  url: string;
  image: string;
  category?: string;
  techStack?: string[];
  short_desc?: string;
}
