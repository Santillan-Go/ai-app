import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/Components/ReduxProvider";
import BodyLayout from "@/Components/BodyLayout";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";

import { ProviderSession } from "@/Components/ProviderSession";

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
      <ReduxProvider>
        <ProviderSession session={session}>
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
