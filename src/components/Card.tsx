import { Skeleton, Card, Col, Row } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import moment from "moment";

import BadgeSlippage from "./BadgeSlippage";
import { searchTitle } from "../utils";

const { Meta } = Card;

interface Props {
  buyPrice: number;
  buyPriceSlippage: number;
  sellPrice: number;
  sellPriceSlippage: number;
  source: string;
  key: string;
  updatedAt?: string;
}

const CardPrimary = ({
  buyPrice,
  sellPrice,
  buyPriceSlippage,
  sellPriceSlippage,
  source,
  key,
}: Props) => {
  const date = moment().utc().local().format("DD/MM/YYYY HH:mm A");
  return (
    <Card
      className="card"
      actions={["Actualizado el " + date]}
      title={searchTitle(source)}
      hoverable
      key={key}
      extra={
        <a href={source} target="blank">
          <LinkOutlined />
        </a>
      }
    >
      <Row justify="space-around">
        <Col span={12}>
          <Skeleton loading={false}>
            <Meta
              title="Compra"
              className="price"
              description={`$${buyPrice}`}
            />
          </Skeleton>
          <BadgeSlippage slippage={buyPriceSlippage} />
        </Col>
        <Col span={12}>
          <Skeleton loading={false}>
            <Meta
              className="price"
              title="Venta"
              description={`$${sellPrice}`}
            />
          </Skeleton>
          <BadgeSlippage slippage={sellPriceSlippage} />
        </Col>
      </Row>
    </Card>
  );
};

export default CardPrimary;
