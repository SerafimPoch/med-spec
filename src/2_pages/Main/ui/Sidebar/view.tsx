import Image from "next/image";
import { SidebarContainer } from "./styles";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <Image src="/data-span-logo.svg" width={242} height={65} alt="logo" />
    </SidebarContainer>
  );
}
