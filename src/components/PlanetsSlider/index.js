import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    SlidesToScroll: 1,
  }
  return (
    <div className="main-container" data-testid="planets">
      <h1>PLANETS</h1>
      <div>
        <Slider>
          {planetsList.map(eachItem => (
            <PlanetItem key={eachItem.id} planetDetails={eachItem} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
