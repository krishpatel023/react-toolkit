import { useState } from "react"
import '../styles/ImageUpload.css'
function ImageUpload(){
    const [imgData, setImgData]=useState()
    const convertImage = (e)=>{
        var render = new FileReader()
        render.readAsDataURL(e)
        render.onload = () => {
            console.log(render.result)
            setImgData(render.result)
        }
        render.onerror = error => {
            console.log("ERROR : ",error)
        }
    }
    return(
        <div className="home-wrapper">
            <div className="heading">
                <h1>UPLOAD AN IMAGE</h1>
                <input type="file" accept="image/*" onChange={(e)=>{convertImage(e.target.files[0])}}/>
                <h1>UPLOADED IMAGE</h1>
                <img src={imgData} alt=""/>
            </div>
        </div>
    )
}
export default ImageUpload