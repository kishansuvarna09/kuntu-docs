import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Layout } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const cspHeader = `
	default-src 'self' 'self';
	script-src 'self' 'unsafe-inline';
	style-src 'self' 'unsafe-inline' ;
	`;

  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {process.env.NODE_ENV === "production" && (
          <meta httpEquiv="Content-Security-Policy" content={cspHeader} />
        )}
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          sidebar={{ autoCollapse: true }}
          banner={Banner}
          navbar={Navbar}
          pageMap={await getPageMap()}
          footer={Footer}
          feedback={{
            content: null,
          }}
          editLink={null}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
