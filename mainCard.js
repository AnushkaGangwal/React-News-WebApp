import Card from 'react-bootstrap/Card';
import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { MdShare } from 'react-icons/md';
import Truncate from 'react-truncate';
import Modal from 'react-bootstrap/Modal';
import { EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';

class MainCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            share: false
        };
        this.handleShareClick = this.handleShareClick.bind(this);
    }

    handleShareClick() {
        this.setState(prevState => ({
            share: !prevState.share
        }));
    }

    render() {
        var dateNew = this.props.eachArticle.date.substring(0,10);
        var sectionStyle = {};
        var sectionName = this.props.eachArticle.section;

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

        return (
            <div>
                <Card className="mx-3 mt-3">
                    <Card.Body className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <Card.Img className="img-thumbnail p-1" src={this.props.eachArticle.image} />
                        </div>
                        
                        <div className="col-md-9">
                            <Card.Title className="font-italic">{this.props.eachArticle.title}<MdShare onClick={() => this.handleShareClick(this.props.eachArticle.id)}/></Card.Title>
                            <Card.Text>
                                <Truncate lines={3}>{this.props.eachArticle.description}</Truncate>
                                <p></p>
                                <span className="font-italic">{dateNew}</span>
                                <Badge variant="secondary" className="float-right text-uppercase" style={sectionStyle}>{this.props.eachArticle.section}</Badge>
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                
                <Modal show={this.state.share} onHide={this.handleShareClick}>
                    <Modal.Header closeButton>
                        <Modal.Title className="font-size-12">{this.props.eachArticle.title}</Modal.Title>
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
                    {/* <Modal.Footer></Modal.Footer> */}
                </Modal>
            </div>
        );
    }
}

export default MainCard;