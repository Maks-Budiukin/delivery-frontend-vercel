import { ShopList } from "../../components/ShopList/ShopList";
import { ProdGallery } from "../../components/ProdGallery/ProdGallery";
import { Wrapper } from "./Shop.styled";
import { useMediaQuery } from "react-responsive";

export const Shop = () => {
  const isMobile = useMediaQuery({ maxWidth: 478 });

  return (
    <Wrapper>
      {!isMobile && <ShopList />}
      <ProdGallery />
    </Wrapper>
  );
};
