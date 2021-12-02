import client from "./client";
import { API } from "../../config";

export const content = curSort => client.get(`${API.content}${curSort}`);

export const rooms = curSort => client.get(`${API.rooms}${curSort}`);
