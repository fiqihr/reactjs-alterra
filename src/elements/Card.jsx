import Button from "./Button";

const Card = (props) => {
  const {image, title, description, textbutton} = props;

  return (
    <div className="col">
      <div className="card h-100 position-relative">
        <img
          src={image}
          className="card-img-top w-50 mx-auto mt-2"
          alt="..."
        />
        <div className="card-body position-relative">
          <h5 className="card-title">{title}</h5>
          <p className="card-text pb-5">{description}
          </p>
          <Button href="#" classname="position-absolute bottom-0 start-0 m-3">
            {textbutton}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
