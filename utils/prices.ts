import { LineItem } from "./types/wooCommerceTypes";

export function computeTotalPrice(lineItems: LineItem[]): string {
    if (!lineItems.length) return "0.00€";

    const totalsArray = lineItems.map((lineItem) => {
      return parseFloat(lineItem.price!) * 100 * lineItem.quantity;
    });
    const total = totalsArray.reduce((prev, next) => prev + next);
    const formattedTotal = `${(total / 100).toFixed(2)}€`;
    return formattedTotal;
}
