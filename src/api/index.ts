import axios from "axios";
import {
  ApiResponse,
} from "./type";

const api = axios.create({
  timeout: 10000,
});

export const getUniqueViewSeconds = async () => {
  return await api.get<ApiResponse>('https://664ac067a300e8795d42d1ff.mockapi.io/api/v1/numbers/1');
}