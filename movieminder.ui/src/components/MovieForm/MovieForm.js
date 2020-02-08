import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
} from 'reactstrap';
import './MovieForm.scss';

class MovieForm extends React.Component {

  render() {
    return (
      <Form onSubmit={this.props.movieFormSubmit}>
        <Row form>
          <Col>
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
          <Col>
            <FormGroup>
              <Label for="releaseDate">Release Date</Label>
              <Input
                id="releaseDate"
                placeholder="ex: 2012-03-23"
                value={this.props.formMovie.releaseDate}
                onChange={this.props.movieFormChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="posterURL">Image URL</Label>
              <Input
                id="posterURL"
                placeholder="ex: https://upload.wikimedia.org/wikipedia/en/4/42/HungerGamesPoster.jpg"
                value={this.props.formMovie.posterURL}
                onChange={this.props.movieFormChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="submit">{this.props.formMovie.id === "" ? 'Add Category' : 'Edit Category'}</Label>
              <Button id="submit" type="submit" color="primary" className="ml-auto mr-auto d-block">
                {this.props.formMovie.id === "" ? 'Create' : 'Update'}
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default MovieForm;
