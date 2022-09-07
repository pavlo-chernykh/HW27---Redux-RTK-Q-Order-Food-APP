import Carousel from "../Carousel/Carousel";
import RibbonMenu from "../RibbonMenu/RibbonMenu";
import Filters from "../Filters/Filters";
import ProductsGrid from "../ProductsGrid/ProductsGrid";

const Main = () => {

  // const styleContainerLeft = `left: 75%;`
  // const styleContainerWidth = `width: 75%;`
  
  return ( 
    <main>
      <Carousel/>
      <RibbonMenu/>
      <Filters/>
      <ProductsGrid/>
    </main>
   );
}

export default Main;