import image from "../assets/download (2).jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card h-100 bg-dark text-light shadow-sm">
      <img
        src={src ? src : image}
        className="card-img-top news-img"
        alt="news"
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title?.slice(0, 60)}</h5>

        <p className="card-text flex-grow-1">
          {description ? description.slice(0, 100) : "No description available"}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary mt-auto"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
