import Card from 'react-bootstrap/Card';
import React from 'react';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ReactTooltip from 'react-tooltip';
import Loader from './loader.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';
import { animateScroll as scroll, Element, scroller } from 'react-scroll';
import { EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';
import PageWithComments from './comment.js';

class ExpandedCardNY extends React.Component {
    constructor(props) {
        super(props);
        this.state = {articlesList: {}, isLoading: false, showMore: false, isBookmarked: false};
        this.myRef = React.createRef();
    }

    handleShowMoreClick() {
        if(!this.state.showMore)
            this.scroll(this.myRef);

        if(this.state.showMore)
            scroll.scrollToTop();

        this.setState(prevState => ({
            showMore: !prevState.showMore
        }));
    }

    scroll(ref) {
        scroller.scrollTo("part-two", {smooth: true });
    }

    componentDidMount() {
        if(!this.props.searchTabProp || this.props.bookmarksTabProp)
            this.props.setTab();

        const myFullUrl = window.location.href;
        const myUrl = myFullUrl.substring(31);

        var value = localStorage.getItem(myUrl);

        if (!value) {
            this.setState({
                isLoading : true,
                idForComment: myUrl,
                isBookmarked: false
            })
        }
        else {
            this.setState({
                isLoading : true,
                idForComment: myUrl,
                isBookmarked: true
            })
        }

        fetch('http://localhost:5000/nytimes-expanded/?id='+myUrl) 
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

    notify = () => {
        if(!this.state.isBookmarked) {
            toast("Saving " + this.state.articlesList.title, {
                bodyClassName: "myToast"
            });
            localStorage.setItem(this.state.idForComment, JSON.stringify(this.state.articlesList));
        }
        else {
            toast("Removing - " + this.state.articlesList.title, {
                bodyClassName: "myToast"
            });
            localStorage.removeItem(this.state.idForComment);
        }
        
        this.setState(prevState => ({
            isBookmarked: !prevState.isBookmarked
        }));
    }

    render() {
        this.props.searchResetProp();
        
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
                    <Card className="m-3 mb-4 shadow">
                        <Card.Body>
                            <div>
                                <Card.Title className="font-italic"><h4>{this.state.articlesList.title}</h4></Card.Title>
                                <Card.Text className="d-flex justify-content-between mx-2 p-0">
                                    <p className="font-italic">{this.state.articlesList.date}</p>
                                    <div className="align-middle">
                                        <div className="d-inline-flex mr-5">
                                            <FacebookShareButton
                                                url={this.state.articlesList.url}
                                                hashtag={"#CSCI_571_NewsApp"}
                                            >
                                            <FacebookIcon data-tip="Facebook" data-for="facebook" size={28} round />
                                            <ReactTooltip id="facebook" place="top" effect="solid"/>
                                            </FacebookShareButton>
    
                                            <TwitterShareButton
                                                url={this.state.articlesList.url}
                                                hashtags={["CSCI_571_NewsApp"]}
                                            >
                                            <TwitterIcon data-tip="Twitter" data-for="twitter" size={28} round />
                                            <ReactTooltip id="twitter" place="top" effect="solid"/>
                                            </TwitterShareButton>
    
                                            <EmailShareButton
                                                url={this.state.articlesList.url}
                                                subject={"CSCI_571_NewsApp"}
                                            >
                                            <EmailIcon data-tip="Email" data-for="email" size={28} round />
                                            <ReactTooltip id="email" place="top" effect="solid"/>
                                            </EmailShareButton >
                                        </div>

                                        {!this.state.isBookmarked && <FaRegBookmark data-for="bookmark" color={'#f40237'} size={24} className="float-right" data-tip="Bookmark" onClick={this.notify}/>}
                                        {this.state.isBookmarked && <FaBookmark data-for="bookmark" color={'#f40237'} size={24} className="float-right" data-tip="Bookmark" onClick={this.notify}/>}
                                        <ReactTooltip id="bookmark" place="top" effect="solid"/>
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
                                </Card.Text>
                            </div>
                            
                            <Card.Img className="rounded-0" src={this.state.articlesList.image} />
                            
                            <Card.Text className="text-justify">
                                {!this.state.showMore && <div><p>{this.state.articlesList.partOne}</p><Element name="part-two"><p ref={this.myRef}></p></Element></div>}
                                {this.state.showMore && 
                                    <div>
                                        <p>{this.state.articlesList.partOne}</p>
                                        <Element name="part-two"><p ref={this.myRef}>{this.state.articlesList.partTwo}</p></Element>
                                    </div>
                                }
                            </Card.Text>

                            {!this.state.showMore && this.state.articlesList.partTwo !== "" && <IoIosArrowDown className="float-right" onClick={() => this.handleShowMoreClick()}/>}
                            {this.state.showMore && this.state.articlesList.partTwo !== "" && <IoIosArrowUp className="float-right" onClick={() => this.handleShowMoreClick()}/>}
                        </Card.Body>
                    </Card>

                    <PageWithComments />
                </div>
            );
        }
    }
}

export default ExpandedCardNY;