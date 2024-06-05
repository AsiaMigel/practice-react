import Statistics from './Statistics'
import stats from '../../stats.json'
import './App.css'

export const App = () => {
  return (
    <>
      <Statistics stats={stats} title="Main Statistics"/>
    </>
  )
}

export default App;
