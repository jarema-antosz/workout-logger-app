import React from 'react';




// export default () => (
//     <ul>{trainings.map( training =>
//     <li key={training.id}>{training.date}</li>
//     )}
//     </ul>
// )

export default class Trainings extends React.Component {
  render() {
    return (
      <ul>{trainings.map( training =>
      <li key={training.id}>{training.date}<br />{training.exercises.forEach(exercise => <div key={exercise}>{exercise}<br /></div>)}</li>
      )}
      </ul>
  )
}
}
