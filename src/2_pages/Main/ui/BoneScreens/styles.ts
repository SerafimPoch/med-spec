import styled from "@emotion/styled";

interface ITab {
  isActive: boolean;
}

export const BoneScreensContainer = styled.div`
  margin: 18px 0 38px 0;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
`;

export const Title = styled.h3`
  font-size: 32px;
  font-weight: 600;
  line-height: 39px;
  color: var(--basic-color);
`;

export const PageNumbers = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--basic-color);
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;

export const LightText = styled.span`
  font-weight: 400;
  color: var(--light-blue-color);
`;

export const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--gray-color);
  margin-bottom: 17px;
`;

export const Tab = styled.button<ITab>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  color: ${({ isActive }) =>
    isActive ? "var(--orange-color)" : "var(--basic-color)"};
  background: ${({ isActive }) =>
    isActive
      ? "linear-gradient(0deg, rgba(255, 215, 92, 0.1), rgba(255, 215, 92, 0.1))"
      : "transparent"};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    border-bottom: ${({ isActive }) =>
      isActive ? "1px solid var(--orange-color)" : "none"};
    transition: border-bottom 0.3s;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-gap: 12px;
  min-height: 660px;

  img {
    width: 100px;
    height: 100px;
    cursor: pointer;
  }
`;

export const StyledPaginateContainer = styled.div`
  .pagination {
    display: flex;
    list-style-type: none;
    padding: 0;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .pagination li {
    margin: 0 5px;
    cursor: pointer;
  }

  .pagination li a {
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 50%;
    background-color: #ffffff;
    color: #000000;
    font-weight: bold;
    border: 1px solid #dddddd;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
  }

  .pagination li a:hover {
    background-color: #eeeeee;
  }

  .pagination li.active a {
    background-color: #f0c14b;
    color: white;
    border-color: #f0c14b;
  }

  .pagination li.previous {
    display: none;
  }

  .pagination li.next {
    display: none;
  }
`;
