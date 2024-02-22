"use client";
import { MainContainer } from "./styles";
import { BoneScreens } from "./ui/BoneScreens";
import { Sidebar } from "./ui/Sidebar";

export default function Main() {
  return (
    <MainContainer>
      <Sidebar />
      <BoneScreens />
    </MainContainer>
  );
}
