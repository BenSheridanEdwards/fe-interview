import React from "react";
import styled from "styled-components";
import moment from "moment";
import currency from "currency.js";

import { TransactionType } from "../../app/redux/slices/merchant/merchantSlice";

const ListContainer = styled.div`
  width: 100%;

  table {
    margin-top: 20px;
    width: 100%;

    td,
    th {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
    }

    th {
      border-bottom: 2px solid #d1d5db;
    }

    td {
      font-size: 12px;
      border-bottom: 1px solid #d1d5db;
    }
  }
`;

interface Props {
  transactions: Array<TransactionType>;
}

const TransactionList = (props: Props) => {
  const { transactions } = props;

  return (
    <ListContainer>
      <table>
        <thead>
          <tr>
            <th>
              <span>Date</span>
              <span>Amount</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: TransactionType, index: number) => {
            return (
              <tr key={`key-${transaction.date}-${index}`}>
                <td>
                  <span>{moment(transaction.date).format("Do MMMM YYYY")}</span>
                  <span>
                    {currency(transaction.amount, {
                      symbol: "£",
                      decimal: "."
                    }).format()}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ListContainer>
  );
};

export default TransactionList;
