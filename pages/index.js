import Cards from "../components/home/Cards";
import Banner from "./../components/home/Banner";
import { useSelector } from "react-redux";
export default function Home(props) {
  const SearchText = useSelector((state) => state.search);
  const allProducts = props.products.filter((item) => {
    return item.title.includes(SearchText);
  });
  return (
    <div>
      <Banner />
      <Cards products={allProducts} />
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
