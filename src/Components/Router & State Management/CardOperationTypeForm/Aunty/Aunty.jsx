import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
  const [money, setmoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"promi"}></Cousin>
        <Cousin name={"panna"}></Cousin>
      </section>
      <p>Money : {money}</p>
      <button onClick={() => setmoney(money + 1000)}>Add 100 bdt</button>
    </div>
  );
};

export default Aunty;
