import { Route, Routes } from "react-router-dom";
import { MotionConfig } from "motion/react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ProjectDetail, NotFound } from "./pages/ProjectDetail";
export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:slug" element={<ProjectDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MotionConfig>
  );
}
