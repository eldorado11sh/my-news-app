import { ITEMS_PER_PAGE } from "@/data/static";
import newsService from "@/service/newsService";
import { createStore, action, actionOn, thunk } from "easy-peasy";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

const model = {
  news: [],
  page: 1,
  totalResults: 0,

  loadNews: action((state, payload) => {
    state.news = [...state.news, ...payload.news]
    state.page = state.page + 1
    state.totalResults = payload.totalResults
  }),

  clearNews: action((state, payload) => {
    state.page = 1
    state.news = []
  }),

  loadMore: thunk(async (actions, payload) => {
    const res = await newsService.loadNews(payload.params)
    actions.loadNews({news: res.data.articles, totalResults: res.data.totalResults})
  })
};

const initStore = () => {
  return createStore(model);
};

export const wrapper = createWrapper(initStore);
