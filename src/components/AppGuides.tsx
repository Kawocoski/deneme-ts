const TWBS_DOCS_URL = "https://getbootstrap.com/docs/5.3";

const GUIDES = [
  {
    url: `${TWBS_DOCS_URL}/getting-started/introduction/`,
    title: "virüs1",
  },
  {
    url: `${TWBS_DOCS_URL}/getting-started/webpack/`,
    title: "virüs2",
  },
  {
    url: `${TWBS_DOCS_URL}/getting-started/parcel/`,
    title: "virüs3",
  },
  {
    url: `${TWBS_DOCS_URL}/getting-started/vite/`,
    title: "virüs4",
  },
  {
    url: `${TWBS_DOCS_URL}/getting-started/contribute/`,
    title: "virüs5",
  },
];

const AppGuides: React.FC = () => {
  return (
    <>
      <h2>Boş Beleş Link Yeri</h2>
      <p>
        SPSS ANAL-iz 
      </p>
      {GUIDES.map((guide) => {
        return (
          <li key={guide.title} className="d-flex align-items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-arrow-right-circle-fill me-2"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
            <a href={guide.url} target="_blank" rel="noopener">
              {guide.title}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default AppGuides;
