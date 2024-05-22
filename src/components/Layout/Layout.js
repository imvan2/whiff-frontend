import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import { useState, useEffect } from "react";

function Layout() {
  // State to hold perfumes and designers
  const [perfumes, setPerfumes] = useState([]);
  const [designers, setDesigner] = useState([]);

  /* savingDesignerName is an arrow function that loop over the perfumes and designers
   * objects to match designers with the perfumes.
   * Sets the changed perfumes object as state
   *
   * Data fetched from backend has perfumes[0].designer as an ID that references designers object ID*/
  const savingDesignerName = (designers, perfumes) => {
    for (let i = 0; i < perfumes.length; i++) {
      for (let j = 0; j < designers.length; j++) {
        if (perfumes[i]["designer"] === designers[j]["id"]) {
          perfumes[i]["designer"] = designers[j]["name"];
        }
      }
    }
    setPerfumes(perfumes);
  };

  /* fetchingData is an async arrow function that gets data from the backend
   * Converts the response to JSON
   * Sets the fetched data as state
   */
  const fetchingData = async () => {
    const perfumeResponse = await fetch(
      `https://whiff-backend-5f278bf19e19.herokuapp.com/api/perfume`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const perfumeData = await perfumeResponse.json();

    const designersResponse = await fetch(
      `https://whiff-backend-5f278bf19e19.herokuapp.com/api/designers`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const designerData = await designersResponse.json();
    setPerfumes(perfumeData);
    setDesigner(designerData);
  };

  /* Effect hook to fetch data immediately upon loading the page */
  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(() => {
    // Run savingDesignerName function when perfumes or designers change
    savingDesignerName(designers, perfumes);
  }, [designers]);

  return (
    <>
      <Header />
      <SearchBar />
      {perfumes && <Outlet context={[perfumes, designers]} />}
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
