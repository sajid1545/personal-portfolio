/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		container: { center: true, padding: "1rem" },
		extend: {
			colors: {
				bg: {
					DEFAULT: "#0b0f14",
					soft: "#0f141b",
					lift: "#121a22",
				},
				brand: {
					50: "#e7f1ff",
					100: "#cfe3ff",
					200: "#a3c7ff",
					300: "#77abff",
					400: "#4b8eff",
					500: "#2a76ff",
					600: "#1f5ed6",
					700: "#1747a3",
					800: "#103071",
					900: "#0a1c47",
				},
			},
			fontFamily: {
				sans: [
					"Raleway",
					"ui-sans-serif",
					"system-ui",
					"Segoe UI",
					"Roboto",
					"Helvetica",
					"Arial",
					"sans-serif",
				],
				display: ["Sora", "Raleway", "ui-sans-serif", "system-ui"],
			},
			boxShadow: {
				soft: "0 10px 25px rgba(2,6,23,0.35)",
				ring: "inset 0 0 0 1px rgba(255,255,255,0.06)",
			},
			borderRadius: { xxl: "1.5rem" },
			transitionTimingFunction: { bounceSoft: "cubic-bezier(.22,1,.36,1)" },
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
