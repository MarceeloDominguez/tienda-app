import { render } from "@testing-library/react-native";
import Error from "../../src/components/Error";

describe("Component <Error />", () => {
  it("Should show the error message", () => {
    const { getByText } = render(<Error />);

    const errorMessage = getByText("¡Ups, algo salio mal!");
    expect(errorMessage).toBeTruthy();
  });
});
