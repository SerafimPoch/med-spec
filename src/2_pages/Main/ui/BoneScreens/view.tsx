import { useMemo, useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
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
import { Modal } from "@/6_shared/components/Modal";

export default function BoneScreens() {
  const [activeTab, setActiveTab] = useState(TAB_NAMES[0].directory);
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const imagesPerPage = 50;

  const { data: imagesData, isLoading: isLoadingImages } =
    useAlbumImages(activeTab);

  const handleTabClick = (tab: string) => setActiveTab(tab);

  const handlePageClick = (selectedItem: any) => {
    setCurrentPage(selectedItem.selected);
  };

  const handleImageClick = (imageKey: string) => {
    setSelectedImage(`${AWS_IMG_LINK}/${encodeURIComponent(imageKey)}`);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const displayedImages = useMemo(
    () =>
      imagesData
        ?.filter((image: any) => image.Key.endsWith(".jpg"))
        .slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage),
    [imagesData, currentPage]
  );

  const currentPageAmount = useMemo(
    () => (currentPage + 1) * imagesPerPage,
    [currentPage]
  );

  return (
    <BoneScreensContainer>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            outline: "none",
          }}
        >
          <Image
            src={selectedImage}
            alt="Enlarged image"
            width={300}
            height={300}
            unoptimized
          />
        </Box>
      </Modal>
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
            <button onClick={() => handleImageClick(image.Key)} key={image.Key}>
              <Image
                src={`${AWS_IMG_LINK}/${encodeURIComponent(image.Key)}`}
                alt={image.Key}
                width={100}
                height={100}
                unoptimized
              />
            </button>
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
