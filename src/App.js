import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetails = [
  {
    uniqueId: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Bavani kumari',
    role: 'UI Developer',
  },

  {
    uniqueId: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'RaviChandra',
    role: 'Software Developer',
  },

  {
    uniqueId: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Mersey',
    role: 'Android Developer',
  },

  {
    uniqueId: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Tom',
    role: 'Software Developer',
  },
]
const App = () => (
  <div className="listContainer">
    <h1 className="title">User List</h1>
    <ul>
      {userDetails.map(each => (
        <UserProfile userDetails={each} key={each.uniqueId} />
      ))}
    </ul>
  </div>
)

export default App
