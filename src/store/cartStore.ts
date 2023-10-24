import { create } from "zustand";
import { Product } from "../interface/products";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type State = {
  productsInCart: Product[];
};

type Actions = {
  addProductToCart: (product: Product) => void;
  removeProductOfToOneFromTheCart: (productId: number) => void;
  removeProductFromCart: (productId: number) => void;
  getTotalPrice: () => number;
};

export const useCartStore = create(
  persist<State & Actions>(
    (set, getState) => ({
      productsInCart: [],

      addProductToCart: (product: Product) => {
        set((state) => {
          const productInCart = state.productsInCart.find(
            (item) => item.id === product.id
          );

          if (productInCart) {
            return {
              productsInCart: state.productsInCart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return {
              productsInCart: [
                ...state.productsInCart,
                { ...product, quantity: 1 },
              ],
            };
          }
        });
      },

      removeProductOfToOneFromTheCart: (productId: number) => {
        set((state) => {
          const productToDelete = state.productsInCart.find(
            (item) => item.id === productId
          );

          if (productToDelete?.quantity! > 1) {
            return {
              productsInCart: state.productsInCart.map((item) =>
                item.id === productId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            };
          } else {
            return {
              productsInCart: state.productsInCart.filter(
                (item) => item.id !== productId
              ),
            };
          }
        });
      },

      removeProductFromCart: (productId: number) => {
        set((state) => ({
          productsInCart: state.productsInCart.filter(
            (item) => item.id !== productId
          ),
        }));
      },

      getTotalPrice: () => {
        const cart = getState().productsInCart;

        const totalPrice = cart.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);

        return totalPrice;
      },
    }),

    { name: "products-in-cart", storage: createJSONStorage(() => AsyncStorage) }
  )
);
