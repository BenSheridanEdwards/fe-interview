import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useAppDispatch } from "./app/redux/hooks";
import { getMerchants } from "./app/redux/slices/merchant/merchantSlice";
import { getCategories } from "./app/redux/slices/category/categorySlice";

import Tabs from "./components/Tabs/Tabs";
import Tab from "./components/Tab/Tab";

const GlobalStyle = createGlobalStyle`
  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }
`;

const Content = styled.div`
  @media (max-width: 600px) {
    padding: 20px;
  }

  margin: auto;
  max-width: 800px;
  padding: 100px;
`;

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMerchants());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Content>
        <h1>Cleo bills</h1>
        <Tabs>
          <Tab
            label={"Active Bills"}
            activeTab="Active Bills"
            setActiveTab={() => {}}
          />
          <Tab
            label={"Potential Bills"}
            activeTab="Active Bills"
            setActiveTab={() => {}}
          />
        </Tabs>
      </Content>
    </>
  );
}

export default App;
