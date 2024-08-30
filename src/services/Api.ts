import axios from "axios";

export const apiRest = axios.create({
  // baseURL: "http://api-registration-videos.onrender.com",
  baseURL: "http://localhost:3333",
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiGitHub = axios.create({
  baseURL: "https://api.github.com",
});

// export const getVideos = async () => {
//   try {
//     const response: AxiosResponse = await axios.get(API_URL);
//     console.log("Data fetched:", response.data);
//     return response.data;
//   } catch (error: any) {
//     console.error("Error fetching data:", error); // Exibe a mensagem do erro
//     if (error.response) {
//       console.error("Error response data:", error.response.data); // Exibe dados da resposta de erro, se disponíveis
//       console.error("Error response status:", error.response.status); // Exibe status da resposta de erro
//     } else if (error.request) {
//       console.error("Error request:", error.request); // Exibe a requisição, se disponível
//     } else {
//       console.error("Error message:", error.message); // Exibe a mensagem de erro, se disponível
//     }
//     return [];
//   }
// };
