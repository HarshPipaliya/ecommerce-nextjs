import ConsumerLayout from "@/layouts/consumer-layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ConsumerLayout>{children}</ConsumerLayout>;
}
