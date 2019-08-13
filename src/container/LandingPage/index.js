import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { fetchHomePageData } from "../../actions/home-page-actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./styles.scss";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.props.fetchHomePageData();
  }

  navigateTo = data => {
    this.props.history.push(`/${data.path}`);
  };

  render() {
    console.log("dataaa", this.props.data);
    const { data } = this.props;
    return (
      <Container>
        <div>
          <div className="bgimg">
            <div className="carousel-caption d-md-block">
              <h2 className="display-4">Welcome Raghu</h2>
              {data ? (
                <p className="lead" onClick={() => this.navigateTo(data)}>
                  Click here to navigate to {data.title}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.homepage.navigateto
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchHomePageData }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
