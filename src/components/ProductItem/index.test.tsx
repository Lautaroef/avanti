import { render, screen } from "@testing-library/react";
import { ProductItem } from "./index";

test("renders product item", () => {
  render(
    <ProductItem
      product={{
        id: "gid://shopify/Product/7c982853619734",
        title: "Slides",
        description:
          "Simple, minimal and comfortable, these slides feature a classic design in the perfect shade of iron. Whether you're just lounging around the house or running errands, these slides will offer all-day comfort.",
        featuredImage: {
          id: "gid://shopify/ProductImage/39774608687126",
          url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/slides.jpg?v=1675447358",
        },
        variants: {
          edges: [
            {
              node: {
                currencyCode: "CAD",
                amount: "25.0",
              },
            },
            {
              node: {
                currencyCode: "CAD",
                amount: "25.0",
              },
            },
            {
              node: {
                currencyCode: "CAD",
                amount: "25.0",
              },
            },
          ],
        },
      }}
    />
  );
  const productName = screen.getByText(/Test Product/i);
  const productPrice = screen.getByText(/100/i);
  expect(productName).toBeInTheDocument();
  expect(productPrice).toBeInTheDocument();
});
