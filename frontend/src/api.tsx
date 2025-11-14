import axios from "axios";
import { CompanySearch } from "./company";

export const searchCompanies = async (query: string) => {
  // Decide which endpoint to use:
  // If the query looks like a ticker (1–5 letters, no spaces)
  const isSymbol = /^[A-Z]{1,5}$/i.test(query);
  const endpoint = isSymbol ? "search-symbol" : "search-name";

  const url = `https://financialmodelingprep.com/stable/${endpoint}?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`;

  try {
    const response = await axios.get<CompanySearch[]>(url);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log("API error:", error.message);
      return [];
    }
    console.log("Unexpected error:", error);
    return [];
  }
};
