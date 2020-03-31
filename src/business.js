import React from 'react';
import MainCard from './mainCard.js';
import Loader from './loader.js';

class Business extends React.Component {
    constructor() {
        super();
        this.state = {articlesList: [], isLoading: false};
    }

    componentDidMount() {
        this.setState({
            isLoading : true
        })
        fetch('http://localhost:5000/guardian-business') 
            .then(res => {
                return res.json()
            })
            .then(articles => {
                this.setState({
                    articlesList : articles,
                    isLoading: false
                });
            })
    }

    render() {
        const {articlesList} = this.state;

        const myArticles = articlesList.map(article => 
            <MainCard eachArticle={article} key={article.id}/>);

        if(this.state.isLoading) {
            return (
                <div>
                    <Loader />
                </div>
            );
        }
        else {
            return (
                <div>
                    <div>{myArticles}</div>
                </div>
            );
        }
    }
}

export default Business;