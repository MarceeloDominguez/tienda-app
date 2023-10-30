import { render, screen } from "@testing-library/react-native";
import ContentCardProduct from "../../src/components/ContentCardProduct";

const props = {
  price: 19.99,
  description: "Una descripcion del producto",
  discountPercentage: 10,
  rating: 4,
  title: "Titulo del producto: Laptop",
};

describe("Component <ContentCardProduct />", () => {
  it("Should show product information", () => {
    render(<ContentCardProduct {...props} />);

    const titleElement = screen.getByText(`${props.title}`);
    expect(titleElement).toBeTruthy();

    const descriptionElement = screen.getByText(`${props.description}`);
    expect(descriptionElement).toBeTruthy();

    const priceElement = screen.findByText(`${props.price}`);
    expect(priceElement).toBeTruthy();

    const discountPercentageElement = screen.getByText(
      `${props.discountPercentage}% OFF`
    );
    expect(discountPercentageElement).toBeTruthy();

    const ratingElement = screen.getByText(`${props.rating.toFixed(1)}`);
    expect(ratingElement).toBeTruthy();
  });
});
