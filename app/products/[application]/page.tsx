import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ApplicationComingSoon } from "../components";
import { upcomingApplications } from "../constants";

interface ProductApplicationPageProps {
  params: Promise<{ application: string }>;
}

export const generateStaticParams = () =>
  Object.keys(upcomingApplications).map((application) => ({ application }));

export const generateMetadata = async ({ params }: ProductApplicationPageProps): Promise<Metadata> => {
  const { application } = await params;
  const product = upcomingApplications[application];
  if (!product) return { title: "Application not found" };

  return {
    title: `${product.name} · Coming soon`,
    description: `${product.description} Request early access to ${product.name}.`
  };
};

const ProductApplicationPage = async ({ params }: ProductApplicationPageProps) => {
  const { application } = await params;
  const product = upcomingApplications[application];
  if (!product) notFound();

  return <ApplicationComingSoon application={product} />;
};

export default ProductApplicationPage;
