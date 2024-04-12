
const Pink = ({code,link}) => {
  return (
    <div className=' flex gap-4'>
        <a href={link} target='blank'><button className="btn btn-error">{code}</button></a>
    </div>
  )
}

export default Pink;
