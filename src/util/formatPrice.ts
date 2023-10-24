export const formatPrice = (price: number) => {
  const formattedPrice = price.toLocaleString("es-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return formattedPrice;
};
