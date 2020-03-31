import Card from 'react-bootstrap/Card';
import React from 'react';
import Truncate from 'react-truncate';
import { FaRegBookmark } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ReactTooltip from 'react-tooltip';
import Loader from './loader.js';
import PageWithComments from './comment.js';
import { EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';

class ExpandedCard extends React.Component {
    constructor() {
        super();
        this.state = {articlesList: {}, isLoading: false, showMore: false};
    }

    handleShowMoreClick() {
        this.setState(prevState => ({
            showMore: !prevState.showMore
        }));
    }

    componentDidMount() {
        const myFullUrl = window.location.href;
        const myUrl = myFullUrl.substring(31);

        this.setState({
            isLoading : true,
            idForComment: myUrl
        })

        fetch('http://localhost:5000/guardian-expanded/?id='+myUrl) 
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
                                <Card.Title className="font-italic">{this.state.articlesList.title}</Card.Title>
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
                                        <FaRegBookmark data-for="bookmark" color={'#f40237'} size={24} className="float-right" data-tip="Bookmark"/>
                                        <ReactTooltip id="bookmark" place="top" effect="solid"/>
                                    </div>
                                </Card.Text>
                            </div>
                            
                            <Card.Img className="rounded-0" src={this.state.articlesList.image} />
                            
                            <Card.Text className="text-justify">
                                {!this.state.showMore && <Truncate lines={6}>{this.state.articlesList.description}</Truncate>}
                                {this.state.showMore && this.state.articlesList.description}
                            </Card.Text>

                            {!this.state.showMore && <IoIosArrowDown className="float-right" onClick={() => this.handleShowMoreClick()}/>}
                            {this.state.showMore && <IoIosArrowUp className="float-right" onClick={() => this.handleShowMoreClick()}/>}
                        </Card.Body>
                    </Card>

                    <PageWithComments />
                </div>
            );
        }
    }
}

export default ExpandedCard;