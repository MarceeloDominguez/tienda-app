import { render, screen, fireEvent } from "@testing-library/react-native";
import Buttons from "../../src/components/cart/Buttons";
import { Product } from "../../src/interface/products";

const product = {
  id: 8,
  title: "Microsoft Surface Laptop 4",
  description:
    "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
  price: 1499,
  discountPercentage: 10.23,
  rating: 4.43,
  stock: 68,
  brand: "Microsoft Surface",
  category: "laptops",
  thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/8/1.jpg",
    "https://i.dummyjson.com/data/products/8/2.jpg",
    "https://i.dummyjson.com/data/products/8/3.jpg",
    "https://i.dummyjson.com/data/products/8/4.jpg",
    "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
  ],
};

const mockAddProductToCart = jest.fn();
const mockRemoveProductOfToOneFromTheCart = jest.fn();
const mockRemoveProductFromCart = jest.fn();

jest.mock("../../src/store/cartStore", () => ({
  useCartStore: () => ({
    addProductToCart: mockAddProductToCart,
    removeProductOfToOneFromTheCart: mockRemoveProductOfToOneFromTheCart,
    removeProductFromCart: mockRemoveProductFromCart,
  }),
}));

describe("Component <Buttons />", () => {
  it("Should add and remove from cart", () => {
    render(<Buttons product={product as Product} />);

    const addButton = screen.getByText("+");
    const removeOfToOneFromTheCartButton = screen.getByText("-");
    const removeButton = screen.getByText("Eliminar");

    fireEvent.press(addButton);
    expect(mockAddProductToCart).toHaveBeenCalledWith(product);

    fireEvent.press(removeOfToOneFromTheCartButton);
    expect(mockRemoveProductOfToOneFromTheCart).toHaveBeenCalledWith(
      product.id
    );

    fireEvent.press(removeButton);
    expect(mockRemoveProductFromCart).toHaveBeenCalledWith(product.id);
  });
});
