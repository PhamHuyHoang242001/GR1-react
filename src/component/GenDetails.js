import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import geneDatas from "../data/geneDatas";

export default function GeneDetails() {
  const { gene } = useParams();

  const [geneData, setGeneData] = useState([]);

  useEffect(() => {
    const fetchGeneData = async () => {
      try {
        const text = geneDatas;
        const lines = text.trim().split("\n");
        const headers = lines[0].split("\t");
        const data = lines.slice(1).map((line) => {
          const values = line.split("\t");
          return headers.reduce((obj, header, index) => {
            obj[header] = values[index];
            return obj;
          }, {});
        });
        setGeneData(data);
      } catch (error) {
        console.error("Error fetching gene data:", error);
      }
    };

    fetchGeneData();
  }, []);

  var genzz = geneData.filter((gen) => gen.name === gene);

  return (
    <div>
      {genzz.length > 0 && (
        <>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            {genzz[0].name}
          </p>
          <p style={{ marginTop: "10px", fontSize: "16px", color: "#333" }}>
            {genzz[0].description}
          </p>
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#999" }}>
            {genzz[0].last_review_date}
          </p>
        </>
      )}
    </div>
  );
}
