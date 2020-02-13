import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  ButtonGroup,
} from 'reactstrap';
import './MovieForm.scss';

class MovieForm extends React.Component {

  render() {
    // const buttons = (
    //   <Col xs={12} md={6} lg={4} xl={3}>
    //     <FormGroup>
    //       <Label for="submitButtons">{this.props.formMovie.id === "" ? 'Add Movie' : 'Edit Movie'}</Label>
    //       <ButtonGroup id="submitButtons">
    //         <Button id="submit" type="submit" color="primary" className="ml-auto mr-auto d-block">
    //           {this.props.formMovie.id === "" ? 'Add' : 'Update'}
    //         </Button>
    //         <Button id="lucky" type="submit" color="success" className="ml-auto mr-auto d-block">
    //           I'm feeling lucky
    //         </Button>
    //       </ButtonGroup>
    //     </FormGroup>
    //   </Col>
    // );

    return (
      <Form onSubmit={this.props.movieFormSubmit} className="MovieForm">
        <Row form>
          <Col xs={12} md={6} lg={4} xl={3}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                id="title"
                placeholder="ex: The Hunger Games"
                value={this.props.formMovie.title}
                onChange={this.props.movieFormChange}
              />
            </FormGroup>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3}>
            <FormGroup>
              <Label for="releaseDate">Release Date (optional)</Label>
              <Input
                id="releaseDate"
                placeholder="ex: 2012-03-23"
                value={this.props.formMovie.releaseDate}
                onChange={this.props.movieFormChange}
              />
            </FormGroup>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3}>
            <FormGroup>
              <Label for="posterURL">Image URL (optional)</Label>
              <Input
                id="posterURL"
                placeholder="ex: https://upload.wikimedia.org/wikipedia/en/4/42/HungerGamesPoster.jpg"
                value={this.props.formMovie.posterURL}
                onChange={this.props.movieFormChange}
              />
            </FormGroup>
          </Col>
          {/* {buttons} */}
          <Col xs={12} md={6} lg={4} xl={3}>
            <FormGroup>
              <Label for="submit">{this.props.formMovie.id === "" ? 'Add Movie' : 'Edit Movie'}</Label>
              <Button id="submit" type="submit" color="primary" className="ml-auto mr-auto d-block">
                {this.props.formMovie.id === "" ? 'Add Movie' : 'Update Movie'}
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default MovieForm;
