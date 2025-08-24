import Repository from "./Repository";

const Repositories = () => {
  return (
    <div className="repository-container">
      <Repository
        title="demo-repo"
        visibility="public"
        description="Coursera Test Repository"
        language="HTML"
      />

      <Repository
        title="Coursera-Test"
        visibility="private"
        language="JavaScript"
      />
    </div>
  );
};

export default Repositories;
