import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MerchantType } from "../../app/redux/slices/merchant/merchantSlice";

import DropdownButton from "../DropdownButton/DropdownButton";
import SwitchBillButton from "../SwitchBillButton/SwitchBillButton";
import TransactionList from "../TransactionList/TransactionList";

const MerchantContainer = styled.div`
  width: 100%;
`;

const MerchantHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  h2 {
    padding-right: 8px;
  }

  button {
    @media (max-width: 600px) {
      margin-top: 8px;
    }
  }
`;

interface Props {
  merchantData: MerchantType;
  isActiveBill: boolean;
}

const Merchant = (props: Props) => {
  const { merchantData, isActiveBill } = props;
  const [merchant, setMerchant] = useState<MerchantType>(merchantData);

  useEffect(() => {
    setMerchant(merchantData);
  }, [merchantData]);

  return (
    <>
      {merchantData.isBill === isActiveBill && (
        <DropdownButton
          buttonText={merchant.name}
          subText={
            merchantData.transactions.length > 1
              ? `${merchantData.transactions.length} transactions`
              : `${merchantData.transactions.length} transaction`
          }
          iconUrl={merchant.iconUrl}
        >
          <MerchantContainer>
            <MerchantHeader>
              <h2>Transaction list</h2>
              {merchant.isBill ? (
                <SwitchBillButton merchant={merchant} />
              ) : (
                <SwitchBillButton merchant={merchant} />
              )}
            </MerchantHeader>
            <TransactionList transactions={merchant.transactions} />
          </MerchantContainer>
        </DropdownButton>
      )}
    </>
  );
};

export default Merchant;
