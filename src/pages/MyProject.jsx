import projectA from "../assets/images/project_a.jpg";
import projectB from "../assets/images/project_b.jpg";
import projectC from "../assets/images/project_c.jpg";
import Card from "../elements/Card";

function Myproject() {
  return (
    <div className="container">
      <h2 className="text-primary fw-bold">My Projects</h2>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <Card
            image={projectA}
            title="Project A"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, ea?..."
            textbutton="View More"
          />
          <Card
            image={projectB}
            title="Project B"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ipsam pariatur hic sit quaerat alias."
            textbutton="View More"
          />
          <Card
            image={projectC}
            title="Project C"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, consectetur eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,consectetur eveniet."
            textbutton="View More"
          />
        </div>
      </div>
    </div>
  );
}

export default Myproject;
