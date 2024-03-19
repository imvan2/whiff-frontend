import React from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import "../../App.css";
import "./PerfumeDetails.css";
import { useLocation } from "react-router-dom";

function PerfumeDetails() {
  let location = useLocation();
  const perfumeData = location.state;


  // This page shows the details of the perfume, including the notes, paragraph, larger picture, etc

  // TODO: NEED TO FETCH DATA FROM API AND FILL IN THE DETAILS
  // TODO: NEED TO CREATE A DETAILS PAGE IN DJANGO
  return (
    <>
      <div className="detail-title">
        <h1 className="perfume-name">{perfumeData.name}</h1>
        <p className="perfume-designer">{perfumeData.designer}</p>
      </div>
      <div className="first-section">
        <img
          className="image-large"
          src={perfumeData.image}
          alt={perfumeData.name + " by " + perfumeData.designer}
        ></img>
        {/* <div className="tags-section pill-wrap">
          {perfume.tags.map((tag) => {
            return (
              <ul>
                <li className="pill" key={tag}>
                  {tag}
                </li>
              </ul>
            );
          })}
        </div> */}
      </div>
      <div className="second-section">
        <div className="main-accords-section">
          <h2>Main accords</h2>
          {perfumeData.accords.map((mainAccords, id) => {
            return (
              <ul>
                <li className="pill" key={id}>
                  {mainAccords}
                </li>
              </ul>
            );
          })}
        </div>
        <div className="perfume-pyramid">
          <h2>Perfume pyramid</h2>
          <h3>Top notes</h3>
          <div className="notes-section">
            {perfumeData.top_notes.map((note, id) => {
              return (
                <ul>
                  <img src={note.image} alt={note.name}></img>
                  <li key={id}>{note.note}</li>
                </ul>
              );
            })}
          </div>
          <h3>Middle notes</h3>
          <div className="notes-section">
            {perfumeData.heart_notes.map((note, id) => {
              return (
                <ul>
                  <img src={note.image} alt={note.name}></img>
                  <li key={id}>{note.note}</li>
                </ul>
              );
            })}
          </div>
          <h3>Base notes</h3>
          <div className="notes-section">
            {perfumeData.base_notes.map((note, id) => {
              return (
                <ul>
                  <img src={note.image} alt={note.name}></img>
                  <li key={id}>{note.note}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PerfumeDetails;
