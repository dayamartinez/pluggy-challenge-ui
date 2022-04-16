import { useEffect, useState } from "react";
import { Row } from "antd";

import CardPrimary from "../components/Card";
import { Average, Extended, Quotes, Slippage } from "../interface";
import { getExpandedList } from "../utils";
import CardAverage from "../components/CardAverage";

interface Props {
  quotesList: Quotes[];
  splippageList: Slippage[];
  averageItem: Average;
}

const Page = ({ quotesList, splippageList, averageItem }: Props) => {
  const [listExtended, setListExtended] = useState<Extended[]>([]);
  useEffect(() => {
    if (splippageList?.length && quotesList?.length) {
      const list = getExpandedList(splippageList, quotesList);
      setListExtended(list);
      return;
    }
    setListExtended([]);
  }, [splippageList, quotesList]);

  return (
    <div className="page">
      <Row className="card-quote">
        {listExtended?.map((elem: Extended) => (
          <CardPrimary
            buyPrice={elem.buy_price}
            sellPrice={elem.sell_price}
            buyPriceSlippage={elem.buy_price_slippage}
            sellPriceSlippage={elem.sell_price_slippage}
            source={elem.source}
            key={elem?._id}
            updatedAt={elem?._updatedAt}
          />
        ))}
      </Row>
      <CardAverage
        averageBuyPrice={averageItem?.average_buy_price}
        averageSellPrice={averageItem?.average_sell_price}
        key={averageItem?._id}
        listExtended={listExtended}
      />
    </div>
  );
};
export default Page;
