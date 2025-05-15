import nextra from "nextra";

const withNextra = nextra({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone"
};

export default withNextra(nextConfig);
