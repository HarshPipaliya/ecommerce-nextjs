import SellerProvider from "@/context/seller-provider";
import SellerLayout from "@/layouts/seller-layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SellerProvider>
      <SellerLayout>{children}</SellerLayout>
    </SellerProvider>
  );
}
