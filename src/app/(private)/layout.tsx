import { ReactNode } from "react";

import { Footer } from "@/features/footer";
import { Header } from "@/features/header";

import { SContainer, SLayout } from "./layout.styles";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <SLayout>
      <Header />
      <SContainer>{children}</SContainer>
      <Footer />
    </SLayout>
  );
}
