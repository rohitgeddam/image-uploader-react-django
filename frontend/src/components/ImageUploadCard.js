import axios from 'axios';

import { useRef, useState } from 'react';
function ImageUploadCard({setSelectedFile, setIsFilePicked, setCurrentFile}) {
    
    const chooseFileRef = useRef(null);

    const handleUploadChange =  (event) => {
        console.log("changed")
        setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
       

        // uploadFile();
        const formData = new FormData();
		formData.append('file', event.target.files[0]);
        
        fetch(
			'http://localhost:8000/api/files',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
                setCurrentFile(`http://localhost:8000${result.file}`)
                
			})
			.catch((error) => {
				console.error('Error:', error);
			});
       
    }

    const handleChooseFileBtn = () => {
       chooseFileRef.current.click();
    }

  return (
    <div className="image-upload-card flex flex-col items-center justify-around text-xl">
        <p className="card-heading">
            Upload your image
        </p>
        <p className="text-sm card-sub-heading">
        File should be Jpeg, Png,...
        </p>

        <div className="drop-image-here flex justify-center items-center mt-4">
            <p className="text-gray-400">
                Drag and drop image here.
            </p>
        </div>

        <p className="text-gray-400">Or</p>

        <input type="file" hidden name="file" onChange={handleUploadChange} ref={chooseFileRef} />

        <button type="file" className="w-2/4 mb-2 px-1 py-1 h-31.98px bg-blue-400 rounded-md text-white" onClick={handleChooseFileBtn}>Choose Image</button>

    </div>
  );
}

export default ImageUploadCard;