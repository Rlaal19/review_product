const Picture=({picture}) =>{
    if(!picture)
        return null;
    return(
        <div>
            <img src={picture} className=" w-5/6 rounded-lg border-2"/>
        </div>
    )
}
export default Picture;