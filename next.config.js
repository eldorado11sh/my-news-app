/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: "eef9ebadd00c4dc5ae935ae2eaa54c78",
    BACKEND_URL: "https://newsapi.org/v2/everything"
  }
}

module.exports = nextConfig
