import axios from "axios";

const apiToken = "JIUiYWnEyUVaUs2mmXAv";

const api = axios.create({
  baseURL: "https://the-one-api.dev",
  headers: {
    Authorization: `Bearer ${apiToken}`,
  },
});

export interface MovieData {
  academyAwardNominations: number;
  academyAwardWins: number;
  boxOfficeRevenueInMillions: number;
  budgetInMillions: number;
  name: string;
  rottenTomatoesScore: number;
  runtimeInMinutes: number;
  _id: string;
}

export const getMovies = async (): Promise<MovieData[]> =>
  api
    .get("/v2/movie", {
      params: {
        limit: 50,
      },
    })
    .then((res: { data: { docs: any; }; }) => {
      return res.data.docs;
    });
