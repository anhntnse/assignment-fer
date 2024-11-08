const UploadImage = async (image) => {

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "etifaere"); // Replace with your unsigned preset

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/do65kca8j/image/upload`, // Replace with your Cloudinary cloud name
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error uploading image:", error);
    };
};

export { UploadImage };