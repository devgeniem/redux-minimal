import React from 'react';
import PropTypes from 'prop-types';
import './img-uploader.scss';
import {Button} from 'react-bootstrap';

export class ImgUploader extends React.Component {

  constructor(props) {
    super(props);
    this.handleImgChange = this.handleImgChange.bind(this);
    this.handleStartImgUpload = this.handleStartImgUpload.bind(this);

    this.state = {
      preview: null,
    };
  }


  handleImgChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        preview: reader.result,
      })
    };

    reader.readAsDataURL(file);
  }

  handleStartImgUpload() {
    this.inputElement.click();
  }

  _renderPreview() {
    let elem = null;
    if (this.state.preview) {
      elem = <img onClick={this.handleStartImgUpload} className="img-responsive preview-img" src={this.state.preview} alt=""/>;
    } else {
      elem = <Button onClick={this.handleStartImgUpload}>Upload pic</Button>;
    }
    return elem;

  }

  render() {
    return (
      <div className="img-uploader">
        {this._renderPreview()}
        <input type="file" ref={input => this.inputElement = input} onChange={this.handleImgChange}/>
      </div>
    );
  }
}


ImgUploader.defaultProps = {};

ImgUploader.propTypes = {};
