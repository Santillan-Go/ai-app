import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/Components/ReduxProvider";
import BodyLayout from "@/Components/BodyLayout";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";

import { ProviderSession } from "@/Components/ProviderSession";
import GetInfoUser from "@/Components/GetInfoUser";

// const inter = Inter({ subsets: ["latin", ""] });
export const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["900", "800", "400", "500"],
  display: "swap",
});

export const metadata = {
  title: "Teacher-AI ",
  description: "THIS IS AN APP THAT WILL HELP YOU WITH YOUR HOMEWORK",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/robot-teacher.jpg"
          type="image/jpg"
          sizes="16x16"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6335035765993896"
          crossorigin="anonymous"
        ></script>
      </head>

      <ReduxProvider>
        <ProviderSession session={session}>
          <GetInfoUser />
          <BodyLayout
            children={children}
            montserratAlternates={montserratAlternates}
          />
        </ProviderSession>
      </ReduxProvider>
      {/* <body className={montserratAlternates.className}>
        <main>
          <ReduxProvider>{children}</ReduxProvider>
        </main>
      </body> */}
    </html>
  );
}
