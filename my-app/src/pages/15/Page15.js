import { useState } from 'react';
import './Page15.css';

const Page15 = () => {
    const [droppedFiles, setDroppedFiles] = useState(false);
    const [fileName, setFileName] = useState('');
    const [uploading, setUploading] = useState(false);
  
    const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDroppedFiles(e.dataTransfer.files);
      setFileName(e.dataTransfer.files[0]?.name);
      // Handle UI changes as needed
    };
  
    const handleUpload = () => {
      if (!uploading && fileName) {
        setUploading(true);
        // Perform file upload logic here
        setTimeout(() => {
          // Update UI to indicate success
          setUploading(false);
        }, 3200);
      }
    };
  
    const handleInputChange = (e) => {
      setFileName(e.target.files[0]?.name);
    };
  
    return (
      <div className="frame">
        <div className="center">
          <div className="bar"></div>
          <div className="title">Drop file to upload</div>
          <div className={`dropzone ${droppedFiles ? 'is-dragover' : ''}`} onDrop={handleDrop}>
            <div className="content">
              <img src="https://100dayscss.com/codepen/upload.svg" alt="Upload" className="upload" />
              <span className="filename">{fileName}</span>
              <input type="file" className="input" onChange={handleInputChange} />
            </div>
          </div>
          <img src="https://100dayscss.com/codepen/syncing.svg" alt="Syncing" className={`syncing ${uploading ? 'active' : ''}`} />
          <img src="https://100dayscss.com/codepen/checkmark.svg" alt="Done" className={`done ${uploading ? 'active' : ''}`} />
          <div className="upload-btn" onClick={handleUpload}>
            {uploading ? 'Uploading...' : 'Upload file'}
          </div>
        </div>
      </div>
    );
  };
  
  export default Page15;