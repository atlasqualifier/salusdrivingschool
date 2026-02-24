import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import CoursesPage from "./pages/courses-page";
import CourseDetailsPage from "./pages/course-details-page";
import EnrollmentPage from "./pages/enrollment-page";
import GalleryPage from "./pages/gallery-page";
import ContactPage from "./pages/contact-page";
import FAQPage from "./pages/faq-page";
import TestimonialsPage from "./pages/testimonials-page";
import NotFound from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "courses", Component: CoursesPage },
      { path: "courses/:courseId", Component: CourseDetailsPage },
      { path: "enroll", Component: EnrollmentPage },
      { path: "gallery", Component: GalleryPage },
      { path: "contact", Component: ContactPage },
      { path: "faq", Component: FAQPage },
      { path: "testimonials", Component: TestimonialsPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
