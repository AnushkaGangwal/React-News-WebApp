import Card from 'react-bootstrap/Card';
import React from 'react';
import Truncate from 'react-truncate';
import Badge from 'react-bootstrap/Badge';
import { MdShare, MdDelete } from 'react-icons/md';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import { EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';

class FavoriteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {articlesList: {}, share: false, expanded: false};
        this.handleShareClick = this.handleShareClick.bind(this);
        this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleShareClick(e) {
        this.setState({
            share: true
        });
        e.stopPropagation();
    }

    handleCardClick(article) {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }));
    }

    render() {
        var sectionStyle = {};
        var sectionName = this.props.eachArticle.section;

        let closeShare = () => {this.setState({share: false})};

        if(sectionName === "world")
            sectionStyle = {color: "white", backgroundColor: "#723bf7"};
        else if(sectionName === "politics")
            sectionStyle = {color: "white", backgroundColor: "#058d77"};
        else if(sectionName === "business")
            sectionStyle = {color: "white", backgroundColor: "#008ef5"};
        else if(sectionName === "technology")
            sectionStyle = {color: "black", backgroundColor: "#c6dd00"};
        else if(sectionName === "sports" || sectionName === "sport")
            sectionStyle = {color: "black", backgroundColor: "#f8b412"};
        else
            sectionStyle = {color: "white", backgroundColor: "#5c6063"};

        var sectionNameStyle = {};
        var sectionNameToggle = this.props.eachArticle.name;
    
        if(sectionNameToggle === "guardian")
            sectionNameStyle = {color: "white", backgroundColor: "#101d38"};
        else
            sectionNameStyle = {color: "black", backgroundColor: "#dedbdc"};

        if(this.state.expanded)
        {
            return(
                <Redirect push to={{
                    pathname: '/expanded/'+this.props.eachArticle.id
                }} />
            )
        }

        else {
            return (
                <div className="p-2">
                    <Card className="shadow" onClick={() => this.handleCardClick(this.props.eachArticle)}>
                        <Card.Body>
                            <div>
                                <Card.Title className="font-italic"><Truncate lines={2}>{this.props.eachArticle.title}</Truncate><span> </span><MdShare size={18} onClick={this.handleShareClick}/><MdDelete size={18} onClick={() => this.props.delete(this.props.eachArticle.id)}/></Card.Title>
                            </div>
                            
                            <Card.Img className="img-thumbnail p-1" src={this.props.eachArticle.image} />
                            
                            <Card.Text className="text-justify mt-2">
                                <span className="font-italic">{this.props.eachArticle.date}</span>
                                <div className="float-right">
                                    <Badge className="text-uppercase" style={sectionStyle}>{this.props.eachArticle.section}</Badge>
                                    <Badge className="ml-2 text-uppercase" style={sectionNameStyle}>{this.props.eachArticle.name}</Badge>
                                </div>
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Modal show={this.state.share} onHide={closeShare}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <h4 className="text-uppercase">{this.props.eachArticle.name}</h4>
                                {this.props.eachArticle.title}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p className="text-center">Share via</p>
                            <div className="row justify-content-around">
                                <FacebookShareButton
                                    url={this.props.eachArticle.url}
                                    hashtag={"#CSCI_571_NewsApp"}
                                >
                                <FacebookIcon size={48} round />
                                </FacebookShareButton>

                                <TwitterShareButton
                                    url={this.props.eachArticle.url}
                                    hashtags={["CSCI_571_NewsApp"]}
                                >
                                <TwitterIcon size={48} round />
                                </TwitterShareButton>

                                <EmailShareButton
                                    url={this.props.eachArticle.url}
                                    subject={"CSCI_571_NewsApp"}
                                >
                                <EmailIcon size={48} round />
                                </EmailShareButton>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            );
        }
    }
}

export default FavoriteCard;