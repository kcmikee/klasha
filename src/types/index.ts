export interface SideNav {
  title: string;
  links: { name: string; route: string; image: any; active?: any }[];
}

export interface LoginProp {
  email: string;
  password: string;
}

export interface EmptyObjectProps {
  [key: string]: any;
}

export type PaymentType = {
  _id: string;
  calculatedFee: number;
  cnyValue: number;
  createdAt: string;
  fee: number;
  nairaValue: number;
  payment_status: string;
  rate: number;
  totalAmount: number;
  vendor: string;
  user: string;
  updatedAt: string;
};

export type VoucherType = {
  _id: string;
  country: string;
  createdAt: string;
  currency_name: string;
  currency_symbol: string;
  generated_by: string;
  iso_alphabetic_code: string;
  redeemed: boolean;
  redeemed_at?: string;
  redeemed_by?: string;
  voucher_amount: number;
  voucher_code: string;
  voucher_token: string;
  transaction_Id?: string | number;
  Transaction_Id?: string | number;
  charges_fee?: { flutterWave: number; reloadit: number };
  amount_paid?: number;
  amount_settled?: number;
  tx_ref?: string | number;
};

export type SwapType = {
  swapId: string;
  amount: number;
  exchange: number;
  fee: number;
  fromAddress: string;
  fromCurrency: string;
  toAddress: string;
  toCurrency: string;
  toValue: number;
  createdAt: string;
  updatedAt: string;
  _id: string;
  user: CustomerType;
};

export type CryptoType = {
  _id: string;
  amount: number;
  createdAt: string;
  currency: string;
  currencyLabel: string;
  dollarEquivalent: number;
  nairaEquivalent: number;
  receiver: string;
  sender: string;
  total: number;
  transactionFee: number;
  type: string;
  updatedAt: string;
  walletAddress: string;
};

export type TransactionType = {
  _id: string;
  createdAt: string;
  transaction_description: string;
  folio_tag: string;
  is_discounted: boolean;
  transaction_amount: number;
  transaction_balance: number;
  transaction_id: string;
  transaction_name: string;
  transaction_status: "pending" | "in_progress" | "success" | "failed";
  transaction_type: string;
  updatedAt: string;
  user_id: {
    avatar: string | undefined;
    email: string;
    first_name: string;
    last_name: string;
    folio_tag: string;
    phone_number: string;
    country: string;
    presence: boolean;
    _id: string;
  };
};

export type CustomerType = {
  wallet: any;
  _id: string;
  accountStatus: string;
  avatar: string;
  cancelledTrades: number;
  completedTrades: number;
  country: string;
  cryptoTransfersMade: CryptoType[];
  cryptoTransfersReceived: CryptoType[];
  country_code: string;
  createdAt: string;
  email: string;
  first_name: string;
  folio_tag: string;
  is_verified: boolean;
  last_name: string;
  phone_number: string;
  presence: boolean;
  paymentTrackers: PaymentType[];
  role: string;
  soft_delete: boolean;
  stats: {
    totalAmountReceived: number;
    totalAmountSent: number;
    totalTransfers: number;
    totalTransactions: number;
    totalWithdrawals: number;
    totalTrades: number;
    totalAmountWithdrawn: number;
    totalAmountTransacted: number;
    totalAmountTraded: number;
    totalAmountToMerchant: number;
    successfulVendorPayments: number;
    failedVendorPayments: number;
    completedTransactions: number;
    completedTrades: number;
    completeWithdrawals: number;
    cancelledWithdrawals: number;
    cancelledTransactions: number;
    cancelledTrades: number;
  };
  swapOperations: SwapType[];
  totalTrades: number;
  updatedAt: string;
  userProfile: {
    is_bvn_verified: boolean;
    is_email_verified: boolean;
    is_kyc_verified: boolean;
    is_phone_verified: boolean;
  };
  userSetting: {
    bankAccounts: [
      {
        accountName: string;
        accountNumber: string;
        bankCode: string;
        bankName: string;
        isDefault: boolean;
      }
    ];
    hasPin: boolean;
    turn_on_newsletter: boolean;
    airtimeBeneficiaries: [string];
    dataBeneficiaries: [string];
    devices: [
      {
        createdAt: string;
        deviceManufacturer: string;
        deviceModel: string;
        notificationToken: string;
        osVersion: string;
        valid: boolean;
      }
    ];
    transferBeneficiaries: String[];
    turn_on_biometric_authentication: boolean;
    turn_on_email_notification: boolean;
    turn_on_push_notification: boolean;
  };
  userTrades: any;
  userTransactions: TransactionType[];
  userWallets: any[];
  vouchersBought: VoucherType[];
  vouchersRedeemed: VoucherType[];
};
