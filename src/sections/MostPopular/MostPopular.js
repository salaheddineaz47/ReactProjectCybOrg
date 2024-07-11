import "./MostPopular.css";
import {
  Card,
  SectionHeader,
  SectionWrapper,
  SecondaryButton,
} from "../../Componnents/index";
import MostPopularItems from "../../Data/MostPopularData";

const MostPopular = () => {
  const Cards = MostPopularItems.map((card) => {
    return (
      <Card
        key={card.title + card.rank + card.downloads}
        imghref={card.imghref}
        title={card.title}
        soc={card.soc}
        rank={card.rank}
        downloads={card.downloads}
      />
    );
  });

  return (
    <SectionWrapper>
      <SectionHeader>
        <h4>
          <span>Most Popular</span> Right Now
        </h4>
      </SectionHeader>
      <div className="most-popular-items">{Cards}</div>
      <SecondaryButton link="#discover.html">Discover Popular</SecondaryButton>
    </SectionWrapper>
  );
};

export default MostPopular;
