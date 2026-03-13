
export interface Product {
  id: string;
  name: string;
  style: string;
  description: string;
  priceTotal: string;
  priceInstallment: string;
  originalPriceTotal?: string;
  originalPriceInstallment?: string;
  measures: string;
  fabric: string;
  image: string;
  link: string;
}

export interface CatalogState {
  selectedProduct: Product | null;
  isModalOpen: boolean;
}
