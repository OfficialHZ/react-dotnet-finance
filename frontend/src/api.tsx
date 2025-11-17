import axios from "axios";
import { CompanySearch } from "./company";

export interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const response = await axios.get<CompanySearch[]>(
      `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );

    // 👇 MANUALLY match the old structure
    return { data: response.data };

  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    }
    return "Unexpected error";
  }
};




/* import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string): Promise<SearchResponse | string> => {
  try {
    const response = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );

    return response.data; // IMPORTANT FIX
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
 */
