import { useState } from 'react';
import axios from 'axios'
import './create.css'



const Create = () => {
 
    const [formData, setFormData] = useState({
        media: null,
        title: '',
        description: '',
        link: '',
        board: '',
        tag: '',
    });

    const resetFormData = () => {
        setFormData({
            media: '',
            title: '',
            description: '',
            link: '',
            board: '',
            tag: '',
        });
    };
    

    const handleInputChange = (e) => {
        const { id, value, files } = e.target;
        if (files && files.length > 0) {
            setFormData({ ...formData, media: files[0] });
        } else {
            setFormData({ ...formData, [id]: value });
        }
    };

    const handlePublish = async () => {
        try {
            const payload = new FormData(); // For file uploads
            Object.entries(formData).forEach(([key, value]) => {
                payload.append(key, value);
            });
    
            const response = await axios.post("http://your-backend-url.com/api/pins", payload, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
    
            console.log("Post Successful:", response.data);
    
            // Reset the form after a successful post
            resetFormData();
        } catch (error) {
            console.error("Post Failed:", error);
        }
    };

    return (
         
        <div className="container-fluid" >

            <div className="row">

                <div className="input-header" >

                     <div className='header' >
                        <h3 className='title-header' >Create Pin</h3>
                        <div className='publish-btn' onClick={() => handlePublish()} ></div>
                     </div>

                     <div className='input-div' >
                        <div className="file-input" >
                             <input
                                 accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp,video/mp4,video/x-m4v,video/quicktime"
                                 type="file"
                                 style={{
                                     cursor: "pointer",
                                     height: "100%",
                                     opacity: 0,
                                     position: "absolute",
                                     width: "100%",
                                   }}
                                   multiple
                                   tabIndex="0"
                                   value={formData.media}
                                   onChange={handleInputChange}
                               />
                             </div>

                             <div className='text-div' > 
                      
                             {['title', 'description', 'link', 'board', 'tag'].map((field) => (
                                 <div className="input-wrapper" key={field} >
                                  <label htmlFor={field} className='input-label'>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                  <input
                                    className={`input-${field}`}
                                     type="text"
                                     id={field}
                                    placeholder={`Add a ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                    value={formData[field]}
                                    onChange={handleInputChange}
                                     />
                                </div>
                             ))}

                             </div>

                     </div>

                </div>

                

            </div>

        </div>

    );
};

export default Create;