import { Layout } from "antd";
import useSWR from "swr";
import { DollarCircleOutlined } from "@ant-design/icons";

import Page from "./page";
import "./App.css";
import LoadingComponent from "./components/Loading";

const { Footer, Header } = Layout;
function App() {
  const { data: splippageList, error: errorSlippage } = useSWR("/slippage");
  const { data: averageItem, error: errorAverage } = useSWR("/average");
  const { data: quotesList, error: errorQuotes } = useSWR("/quotes");

  const handlingError = () => {
    if (errorQuotes || errorSlippage || errorAverage) {
      return (
        errorQuotes?.message ||
        errorSlippage?.message ||
        errorAverage?.message ||
        "Lo sentimos, se produjo un error desconocido. Por favor intente más tarde."
      );
    }
    return false;
  };

  return (
    <Layout className="App">
      <Header>
        <DollarCircleOutlined />
        DÓLAR BLUE
      </Header>
      <Layout>
        {handlingError() ? (
          <LoadingComponent tip={handlingError()} spin={false} error={true} />
        ) : !quotesList && !splippageList && !averageItem ? (
          <LoadingComponent tip="Cargando..." spin={true} />
        ) : (
          <Page
            key="1"
            quotesList={quotesList?.result}
            splippageList={splippageList?.result}
            averageItem={averageItem?.result}
          />
        )}
      </Layout>
      <Footer className="footer">
        Dayamartinez ©2022
        <p>Pluggy Challenge</p>
      </Footer>
    </Layout>
  );
}

export default App;
