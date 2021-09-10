import articleStyle from '../styles/Articles.module.css';
import ArticlesItem from './ArticlesItems';

const ArticlesList = ({ articles }) => {
    return (
        <div className={articleStyle.grid}>
            {
                articles.map((article)=>(
                    <ArticlesItem key={article.id} article={article}/>
                ))
             }
        </div>
    );
}

export default ArticlesList;