import { Quotes, Slippage } from "../interface";

type Expanded = Quotes & Slippage;
export const getExpandedList = (
  splippageList: Slippage[],
  quotesList: Quotes[]
) => {
  const list: Expanded[] = [];
  quotesList?.forEach((quote: Quotes) => {
    const matchFound = splippageList?.find(
      (item: Slippage) => item.source === quote.source
    );
    if (matchFound) list.push({ ...quote, ...matchFound });
  });
  return list;
};

export const searchTitle = (source: string) => {
  if (source.includes("ambito")) return "Ámbito";
  if (source.includes("dolarhoy")) return "DolarHoy";
  return "El Cronista";
};
