import { useMemo, useState } from "react";
import Image from "next/image";
import { Loader } from "@/6_shared/components/Loader";
import { AWS_IMG_LINK, TAB_NAMES } from "./constants";
import ReactPaginate from "react-paginate";
import {
  PageNumbers,
  Title,
  InfoWrapper,
  LightText,
  BoneScreensContainer,
  TabWrapper,
  Tab,
  ImageWrapper,
  StyledPaginateContainer,
} from "./styles";
import { useAlbumImages } from "./api";

export default function BoneScreens() {
  const [activeTab, setActiveTab] = useState(TAB_NAMES[0].directory);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 50;

  const { data: imagesData, isLoading: isLoadingImages } =
    useAlbumImages(activeTab);

  const handleTabClick = (tab: string) => setActiveTab(tab);

  const handlePageClick = (selectedItem: any) => {
    setCurrentPage(selectedItem.selected);
  };

  const displayedImages = imagesData
    ?.filter((image: any) => image.Key.endsWith(".jpg"))
    .slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);

  const currentPageAmount = useMemo(
    () => (currentPage + 1) * imagesPerPage,
    [currentPage]
  );

  return (
    <BoneScreensContainer>
      <InfoWrapper>
        <Title>Bone-fracture-detection</Title>
        <PageNumbers>
          {currentPageAmount}
          <LightText>of</LightText> {imagesData?.length}{" "}
          <LightText>images</LightText>
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
      <ImageWrapper>
        {isLoadingImages ? (
          <Loader />
        ) : (
          displayedImages.map((image: any) => (
            <Image
              key={image.Key}
              src={`${AWS_IMG_LINK}/${encodeURIComponent(image.Key)}`}
              alt={image.Key}
              width={100}
              height={100}
              unoptimized
            />
          ))
        )}
      </ImageWrapper>
      <StyledPaginateContainer>
        <ReactPaginate
          breakLabel={"..."}
          pageCount={Math.ceil(imagesData?.length / imagesPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </StyledPaginateContainer>
    </BoneScreensContainer>
  );
}
