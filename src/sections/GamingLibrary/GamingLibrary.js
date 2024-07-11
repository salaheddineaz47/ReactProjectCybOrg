import "./GamingLibrary.css";
import {
  SectionHeader,
  SectionWrapper,
  GamingLibraryCard,
  SecondaryButton,
} from "../../Componnents/index";

import GamingLibraryItems from "../../Data/GamingLibraryData";

const GamingLibrary = () => {
  const GamingCards = GamingLibraryItems.map((card) => {
    return (
      <GamingLibraryCard
        key={card.title + card.soc + card.dateAdded}
        imghref={card.imghref}
        title={card.title}
        soc={card.soc}
        dateAdded={card.dateAdded}
        hoursPlayed={card.hoursPlayed}
        downloadState={card.downloadState}
      />
    );
  });
  return (
    <SectionWrapper>
      <SectionHeader>
        <h4>
          <span>Your Gaming</span> Library
        </h4>
      </SectionHeader>
      <div className="gaming-library-items">{GamingCards}</div>
      <SecondaryButton link="library.html">View Your Library</SecondaryButton>
    </SectionWrapper>
  );
};

export default GamingLibrary;
