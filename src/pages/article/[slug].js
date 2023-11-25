import { useStoreState } from 'easy-peasy';
import { useRouter } from 'next/router';
 
export default function Page() {
  const router = useRouter();
  const slug = router.query.slug

  const news = useStoreState(state => state.news)
  const article = news[slug]
  return <div className='bg-white p-10'>
      <p>Post: {article.description}</p>
      <button type="button" onClick={() => router.back()} className='bg-black text-white px-4 py-2 mt-6'>
        Click here to go back
      </button>
    </div>;
}