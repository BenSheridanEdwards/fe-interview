const GET_MERCHANTS = "GET_MERCHANTS";
const SET_MERCHANTS = "SET_MERCHANTS";
const UPDATE_MERCHANT = "UPDATE_MERCHANT";

export interface MerchantType {
  categoryId: number;
  iconUrl: string;
  id: string;
  isBill: boolean;
  name: string;
  transactions: Array<TransactionType>;
  [x: string]: any;
}

export interface TransactionType {
  amount: number;
  date: string;
}

export interface MerchantState {
  merchants: Array<MerchantType>;
}

const initialState: MerchantState = {
  merchants: []
};

interface Action {
  type: string;
  [x: string]: any;
}

export const getMerchants = (): Action => ({
  type: GET_MERCHANTS
});

export const setMerchants = (merchants: Array<MerchantType>): Action => ({
  type: SET_MERCHANTS,
  merchants
});

export const updateMerchant = (id: String, data: Object): Action => ({
  type: UPDATE_MERCHANT,
  id,
  data
});

const merchantsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_MERCHANTS:
      const { merchants } = action;
      return {
        ...state,
        merchants: [...merchants]
      };
    case UPDATE_MERCHANT:
      const { id, data } = action;
      const newState = state.merchants.forEach((merchant: MerchantType) => {
        if (merchant.id === id) {
          let flattenedData = Object.keys(data).flat();
          for (let attribute of flattenedData) {
            merchant[attribute] = data[attribute];
          }
        }
      });
      return { ...state, newState };
    default:
      return state;
  }
};

export default merchantsReducer;
