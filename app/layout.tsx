import { Nunito } from "next/font/google";
import { ClientOnly } from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import RegisterModal from "./components/modals/RegisterModal";
import Modal from "./components/modals/Modal";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal />
          {/* <Modal title="My title" isOpen actionLabel={"Hallo"} /> */}
          <Navbar />
        </ClientOnly>

        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
