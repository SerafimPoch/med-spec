import { useState } from "react";
import { TAB_NAMES } from "./constants";
import {
  PageNumbers,
  Title,
  InfoWrapper,
  LightText,
  BoneScreensContainer,
  TabWrapper,
  Tab,
} from "./styles";

export default function BoneScreens() {
  const [activeTab, setActiveTab] = useState(TAB_NAMES[0]);

  const handleTabClick = (tab: string) => setActiveTab(tab);

  return (
    <BoneScreensContainer>
      <InfoWrapper>
        <Title>Bone-fracture-detection </Title>
        <PageNumbers>
          54 <LightText>of</LightText> 100 <LightText>images</LightText>
        </PageNumbers>
      </InfoWrapper>
      <TabWrapper>
        {TAB_NAMES.map((tab) => (
          <Tab
            key={tab}
            isActive={activeTab === tab}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </Tab>
        ))}
      </TabWrapper>
    </BoneScreensContainer>
  );
}
