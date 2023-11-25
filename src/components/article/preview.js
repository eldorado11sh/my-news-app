import Link from "next/link"

const ArticlePreview = (props) => {
  const { article, idx } = props

  return <Link className="border-2 border-black p-4" href={`/article/${idx}`}>
    <div className="col-span-1 flex">
      {/* <img src={article.urlToImage} /> */}
      <div>
        <h3><span className="font-bold">Author: </span> {article.author}</h3>
        <h4><span className="font-bold">Source:</span> {article.source.name}</h4>
        <h4><span className="font-bold">Content:</span> {article.content}</h4>
        <p><span className="font-bold">Description:</span> {article.description.substring(0, 100)+"....."}</p>
      </div>
    </div>
  </Link>
}

export default ArticlePreview