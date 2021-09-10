import Link from "next/link";
import Meta from "../../../components/Meta";
import { server } from "../../../config";

const article = ({ article }) => {
    return (
        <div>
            <Meta 
            title={article.title}
            description={article.excerpt} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <Link href="/">Go back</Link>
        </div>
    );
}

export default article;

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }
// }

export const getStaticProps = async (context) => {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const res = await fetch(`${server}/api/article/${context.params.id}`);
    const article = await res.json();
    return {
        props: {
            article
        }
    }
}
export const getStaticPaths = async (context) => {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const res = await fetch(`${server}/api/article`);
    const articles = await res.json();

    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({ params: { id: id.toString() } }))
    return {
        paths,
        fallback: false
    }
}