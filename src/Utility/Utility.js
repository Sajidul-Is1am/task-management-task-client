// this is shared you can acces any others components
import axios from "axios";

export const ImageUpload = async (photo) => {
    const formdata = new FormData();
    formdata.append("image", photo);

    try {
        const {
            data
        } = await axios.post(
            `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMABB_API_KEY}`,
            formdata
        );
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};