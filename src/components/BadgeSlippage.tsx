import { Statistic } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

const calculateUpOrDownSllipage = (value: number) => {
  if (value > 0) return <CaretUpOutlined />;
  if (value < 0) return <CaretDownOutlined />;
  return <></>;
};

const calculateColor = (value: number) => {
  if (value > 0) return "var(--up-color)";
  if (value < 0) return "var(--down-color)";
  return "#112123";
};

interface Props {
  slippage: number;
}

const BadgeSlippage = ({ slippage }: Props) => {
  return (
    <Statistic
      value={slippage}
      precision={2}
      valueStyle={{
        color: calculateColor(slippage),
        fontSize: "1.1em",
      }}
      prefix={calculateUpOrDownSllipage(slippage)}
      suffix="%"
    />
  );
};

export default BadgeSlippage;
