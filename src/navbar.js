import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {Nav} from 'react-bootstrap';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import Switch from 'react-switch';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { Redirect } from 'react-router-dom';
import _ from "lodash";

class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            myResults: [], 
            isLoading:false, 
            redirectToResults: false, 
            myKeyword: null,
            activeTabNo: 1,
            searchQ: this.props.searchQProp,
            isSearchLoading: false
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.searchFunction = this.searchFunction.bind(this);
        this.highlightTab = this.highlightTab.bind(this);
        this.resetNavHL = this.resetNavHL.bind(this);
    }

    async handleSearchChange(value) {
        try {
            this.setState({
                isSearchLoading: true
            })
            const response = await fetch(
            `https://api.cognitive.microsoft.com/bing/v7.0/suggestions?mkt=en-US&q=${value}`,
            {
                headers: {
                    "Ocp-Apim-Subscription-Key": "397aa55fe65646a7b3c5fac0af611d55"
                }
            });
            const data = await response.json();
            const resultsRaw = data.suggestionGroups[0].searchSuggestions;
            const results = resultsRaw.map(result => ({ value: result.displayText, label: result.displayText }));
            results.unshift({value: value, label: value});
            this.setState({ 
                myResults: results,
                isSearchLoading: false
             });
        }   
        catch (error) {
            console.error(`Error fetching search ${value}`);
        }
    }

    searchFunction(k) {
        this.setState({
            redirectToResults: true,
            myKeyword: k.value
        })
        this.props.searchPage(k.value);
    }

    resetSearchRedirection() {
        this.setState({
            redirectToResults: false
        })
    }

    resetNavHL() {
        if(this.state.activeTabNo != 0) {
            this.setState({
                activeTabNo: 0
            });
        }
    }

    componentDidUpdate() {
        ReactTooltip.rebuild();
    }

    highlightTab(id) {
        this.setState({
            activeTabNo: id
        });
    }

    static getDerivedStateFromProps(props, state) {
        if(state.searchQ !== props.searchQProp) {
            return {
                searchQ: props.searchQProp
            }
        }
        return null;
    }

    render() {
        var expd = window.location.pathname.split("/");
        var reqdExpd = expd[1];

        if(window.location.pathname == '/bookmarks' || reqdExpd == "expanded") {
            this.resetNavHL();
            ReactTooltip.hide();
        }
        
        if(this.state.redirectToResults)
        {
            this.resetSearchRedirection();
            this.resetNavHL();
            return( 
                <Redirect push to={{
                    pathname: '/search/'+this.state.myKeyword
                }} />
            )
        }
        return (
            <Navbar variant="dark" expand="lg" className="my-nav row">
                <div className="col-md-3 ml-2 p-0" >
                    <Select placeholder="Enter keyword .." 
                        options={this.state.myResults}
                        onInputChange={_.debounce(this.handleSearchChange, 1000, { })}
                        onChange={this.searchFunction}
                        defaultInputValue={this.state.searchQ}
                        key={this.state.searchQ}
                        isLoading={this.state.isSearchLoading}
                    />
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" activeKey={this.state.activeTabNo} onSelect={this.highlightTab}>
                        <Nav.Link eventKey={1} as={Link} onClick={this.props.searchResetProp} to="/" href="/">Home</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} onClick={this.props.searchResetProp} to="/world" href="/world">World</Nav.Link>
                        <Nav.Link eventKey={3} as={Link} onClick={this.props.searchResetProp} to="/politics" href="/politics">Politics</Nav.Link>
                        <Nav.Link eventKey={4} as={Link} onClick={this.props.searchResetProp} to="/business" href="/business">Business</Nav.Link>
                        <Nav.Link eventKey={5} as={Link} onClick={this.props.searchResetProp} to="/technology" href="/technology">Technology</Nav.Link>
                        <Nav.Link eventKey={6} as={Link} onClick={this.props.searchResetProp} to="/sports" href="/sports">Sports</Nav.Link>
                    </Nav>
                    <Nav>
                        <ReactTooltip place="bottom" effect="solid" id="bmTT"/>
                        {!this.props.bookmarksTabProp && <Navbar.Brand as={Link} to="/bookmarks" onClick={this.props.searchResetProp}><FaRegBookmark data-tip="Bookmark" data-for="bmTT"/></Navbar.Brand>}
                        {this.props.bookmarksTabProp && <Navbar.Brand as={Link} to="/bookmarks"><FaBookmark data-tip="Bookmark" data-for="bmTT"/></Navbar.Brand>}
                        
                        {!this.props.searchTabProp && !this.props.bookmarksTabProp && <Navbar.Brand>NYTimes</Navbar.Brand>}
                        {!this.props.searchTabProp && !this.props.bookmarksTabProp &&
                        <Navbar.Brand>
                            <Switch 
                                onChange={this.props.onToggle} 
                                checked={this.props.isGuardianProp} 
                                onColor={'#008ef6'}
                                offColor={'#d8dadc'}
                                checkedIcon={false}
                                uncheckedIcon={false}
                            />
                        </Navbar.Brand>}
                        {!this.props.searchTabProp && !this.props.bookmarksTabProp && <Navbar.Brand>Guardian</Navbar.Brand>}
                    </Nav> 
                </Navbar.Collapse>
            </Navbar>
        );
    }  
}

export default MyNavbar;