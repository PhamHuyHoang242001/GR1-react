import csvtojson from "csvtojson";

export async function HandleFileTxt() {
  try {
    const response = await fetch("../data/geneDatas.txt");
    const textData = await response.text();
    const jsonArray = await csvtojson().fromString(textData);
    return jsonArray;
  } catch (error) {
    console.error("Error reading file:", error);
    return null;
  }
}
