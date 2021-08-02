import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import {
  MerchantType,
  updateMerchant
} from "../../app/redux/slices/merchant/merchantSlice";
import { useAppDispatch } from "../../app/redux/hooks";

interface SwitchButtonProps {
  isActiveBill: boolean;
}

const SwitchButton = styled.button<SwitchButtonProps>`
  align-items: center;
  background-color: ${props => (props.isActiveBill ? "#ef4444" : "#10b981")};
  border: ${props =>
    props.isActiveBill ? "1px solid #ef4444" : "1px solid #10b981"};
  border-radius: 8px;
  color: #f3f4f6;
  cursor: pointer;
  display: flex;
  font-weight: bold;
  height: 36px;
  justify-content: center;
  padding: 8px 12px;
  width: fit-content;

  &:focus {
    box-shadow: 0 0 0 3px #6dd7dd;
    outline: none;
    z-index: 40;
  }

  svg {
    height: 16px;
    margin-left: 8px;
    width: 16px;
  }
`;

interface Props {
  merchant: MerchantType;
}

const SwitchBillButton = (props: Props) => {
  const { merchant } = props;
  const dispatch = useAppDispatch();
  const isActiveBill = merchant.isBill;

  const handleBillTypeSwitch: MouseEventHandler = () => {
    isActiveBill
      ? dispatch(updateMerchant(merchant.id, { ...merchant, isBill: false }))
      : dispatch(updateMerchant(merchant.id, { ...merchant, isBill: true }));
  };

  return (
    <>
      {!isActiveBill && (
        <SwitchButton
          isActiveBill={isActiveBill}
          onClick={handleBillTypeSwitch}
        >
          Add bill
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </SwitchButton>
      )}
      {isActiveBill && (
        <SwitchButton
          isActiveBill={isActiveBill}
          onClick={handleBillTypeSwitch}
        >
          Remove bill
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </SwitchButton>
      )}
    </>
  );
};

export default SwitchBillButton;
