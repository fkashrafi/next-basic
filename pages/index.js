import ArticlesList from '../components/ArticlesList';
import Meta from '../components/Meta';
import { server } from '../config';

export default function Home({ articles }) {
  return (
    <div>
      <Meta title="home" />
      <ArticlesList articles={articles} />
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await res.json();
//   return {
//     props: {
//       articles
//     }
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/article`);
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}
