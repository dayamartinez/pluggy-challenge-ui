import { Card, Row, Statistic, Table } from "antd";
import { Extended } from "../interface";
import { searchTitle } from "../utils";

interface Props {
  averageBuyPrice: number;
  averageSellPrice: number;
  key: string;
  listExtended: Extended[];
}

const columns = [
  {
    title: "Fuente",
    dataIndex: "source",
    key: "source",
    render: (url: string) => (
      <a href={url} target="blank">
        {searchTitle(url)}
      </a>
    ),
  },
  {
    title: "Compra",
    dataIndex: "buy_price",
    key: "buy_price",
    render: (price: number) => `$${price}`,
  },
  {
    title: "Venta",
    dataIndex: "sell_price",
    key: "sell_price",
    render: (price: number) => `$${price}`,
  },
];

const CardAverage = ({
  averageBuyPrice,
  averageSellPrice,
  key,
  listExtended,
}: Props) => {
  return (
    <Row justify="space-around" align="middle" className="div-average">
      <Row className="average-row">
        <Card>
          <h3>Promedio</h3>
          <Statistic
            title="Compra"
            value={averageBuyPrice}
            precision={2}
            valueStyle={{ color: "var(--primary-color)" }}
            prefix="$"
          />
          <Statistic
            title="Venta"
            value={averageSellPrice}
            precision={2}
            valueStyle={{ color: "var(--primary-color)" }}
            prefix="$"
          />
        </Card>
        <Table columns={columns} dataSource={listExtended} pagination={false} />
      </Row>
    </Row>
  );
};

export default CardAverage;
