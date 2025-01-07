import "./globals.css";
import { HeadTitle, HeadTitleProvider } from "@/components/layout/Head";
import GlobalContainer from "@/components/layout/GlobalContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HeadTitleProvider>
      <html lang="en">
        <head>
          <HeadTitle />
        </head>
        <body>
          <GlobalContainer>
            {children}
          </GlobalContainer>
        </body>
      </html>
    </HeadTitleProvider>
  );
}
