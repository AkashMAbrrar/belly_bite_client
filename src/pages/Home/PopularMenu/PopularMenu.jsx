import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../shared/MenuItem/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-10">
      <SectionTitle
        subHeading={"From Our Menu"}
        heading={"Most Popular Items"}></SectionTitle>

      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <button className="btn btn-outline border-0 border-b-4 ">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
