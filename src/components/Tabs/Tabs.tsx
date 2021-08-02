import React, { useState, useEffect, ReactElement } from "react";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../app/redux/store";
import {
  getCategories,
  CategoryType
} from "../../app/redux/slices/category/categorySlice";
import {
  getMerchants,
  MerchantType
} from "../../app/redux/slices/merchant/merchantSlice";

import Category from "../Category/Category";
import Delayed from "../Delayed/Delayed";
import ZeroBillsCelebration from "../ZeroBillsCelebration/ZeroBillsCelebration";

const TabsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const ChildrenContainer = styled.ul`
  background: linear-gradient(0, #d1d5db 2px, #ffffff 2px);
  display: flex;
  margin: 20px 0 0;
  padding: 0;
  width: 100%;
`;

const TabContent = styled.div`
  align-items: center;
  background-color: #f9fafb;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  width: 100%;

  button:first-child {
    margin-top: 0;
  }
`;

interface Props extends PropsFromRedux {
  children: React.ReactNode;
}

const Tabs = (props: Props) => {
  const [activeTab, setActiveTab] = useState<string>("Active Bills");
  const [allCategories, setAllCategories] = useState<Array<CategoryType>>([]);
  const [allMerchants, setAllMerchants] = useState<Array<MerchantType>>([]);

  useEffect(() => {
    setAllCategories(props.categories.categories);
    setAllMerchants(props.merchants.merchants);
  }, [props.categories.categories, props.merchants.merchants]);

  const categoriesWithActiveBills = () => {
    const activeBillCategoryIds: Array<number> = [];

    allMerchants.forEach(merchant => {
      if (merchant.isBill) {
        activeBillCategoryIds.push(merchant.categoryId);
      }
    });

    const activeBillCategories = allCategories.filter(category => {
      return activeBillCategoryIds.includes(category.id);
    });

    return activeBillCategories;
  };

  const categoriesWithPotentialBills = () => {
    const potentialBillCategoryIds: Array<number> = [];

    allMerchants.forEach(merchant => {
      if (!merchant.isBill) {
        potentialBillCategoryIds.push(merchant.categoryId);
      }
    });

    const potentialCategories = allCategories.filter(category => {
      return potentialBillCategoryIds.includes(category.id);
    });

    return potentialCategories;
  };

  const childrenWithProps = React.Children.map(props.children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        activeTab,
        setActiveTab: setActiveTab
      });
    }
    return child;
  });

  return (
    <TabsContainer>
      <ChildrenContainer>{childrenWithProps}</ChildrenContainer>
      <TabContent>
        {activeTab === "Active Bills" &&
          categoriesWithActiveBills().map(
            (category: CategoryType): ReactElement => {
              return (
                <Category
                  key={category.id}
                  categoryData={category}
                  isActiveBill={true}
                />
              );
            }
          )}
        {activeTab === "Potential Bills" &&
          categoriesWithPotentialBills().map(
            (category: CategoryType): ReactElement => {
              return (
                <Category
                  key={category.id}
                  categoryData={category}
                  isActiveBill={false}
                />
              );
            }
          )}
        {activeTab === "Active Bills" && !categoriesWithActiveBills().length && (
          <Delayed waitBeforeShow={200}>
            <ZeroBillsCelebration type={activeTab.split(" ", 1)[0]} />
          </Delayed>
        )}
        {activeTab === "Potential Bills" &&
          !categoriesWithPotentialBills().length && (
            <Delayed waitBeforeShow={100}>
              <ZeroBillsCelebration type={activeTab.split(" ", 1)[0]} />
            </Delayed>
          )}
      </TabContent>
    </TabsContainer>
  );
};

const mapState = (state: RootState) => ({
  merchants: state.merchants,
  categories: state.categories
});

const mapDispatch = {
  getMerchants: getMerchants,
  getCategories: getCategories
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Tabs);
