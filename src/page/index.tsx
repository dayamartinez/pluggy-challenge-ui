import { useEffect, useState } from "react";
import { Row } from "antd";

import CardPrimary from "../components/Card";
import { Extended, Quotes, Slippage } from "../interface";
import { getExpandedList } from "../utils";

interface Props {
  quotesList: Quotes[];
  splippageList: Slippage[];
}

const Page = ({ quotesList, splippageList }: Props) => {
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
  );
};
export default Page;
