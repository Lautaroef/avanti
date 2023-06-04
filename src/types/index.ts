export interface Price {
  currencyCode: string;
  amount: string;
}

export interface VariantNode {
  node: Price;
}

export interface Variants {
  edges: VariantNode[];
}

export interface FeaturedImage {
  id: string;
  url: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  featuredImage: FeaturedImage;
  variants: Variants;
  endCursor: string | null;
}
