import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import './img-uploader.scss';

export class ImgUploader extends React.Component {

  constructor(props) {
    super(props);
    this.handleImgChange = this.handleImgChange.bind(this);
    this.handleStartImgUpload = this.handleStartImgUpload.bind(this);

    this.state = {
      preview: null,
      uploaded: false,
    };
  }

  componentWillUnmount() {
    this.setState({
      preview: null,
    });
  }

  _renderPreview() {
    let elem = null;
    // FIXME: server should provide the protocol (http://)
    const url = this.state.preview
      ? this.state.preview
      : `http://${this.props.image}?${new Date().getTime()}`;

    if (this.props.image || this.state.preview) {
      elem = (
        <div className="image-container">
          <img
            className="img-responsive preview-img"
            src={url}
            alt=""/>
          <Button onClick={this.handleStartImgUpload}>Change picture</Button>
        </div>
      );
    } else {
      elem =
        <Button onClick={this.handleStartImgUpload}>Upload picture</Button>;
    }
    return elem;
  }

  handleStartImgUpload() {
    this.inputElem.click();
  }

  handleImgChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    if (!file) return;

    reader.onloadend = () => {
      this.setState({
        preview: reader.result,
      });
    };

    reader.readAsDataURL(file);
    const onChange = this.props.input.onChange;
    onChange(file);
  }

  render() {
    return (
      <div className="img-uploader">
        {this._renderPreview()}
        <input
          name={this.props.input.name}
          ref={(input) => {
            this.inputElem = input;
          }}
          onChange={this.handleImgChange}
          type="file"
        /></div>
    );
  }

}

ImgUploader.defaultProps = {
  image: null,
  input: null,
};

ImgUploader.propTypes = {
  image: PropTypes.string,
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }),
};
