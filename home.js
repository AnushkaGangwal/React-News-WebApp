import React from 'react';
import MainCard from './mainCard.js';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {articlesList: []};
    }

    componentDidMount() {
        fetch('http://localhost:5000/guardian-home') 
            .then(res => {
                return res.json()
            })
            .then(articles => {
                this.setState({articlesList : articles});
            })
    }

    render() {
        const {articlesList} = this.state;

        const myArticles = articlesList.map(article => 
            <MainCard eachArticle={article} key={article.id}/>);

        return (
            <div>{myArticles}</div>
        );
    }
}

export default Home;