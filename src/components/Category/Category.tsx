import React, { useState, useEffect } from "react";

import { RootState } from "../../app/redux/store";
import { useAppSelector } from "../../app/redux/hooks";
import { CategoryType } from "../../app/redux/slices/category/categorySlice";
import { MerchantType } from "../../app/redux/slices/merchant/merchantSlice";

import Merchant from "../Merchant/Merchant";
import DropdownButton from "../DropdownButton/DropdownButton";

interface Props {
  categoryData: CategoryType;
  isActiveBill: boolean;
}

const Category = (props: Props) => {
  const { categoryData, isActiveBill } = props;
  const [categoryMerchants, setCategoryMerhants] = useState<
    Array<MerchantType>
  >([]);

  const merchants = useAppSelector((state: RootState) => {
    return state.merchants.merchants;
  });

  useEffect(() => {
    setCategoryMerhants(
      merchants.filter((merchant: MerchantType) => {
        return (
          merchant.categoryId === categoryData.id &&
          merchant.isBill === isActiveBill
        );
      })
    );
  }, [merchants, categoryData, isActiveBill]);

  return (
    <DropdownButton
      buttonText={categoryData.name}
      subText={
        categoryMerchants.length > 1
          ? `${categoryMerchants.length} merchants`
          : `${categoryMerchants.length} merchant`
      }
      iconUrl={categoryData.iconUrl}
    >
      <>
        {categoryMerchants.map(merchant => {
          return (
            <Merchant
              key={merchant.id}
              merchantData={merchant}
              isActiveBill={isActiveBill}
            />
          );
        })}
      </>
    </DropdownButton>
  );
};

export default Category;
