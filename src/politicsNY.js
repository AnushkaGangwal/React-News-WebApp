import React from 'react';
import MainCardNY from './mainCardNY.js';
import Loader from './loader.js';

class PoliticsNY extends React.Component {
    constructor() {
        super();
        this.state = {articlesList: [], isLoading: false};
    }

    componentDidMount() {
        if(this.props.searchTabProp || this.props.bookmarksTabProp)
            this.props.setTab();
            
        this.setState({
            isLoading : true
        })
        fetch('http://localhost:5000/nytimes-politics') 
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
            <MainCardNY eachArticle={article} key={article.id}/>);

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

export default PoliticsNY;