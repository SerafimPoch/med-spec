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
