const Imagekit = require('@imagekit/nodejs')

const imagekit = new Imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

const uploadFile = async(buffer)=>{
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image_jpeg"
    })
    return result
}

module.exports = uploadFile