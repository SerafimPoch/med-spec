"use client";
import { MainContainer } from "./styles";
import { Sidebar } from "./ui/Sidebar";

export default function Main() {
  return (
    <MainContainer>
      <Sidebar />
      <p>MainContainer</p>
    </MainContainer>
  );
}
