import { Route, Routes } from "react-router-dom";
import { MotionConfig } from "motion/react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Music } from "./pages/Music";
import { Work } from "./pages/Work";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Discipline } from "./pages/Discipline";
import { ProjectDetail, NotFound } from "./pages/ProjectDetail";
import { disciplines } from "./data/disciplines";
export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {disciplines.map((d) => (
            <Route
              key={d.id}
              path={d.id}
              element={<Discipline key={d.id} id={d.id} />}
            />
          ))}
          <Route path="work" element={<Work />} />
          <Route path="work/:slug" element={<ProjectDetail />} />
          <Route path="music" element={<Music />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MotionConfig>
  );
}
