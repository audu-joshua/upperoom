export type GivingAccount = {
  id: "ngn" | "usd";
  label: string;
  symbol: string;
  available: boolean;
  bank: {
    name: string;
    accountName: string;
    accountNumber: string;
    swiftCode?: string;
  };
  unavailableMessage?: string;
};

export const givingAccounts: GivingAccount[] = [
  {
    id: "ngn",
    label: "Naira",
    symbol: "₦",
    available: true,
    bank: {
      name: "Stanbic IBTC Bank Plc",
      accountName: "Upper Room Cathedral",
      accountNumber: "9201817924",
    },
  },
  {
    id: "usd",
    label: "US Dollar",
    symbol: "$",
    available: false,
    bank: {
      name: "",
      accountName: "Upper Room Cathedral",
      accountNumber: "",
      swiftCode: "",
    },
    unavailableMessage:
      "USD account details will be added soon. Please contact the church office for international wire transfers.",
  },
];

/** Add a Paystack or Flutterwave donation URL when the church is ready */
export const onlineGivingUrl = null as string | null;
