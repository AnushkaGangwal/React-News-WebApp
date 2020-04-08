import React from 'react';
import SearchCard from './searchCard.js';
import Loader from './loader.js';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {articlesList: []};
    }

    componentDidMount() {
        if(!this.props.searchTabProp || this.props.bookmarksTabProp)
            this.props.setTab();

        const myKeyword = window.location.href;
        const myReqdKeyword = myKeyword.substring(29);

        this.setState({
            isLoading : true
        })
        
        fetch('http://localhost:5000/search?q='+myReqdKeyword)
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
        const myArticles = this.state.articlesList.map(article => 
            <SearchCard eachArticle={article} key={article.id}/>);
        
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
                    {this.state.articlesList.length === 0 && <h3 className="mt-3 text-center">No search results</h3>}
                    {this.state.articlesList.length != 0 && <h3 className="mt-3 ml-2">Results</h3>}
                    <div className="row row-cols-md-4 row-cols-sm-1 row-cols-xs-1 row-cols-lg-4 m-1">{myArticles}</div>
                </div>
            );
        }
    }
}

export default Search;