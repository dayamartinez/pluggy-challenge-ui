import { Layout, Spin } from "antd";
import { DashOutlined, WarningOutlined } from "@ant-design/icons";

interface Props {
  tip: string;
  spin: boolean;
  error?: boolean;
}

const LoadingComponent = ({ tip, spin, error }: Props) => {
  return (
    <Layout className="loading">
      <Spin
        size="large"
        tip={tip}
        indicator={
          error ? (
            <WarningOutlined style={{ fontSize: "5rem" }} spin={spin} />
          ) : (
            <DashOutlined style={{ fontSize: "3rem" }} spin={spin} />
          )
        }
        style={{ color: error ? "var(--down-color)" : "var(--primary-color)" }}
      />
    </Layout>
  );
};
export default LoadingComponent;
