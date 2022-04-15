import { Layout } from "antd";
import useSWR from "swr";
import { DollarCircleOutlined } from "@ant-design/icons";

import Page from "./page";
import "./App.css";

const { Footer, Header } = Layout;
function App() {
  const {
    data: splippageList,
    // error: errorSlippage,
  } = useSWR(
    "/slippage"
    // { refreshInterval: 15000 }
  );

  // const {
  //   data: averageItem,
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  // } = useSWR(
  //   "/average" // { refreshInterval: 15000 }
  // );

  const {
    data: quotesList,
    // error: errorQuotes,
  } = useSWR(
    "/quotes"
    // { refreshInterval: 15000 }
  );

  return (
    <Layout className="App">
      <Header>
        <DollarCircleOutlined />
        DÓLAR BLUE
      </Header>
      <Layout>
        <Page
          key="1"
          quotesList={quotesList?.result}
          splippageList={splippageList?.result}
        />
      </Layout>
      <Footer style={{ textAlign: "center" }}>DJ ©2022</Footer>
    </Layout>
  );
}

export default App;
