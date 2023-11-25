import { ITEMS_PER_PAGE } from "@/data/static"
import axios from "axios"

const BACKEND_URL = process.env.BACKEND_URL
const API_KEY = process.env.API_KEY

class NewsService {
  async loadNews(params) {
    const res = await axios.get(BACKEND_URL, {
      params: {
        ...params,
        apiKey: API_KEY,
        pageSize: ITEMS_PER_PAGE
      }
    })
  
    return res
  }
}

const newsService = new NewsService()

export default newsService