import { articles } from '../../../data';
import article from '../../article/[id]';

export default function handler({ query: { id } }, res) {
    // const filteredArticles = articles.filter(article => article.id === id);

    // if(filteredArticles.length>0){
    //     res.status(200).json(filteredArticles[0])
    // }else{
    //     res.status(404).json({message:'not record found'})
    // }

    res.status(200).json(articles)


}
