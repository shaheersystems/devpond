/** @type {import('next').NextConfig} */
import nextEnv from "next-env";
import dotenvLoad from "dotenv-load";

dotenvLoad();

const withNextEnv = nextEnv();

const nextConfig = withNextEnv({
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPBASE_URL,
    NEXT_PUBLIC_SUPABASE_API_KEY: process.env.NEXT_PUBLIC_SUPABASE_API_KEY,
  },
});

export default nextConfig;
