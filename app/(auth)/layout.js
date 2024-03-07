import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";

export const metadata = {
  title: "Comradify",
  description: "Next 14 Social Media App",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-dark-2 ">
          <div
            className={"${inter.className} bg-dark-2 flex justify-center mt-10"}
          >
            {children}
          </div>
          <div className="text-light-1 text-small-bold flex justify-center mt-2">
            <h1>Powered by AxN</h1>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
