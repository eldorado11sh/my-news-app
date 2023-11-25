import { useRef } from "react";
import ArticlePreview from "./preview"

const ArticleList = (props) => {

  return <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4 h-full">
    {
      props.articles.map((article, idx) => <ArticlePreview key={"article-"+idx} article={article} idx={idx} />)
    }
  </div>
}

export default ArticleList