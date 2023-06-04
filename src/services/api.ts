import { Product } from "@/types";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function fetchProducts(cursor: string | null): Promise<any> {
  const productsPerPage = 20; // Number of products to fetch per page

  const query = `
  {
    products(first: 20) {
      edges {
        node {
          id
          title
          description
          featuredImage {
            id
            url
          }
          variants(first: 3) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
  
  `;

  const { data } = await api.post(
    "",
    { query },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (data.errors?.length > 0) {
    console.error(data.errors);
    throw new Error("Failed to fetch API");
  }

  console.log(data);
  // Extract and return the product data from the response
  return data.data.products.edges.map((edge: { node: Product }) => edge.node);

  // return {
  //   products: data.data.products.edges.map(edge => edge.node),
  //   endCursor: data.data.products.edges[data.data.products.edges.length - 1].cursor
  // };
}
