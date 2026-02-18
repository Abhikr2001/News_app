const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card news-card h-100 shadow-sm mb-3">
      <img
        src={src || "https://via.placeholder.com/300x200"}
        className="card-img-top news-img"
        alt="news"
      />

      <div className="card-body d-flex flex-column p-3">
        <h6 className="card-title mb-2">
          {title ? title.slice(0, 55) : "No title"}
        </h6>

        <p className="card-text text-muted small mb-3">
          {description
            ? description.slice(0, 90)
            : "No description available"}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-primary mt-auto"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
