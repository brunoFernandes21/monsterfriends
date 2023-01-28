import Card from "./Card";

const CardList = ({ robots }) => {
  //   const allRobots = robots.map((robot) => (
  //     <Card
  //     key={robot.id}
  //     id={robot.id}
  //     name={robot.name}
  //     email={robot.email} />
  //   ));
  return (
    <div>
      {/* {allRobots} */}
      {robots.map((robot) => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </div>
  );
};

export default CardList;
