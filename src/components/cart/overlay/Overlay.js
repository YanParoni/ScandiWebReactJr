import React, { Component } from "react";
import { Overlay as StyledOverlay } from "./overlay-styles";

export default class Overlay extends Component {
    constructor(props) {
        super(props);
        this.state = { scroll: 0 };
        this.handleScroll = this.handleScroll.bind(this);
    }
    
    handleScroll() {
        if (document.body.scrollTop >= 80 && this.state.scroll !== 80) {
            this.setState({ scroll: 80 });
        } else if (document.body.scrollTop < 80) {
            this.setState({ scroll: document.body.scrollTop });
        }
    }

    componentDidMount() {
        document.body.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        document.body.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        return <StyledOverlay scroll={this.state.scroll} />;
    }
}