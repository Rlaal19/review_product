import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Score = ({rating}) => {

  if(rating === "5"){
    return(
      <div className=" text-xl text-star">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
    );
  }
  else if(rating === "4"){
    return(
      <div className=" text-xl text-star">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon className=" opacity-50" icon={faStar} />
      </div>
    );
  }
  else if(rating === "3"){
    return(
      <div className=" text-xl text-star">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon className=" opacity-50" icon={faStar} />
        <FontAwesomeIcon className=" opacity-50" icon={faStar} />
      </div>
    );
  }
  else if(rating === "2"){
    return(
      <div className=" text-xl text-star">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon className=" opacity-50" icon={faStar} />
        <FontAwesomeIcon className=" opacity-50" icon={faStar} />
        <FontAwesomeIcon className=" opacity-50" icon={faStar} />
      </div>
    );
  }
  return(
    <div className=" text-xl text-star">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon className=" opacity-50" icon={faStar} />
        <FontAwesomeIcon className=" opacity-50" icon={faStar} />
        <FontAwesomeIcon className=" opacity-50" icon={faStar} />
        <FontAwesomeIcon className=" opacity-50" icon={faStar} />
      </div>
  )
}

export default Score
