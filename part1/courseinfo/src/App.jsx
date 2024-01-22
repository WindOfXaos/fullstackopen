const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => <Part key={index} part={part} />)}
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.number}
    </p>
  )
}

const App = () => {
  class Course {
    constructor(name, parts) {
      this.name = name;
      this.parts = parts;
    }
    getTotalExercises = () => this.parts.reduce((total, part) => total + part.exercises, 0)
  }

  const course = new Course(
    'Half Stack application development',
    [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 },
    ]
  )

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total number={course.getTotalExercises()} />
    </div>
  )
}

export default App