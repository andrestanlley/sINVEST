const axios = require('axios')

exports.all = async(req,res)=>{
    const result = await axios.get("http://visaomacro.com:5000/wp-json/wp/v2/posts?_embed")
    return res.status(200).send(result.data)
} 

exports.article = async(req,res)=>{
    const idArtigo = req.params.idArtigo
    const result = await axios.get(`http://visaomacro.com:5000/wp-json/wp/v2/posts/${idArtigo}?_embed`)
    return res.status(200).send(result.data)
}