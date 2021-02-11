import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function UploadingStatus() {
    return (
      <div className="upload-status flex flex-col">
          <h1 className="upload-status_heading mt-5 ml-5">Uploading..</h1>
          <div className="m-auto ">
                <Loader
                type="Puff"
                color="#00BFFF"
                height={50}
                width={50}
            />
          </div>
      </div>
    );
  }
  
  export default UploadingStatus;