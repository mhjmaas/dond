import { useState } from 'react';
import { auth, storage, STATE_CHANGED } from '../lib/firebase';
import Loader from './Loader';

/**
 * This component asks a user for a file input, and will upload it to the 'uploads' bucket and in the specified folder.
 * It will the display the download-url which can be used for showing the image in html
 * @param folder the folder in the bucket in which the file is uploaded
 * @returns ImageUploader component
 */
export default function ImageUploader(folder) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState("0");
  const [downloadURL, setDownloadURL] = useState(null);

  // Creates a Firebase Upload Task
  const uploadFile = async (e) => {
    // Get the file
    const file:any = Array.from(e.target.files)[0];
    const extension = file.type.split('/')[1];

    // Makes reference to the storage bucket location
    const ref = storage.ref(`uploads/${folder}/${Date.now()}.${extension}`); // use the current timestamp as a name to ensure uniqueness. (bit dirty, but I like it)
    setUploading(true);

    // Starts the upload
    const task = ref.put(file);

    // Listen to updates to upload task
    task.on(STATE_CHANGED, (snapshot) => {
      const pct:string = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0);
      setProgress(pct);

      // Get downloadURL AFTER task resolves (Note: this is not a native Promise)
      task
        .then((d) => ref.getDownloadURL())
        .then((url) => {
          setDownloadURL(url);
          setUploading(false);
        });
    });
  };

  return (
    <div className="box">
      <Loader show={uploading} />
      {uploading && <h3>{progress}%</h3>}

      {!uploading && (
        <>
          <label className="button">
            📸 Upload Img
            <input type="file" onChange={uploadFile} accept="image/x-png,image/gif,image/jpeg,image/png" />
          </label>
        </>
      )}

      {downloadURL && (
        <>
          <p>Copy the url below to the image field to use it.</p>
          <code className="upload-snippet">{`${downloadURL}`}</code>
        </>
      )}
    </div>
  );
}
