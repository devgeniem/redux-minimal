import React from 'react';
import PropTypes from 'prop-types';
import './img-uploader.scss';
import {Button} from 'react-bootstrap';

export class ImgUploader extends React.Component {

  constructor(props) {
    super(props);
    this.handleImgChange = this.handleImgChange.bind(this);
    this.handleImgSave = this.handleImgSave.bind(this);
    this.handleStartImgUpload = this.handleStartImgUpload.bind(this);

    this.state = {
      preview: null,
      uploaded: false,
    };
  }


  handleImgChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    if (!file) return;

    reader.onloadend = () => {
      this.setState({
        file,
        preview: reader.result,
        uploaded: false,
      });
    };

    reader.readAsDataURL(file);
  }

  handleStartImgUpload() {
    this.inputElement.click();
  }

  handleImgSave() {
    this.props.handleSave(this.state.file);
  }

  _renderPreview() {
    let elem = null;
    if (this.state.preview) {
      elem = <img onClick={this.handleStartImgUpload} className="img-responsive preview-img" src={this.state.preview}
                  alt=""/>;
    } else {
      elem = <Button onClick={this.handleStartImgUpload}>Upload pic</Button>;
    }
    return elem;

  }

  _renderSave() {
    if (this.state.preview && !this.state.uploaded) {
      return <Button onClick={this.handleImgSave}>Save Image</Button>;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="img-uploader">
        {this._renderPreview()}
        {this._renderSave()}
        <input type="file" ref={input => this.inputElement = input} onChange={this.handleImgChange}/>
      </div>
    );
  }
}


ImgUploader.defaultProps = {
  handleSave: () => {
    throw new Error('Save callback is undefined');
  },
};

ImgUploader.propTypes = {
  handleSave: PropTypes.func.isRequired,
};
