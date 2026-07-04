import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                ink: "#050505",
                sand: "#F4F1E8",
                bronze: "#F0C94E",
                olive: "#00D0C7",
                smoke: "#171717",
                rose: "#E62A3B",
                pearl: "#FAFAF7",
            },
            boxShadow: {
                glow: "0 24px 80px rgba(240, 201, 78, 0.18)",
            },
            backgroundImage: {
                "hero-radial": "radial-gradient(circle at top left, rgba(0,208,199,0.18), transparent 26%), radial-gradient(circle at 78% 8%, rgba(230,42,59,0.16), transparent 22%), radial-gradient(circle at 55% 40%, rgba(240,201,78,0.18), transparent 28%), linear-gradient(180deg, #111111 0%, #050505 100%)",
            },
        },
    },
    plugins: [],
};

export default config;
