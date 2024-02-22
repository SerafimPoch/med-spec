import { useEffect, useState } from "react";
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
import { useAlbumImages } from "./api";

export default function BoneScreens() {
  const [activeTab, setActiveTab] = useState(TAB_NAMES[0].directory);
  const { data: imagesData, isLoading: isLoadingImages } =
    useAlbumImages(activeTab);

  const handleTabClick = (tab: string) => setActiveTab(tab);

  if (isLoadingImages) return <div>Loading albums...</div>;

  return (
    <BoneScreensContainer>
      <InfoWrapper>
        <Title>Bone-fracture-detection </Title>
        <PageNumbers>
          54 <LightText>of</LightText> 100 <LightText>images</LightText>
        </PageNumbers>
      </InfoWrapper>
      <TabWrapper>
        {TAB_NAMES.map(({ directory, name }) => (
          <Tab
            key={directory}
            isActive={activeTab === directory}
            onClick={() => handleTabClick(directory)}
          >
            {name}
          </Tab>
        ))}
      </TabWrapper>
      {imagesData?.map((image: any, index: number) => (
        <img
          key={index}
          src={`http://dataspan.frontend-home-assignment.s3.amazonaws.com/${encodeURIComponent(
            image.Key
          )}`}
          alt="Image"
          style={{ width: "128px", height: "128px" }}
        />
      ))}
    </BoneScreensContainer>
  );
}
