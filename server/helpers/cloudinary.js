const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
    cloud_name : "di1toxzoj",
    api_key : "966736914226539",
    api_secret : "KzVxNEN_w_rEkZ4aHJF9V5zEWSs",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file){
    const result = await cloudinary.uploader.upload(file, {
        resource_type : 'auto'
    });
    return result;
}

const upload = multer({storage});

module.exports = {upload, imageUploadUtil};
