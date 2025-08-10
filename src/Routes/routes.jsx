import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ContactPage from "../Pages/ContactPage";
import ExperiencePage from "../Pages/ExperiencePage";
import Landing from "../Pages/Landing/Landing";
import ProjectsPage from "../Pages/ProjectsPage";
import SkillsPage from "../Pages/SkillsPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		// errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Landing /> },
			{ path: "projects", element: <ProjectsPage /> },
			{ path: "skills", element: <SkillsPage /> },
			{ path: "experience", element: <ExperiencePage /> },
			{ path: "contact", element: <ContactPage /> },

			// catch-all inside Main
			// { path: "*", element: <ErrorPage /> },
		],
	},
]);

export default router;
