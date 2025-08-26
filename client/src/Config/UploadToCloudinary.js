export const uploadToCloudinary =async(image)=>{

    if(image){
        const data=new FormData();
        data.append("file",image )
        data.append("upload_preset", "instergram")
        data.append("cloud_name","dt8viiekl")

        const res= await fetch("https://api.cloudinary.com/v1_1/dt8viiekl/image/upload",{
            
            method:"POST",
            body:data,
        })
        const fileData = await res.json();
        console.log("filedata", fileData);
        
        return fileData.url.toString()
    }

}