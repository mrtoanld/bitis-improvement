export interface IProduct {
  body_html: string;
  created_at: string;
  handle: string;
  id: number;
  product_type: string;
  published_at: string;
  published_scope: string;
  template_suffix: string;
  title: string;
  updated_at: string;
  vendor: string;
  not_allow_promotion: boolean;
  available: boolean;
  tags: string;
  sole_quantity: number;
  images: any[];
  image: any;
  options: any[];
  variants: [];
  metafields: [
    {
      namespace: string;
      key: string;
      value: string;
      value_type: string;
    }
  ];
}
