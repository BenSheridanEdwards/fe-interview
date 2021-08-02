import merchantReducer, {
  MerchantState,
  setMerchants,
  updateMerchant
} from "./merchantSlice";

describe("merchant reducer", () => {
  const initialState: MerchantState = {
    merchants: []
  };

  it("should handle setting the initial state", () => {
    expect(merchantReducer(undefined, { type: "unknown" })).toEqual({
      merchants: []
    });
  });

  it("should handle setting the merchants", () => {
    const newState = merchantReducer(
      initialState,
      setMerchants([
        {
          categoryId: 1,
          iconUrl: "www.",
          id: "123",
          isBill: true,
          name: "Merchant",
          transactions: []
        }
      ])
    );
    expect(newState.merchants).toEqual([
      {
        categoryId: 1,
        iconUrl: "www.",
        id: "123",
        isBill: true,
        name: "Merchant",
        transactions: []
      }
    ]);
  });

  it("should handle updating an attribute on a merchant", () => {
    const currentState: MerchantState = {
      merchants: [
        {
          categoryId: 1,
          iconUrl: "www.",
          id: "123",
          isBill: true,
          name: "Merchant",
          transactions: []
        }
      ]
    };

    const newState = merchantReducer(
      currentState,
      updateMerchant("123", { isBill: false })
    );

    expect(newState.merchants).toEqual([
      {
        categoryId: 1,
        iconUrl: "www.",
        id: "123",
        isBill: false,
        name: "Merchant",
        transactions: []
      }
    ]);
  });
});
