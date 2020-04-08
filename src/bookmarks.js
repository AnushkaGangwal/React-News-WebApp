import React from 'react';
import FavoriteCard from './favoriteCard.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';

class Bookmarks extends React.Component {
    constructor() {
        super();
        this.state = {articlesList: []};
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    componentDidMount() {
        if(this.props.searchTabProp || !this.props.bookmarksTabProp)
            this.props.setTab();

        var myFavArticles = [];

        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if(key === "isGuardian")
                continue;
            var getObj = JSON.parse(localStorage.getItem(key));
            myFavArticles.push(getObj);
        }

        this.setState({
            articlesList : myFavArticles
        });
    }
    
    handleDeleteClick(id) { 
        let myObjectToDelete = JSON.parse(localStorage.getItem(id));

        toast("Removing " + myObjectToDelete.title, {
            bodyClassName: "myToast"
        });

        localStorage.removeItem(id);

        var myFavArticles = [];

        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if(key === "isGuardian")
                continue;
            var getObj = JSON.parse(localStorage.getItem(key));
            myFavArticles.push(getObj);
        }

        this.setState({
            articlesList : myFavArticles
        });
    }

    render() {
        const myArticles = this.state.articlesList.map(article => 
            <FavoriteCard eachArticle={article} key={article.id} delete={this.handleDeleteClick}/>);

        return (
            <div>
                {localStorage.length === 1 && <h3 className="mt-3 text-center">You have no saved articles</h3>}
                {localStorage.length !==  1 && <h3 className="mt-3 ml-2">Favorites</h3>}
                <div className="row row-cols-md-4 row-cols-sm-1 row-cols-xs-1 row-cols-lg-4 m-1">{myArticles}</div>
                <ToastContainer 
                    position = "top-center"
                    autoClose = {3000}
                    hideProgressBar = {true}
                    newestOnTop = {true}
                    closeOnClick
                    transition = {Zoom}
                    rtl = {false}
                    draggable
                />
            </div>
        );
    }
}

export default Bookmarks;