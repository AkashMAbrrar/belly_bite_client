import FoodCards from "../../../components/FoodCards/FoodCards";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <FoodCards key={item._id} item={item}></FoodCards>
      ))}
    </div>
  );
};

export default OrderTab;
