import { Inter, Roboto } from "next/font/google";
import { AuthContextProvider } from "./context/Auth";
import { SubjectContextProvider } from "./context/Subject";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const classesFonts = {...inter.className, ...roboto.className}
  return (
    <html lang="en">
      <body className={classesFonts}>
        <AuthContextProvider>
          <SubjectContextProvider>
            {children}
          </SubjectContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
