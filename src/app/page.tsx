import Navbar from "./components/navbar/navbar";
import { ThemeProvider } from "./components/theme/theme-provider";

export default function Home() {
	return (
		<div>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<Navbar />
			</ThemeProvider>
		</div>
	);
}
