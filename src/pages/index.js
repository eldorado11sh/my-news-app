import Header from '@/components/Layout/Header'
import Sidebar from '@/components/Layout/Sidebar'
import ArticleList from '@/components/article/list';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home() {

  const loadMore = useStoreActions(actions => actions.loadMore)
  const clearNews = useStoreActions(actions => {
    return actions.clearNews
  })
  const news = useStoreState(state => state.news)
  const [page, setPage] = useState(1)
  const [params, setParams] = useState({})

  const updateParams = (updates) => {

    setParams({
      ...params,
      ...updates
    })
  }

  useEffect(() => {
    const paramLength = Object.keys(params).reduce((s, v) => params[v]&&v!='page'?s+1:s, 0)
    if (paramLength && params.q) {
      clearNews()
      loadMore({ params: {...params, page: 1} })
    }
  }, [params])

  const onScroll = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight

    if (window.scrollY >= scrollableHeight) {
      setPage(page + 1)
      loadMore({ params: {...params, page: page + 1} })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [page])

  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-8">
      <Header updateParams={updateParams} />
      <section className="w-full h-full flex-1 p-2 flex gap-4">
        <Sidebar updateParams={updateParams} />
        <ArticleList articles={news} />
      </section>
    </main>
  )
}
