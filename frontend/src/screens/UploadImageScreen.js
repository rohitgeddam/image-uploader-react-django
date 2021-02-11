import { useRef, useState } from 'react';

import ImageUploadCard from '../components/ImageUploadCard'
import UploadingStatus from '../components/UploadingStatus'
import UploadedImageDisplay from '../components/UploadedImageDisplay'

function UploadImageScreen() {
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [currentFile, setCurrentFile] = useState(null);

    if(currentFile) {
        return (
            <div className="flex items-center justify-center min-h-screen">
               <UploadedImageDisplay currentFile={currentFile} setIsFilePicked={setIsFilePicked} setCurrentFile={setCurrentFile} />
            </div>
        )
    }

    return (
      <div className="flex justify-center items-center min-h-screen">
         { !isFilePicked ?
            <ImageUploadCard setSelectedFile={setSelectedFile} setIsFilePicked={setIsFilePicked} setCurrentFile={setCurrentFile}/> :
            <UploadingStatus/> 
        }
        
       
     
      </div>
    );
  }
  
  export default UploadImageScreen;