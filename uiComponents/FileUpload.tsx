import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

export const ImageUpload = ({ id = "", info = "", src = "", noImage = "", uploadFile }: {
    id?: string;
    info?: string;
    src?: string;
    noImage?: string;
    uploadFile: (file: File) => void;
}) => {
    const [imgSrc, setImgSrc] = useState("");
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0]
        uploadFile(file);
        setImgSrc(URL.createObjectURL(file));
    };
    return ( 
        <>
            <div className="file-upload-container">
                <img className="img-thumbnail rounded mr-2" src={src != "" ? src : imgSrc != "" ? imgSrc : noImage} alt="Image" />
                <div className="d-flex flex-column">
                    <label className="upload-btn btn btn-outline-secondary" htmlFor={id}>
                        <FaCloudUploadAlt className="mr-1" /> <span>Select Photo</span>
                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleImageChange(e)} type="file" id={id} accept="image/*" />
                    </label>
                    {info != "" && <small className="form-text text-muted">{info}</small>}
                </div>
            </div>
        </>
    );
};