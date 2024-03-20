import React, { useEffect, useState } from "react";
import "../../App.css";
import "./PerfumeDetails.css";
import { useLocation } from "react-router-dom";

function PerfumeDetails() {
  let location = useLocation();
  const perfumeData = location.state;

  const [perfume, setPerfume] = useState(perfumeData);
  const [notes, setNotes] = useState([]);
  const [accords, setAccords] = useState([]);

  // This page shows the details of the perfume, including the notes, paragraph, larger picture, etc

  // TODO: NEED TO FETCH DATA FROM API AND FILL IN THE DETAILS
  // TODO: NEED TO CREATE A DETAILS PAGE IN DJANGO

  // Fetch from Notes and Accord

  const savingNotes = (notes, accords, perfume) => {
    // Need two iterations, one for notes and one for accords
    for (let i = 0; i < notes.length; i++) {
      for (let j = 0; j < perfume["top_notes"].length; j++) {
        if (notes[i]["id"] === perfume["top_notes"][j]) {
          perfume["top_notes"][j] = notes[i];
        }
      }
    }
    for (let i = 0; i < notes.length; i++) {
      for (let j = 0; j < perfume["heart_notes"].length; j++) {
        if (notes[i]["id"] === perfume["heart_notes"][j]) {
          perfume["heart_notes"][j] = notes[i];
        }
      }
    }

    for (let i = 0; i < notes.length; i++) {
      for (let j = 0; j < perfume["base_notes"].length; j++) {
        if (notes[i]["id"] === perfume["base_notes"][j]) {
          perfume["base_notes"][j] = notes[i];
        }
      }
    }

    for (let i = 0; i < accords.length; i++) {
      for (let j = 0; j < perfume["accords"].length; j++) {
        if (accords[i]["id"] === perfume["accords"][j]) {
          perfume["accords"][j] = accords[i]["accord"];
        }
      }
    }
    setPerfume(perfume);
  };

  const fetchingData = async () => {
    const notesResponse = await fetch(
      `https://whiff-backend-5f278bf19e19.herokuapp.com/api/notes`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const notesData = await notesResponse.json();

    const accordsResponse = await fetch(
      `https://whiff-backend-5f278bf19e19.herokuapp.com/api/accords`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const accordsData = await accordsResponse.json();

    setNotes(notesData);
    setAccords(accordsData);
  };

  useEffect(() => {
    fetchingData();
  }, [perfumeData]);

  useEffect(() => {
    savingNotes(notes, accords, perfume);
  }, [notes, accords, perfume]);

  return (
    <>
      <div className="detail-container">
        <div className="detail-title">
          <div className="name">
            <h1 className="perfume-name">{perfumeData.name}</h1>
            <p className="perfume-designer">{perfumeData.designer}</p>
          </div>
          <div className="tag">
            {perfumeData.tags.map((tag) => {
              return <p>{tag}</p>;
            })}
          </div>
        </div>

        <div className="first-section">
          <img
            className="image-large"
            src={perfumeData.image}
            alt={perfumeData.name + " by " + perfumeData.designer}
          ></img>
          <div className="description">
            <hi className="summary-review">My review</hi>
            {perfumeData.summary}
          </div>
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
      </div>
    </>
  );
}

export default PerfumeDetails;
