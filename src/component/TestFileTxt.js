import React, { useEffect, useState } from "react";
import geneDatas from "../data/geneDatas";
const TestFileTxt = () => {
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

  return (
    <div>
      <h1>Gene Data</h1>
      <table>
        <thead>
          <tr>
            {geneData.length > 0 &&
              Object.keys(geneData[0]).map((header) => (
                <th key={header}>{header}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {geneData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestFileTxt;
