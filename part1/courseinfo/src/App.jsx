const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => <Part key={index} part={part} />)}
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Total = ({ number }) => {
  return (
    <p>
      Number of exercises {number}
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