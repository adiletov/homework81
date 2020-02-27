import React, {Component} from 'react';
import './App.css';
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import {connect} from "react-redux";
import {postUrl} from "./Store/actionOrder";


class App extends Component {
  state={
    url: ''
  };

    onChangeHandler=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    };

    clickButton = async ()=>{
       await this.props.postUrl(this.state);
    };

    render() {
    return (
        <div className='App container'>
              <h1>Shorten Your Link</h1>
            <InputGroup>
                <Input
                    name={'url'}
                    onChange={this.onChangeHandler}
                    value={this.state.url}
                />
                <InputGroupAddon addonType="append"><Button onClick={this.clickButton}>OK</Button></InputGroupAddon>
            </InputGroup>
            <div>
                <h5>Your link now looks like this</h5>
                {this.props.idUrl && <a href={'http://localhost:8080/url/' + this.props.idUrl.shortUrl}>
                    {'http://localhost:8080/url/' + this.props.idUrl.shortUrl}
                </a>}
            </div>
        </div>
    );
  }
}
const mapStateToProps = state => ({
    idUrl: state.idUrl
});
const mapDispatchToProps = dispatch=>({
    postUrl: (url)=> dispatch(postUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
