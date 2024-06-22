import PrivateLayout from "@/layouts/private-layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PrivateLayout>{children}</PrivateLayout>;
}
