import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Updated syntax for stable Turbopack
    turbopack: {
        rules: {
            "*.md": {
                loaders: ["raw-loader"],
                as: "*.js",
            },
        },
    },
    // Keep Webpack config for fallback compatibility
    webpack: (config) => {
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader",
        });
        return config;
    },
};

export default nextConfig;
