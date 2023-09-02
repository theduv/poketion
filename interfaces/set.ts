interface Set {
  id: string;
  images: { logo: string; symbol: string };
  legalities: {
    expanded: string;
    standard: string;
    unlimited: string;
  };
  name: string;
  printedTotal: number;
  ptcgoCode: string;
  releaseDate: string;
  series: string;
  total: number;
  updatedAt: string;
}

export default Set;
