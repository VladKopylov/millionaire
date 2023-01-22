export function formatAward(award: number, currency: "USD" | "EUR" = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(award);
}
