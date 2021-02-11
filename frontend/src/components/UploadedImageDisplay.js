import { useRef, useState } from 'react';


function UploadedImageDisplay({currentFile, setIsFilePicked, setCurrentFile}) {

    const reset = () => {
        setIsFilePicked(false);
        setCurrentFile(null); 
    }

    console.log("currentFile", currentFile)
    return (
      <div className="image-display-card flex flex-col  items-center">
        <p className="card-heading">
            Upload Successfull
         
        </p>

        <img className="display-image-image" src={currentFile} />

        <div className="flex border-2 border-blue-500 border-opacity-75 items-center justify-center">
            <div className="link-box">
                    <input type="text" className="outline-none" value={currentFile}/>
            </div>

            <button className="copy-link rounded-sm bg-blue-500 ml-5 p-2 text-white hover:bg-white hover:text-blue-500 hover:border-2 hover:border-light-blue-500" onClick={() => {navigator.clipboard.writeText(currentFile)}}>
                Copy!
            </button>


        </div>

        <div onClick={reset} className="cursor-pointer m-5 text-blue-500 hover:text-blue-800" >Upload another</div>
      </div>

    );
}

export default UploadedImageDisplay;