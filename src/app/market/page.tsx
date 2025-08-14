import BestItemsSection from "@/components/sections/BestItemsSection";
import AllItemsSection from "@/components/sections/AllItemsSection";
import { Container } from "@/styles/common";

const MarketPage: React.FC = () => {
  return (
    <Container>
      <BestItemsSection />
      <AllItemsSection />
    </Container>
  );
};

export default MarketPage;
