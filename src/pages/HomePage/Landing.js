import NewSection from "../HomePage/components/NewSection";
import Top5 from "../HomePage/components/Top5";
import React from "react";
import { useOutletContext } from "react-router-dom";

/** Landing() is a React Component that renders the landing page of the website.
 * It is a declared function.
 * It takes no parameters.
 *
 * It fetches data from the Django backend and saves it as state
 * Data it collects: all perfumes and all designers
 **/

function Landing() {
  const [perfumes, designers] = useOutletContext();
  // TODO: instead of looping, match the id of the designer
  return (
    <>
      <NewSection perfumes={perfumes} />
      <Top5 perfumes={perfumes} />
    </>
  );
}

export default Landing;
