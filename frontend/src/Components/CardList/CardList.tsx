import React, { JSX } from "react";
import Card from "../Card/Card";

interface Props {}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <Card companyName="Apple Inc." ticker="AAPL" price={100} />
      <Card companyName="Microsoft Corp." ticker="MSFT" price={250} />
      <Card companyName="Amazon.com Inc." ticker="AMZN" price={150} />
    </div>
  );
};

export default CardList;
