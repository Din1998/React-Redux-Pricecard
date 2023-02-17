
import '../style/card.css'
import SubsBtn from './SubsBtn'

export default function Cards(){
  return (
    <div className="card__section">
      <div className="card__wraper">
        <div className="card__body">
          <div className='card_elements'>
            <h2>HOBBY</h2>
            <p className='discription__text'>ALL THE BASICS FOR STARTING NEW BUSINESS</p>
            <p className='price__text'>$100/<span className='span_text'>Months</span></p>
            <SubsBtn />
          </div>
        </div>
        <div className="card__body">
          <div className='card_elements'>
            <h2>FREELANCER</h2> 
            <p className='discription__text'>ALL THE BASICS FOR STARTING NEW BUSINESS</p>
            <p className='price__text'>$100/<span className='span_text'>Months</span></p>
            <SubsBtn />   
          </div>   
        </div>
        <div className="card__body">
          <div className='card_elements'>
            <h2>STARTUP</h2> 
            <p className='discription__text'>ALL THE BASICS FOR STARTING NEW BUSINESS</p>
            <p className='price__text'>$100/<span className='span_text'>Months</span></p>
            <SubsBtn />   
          </div>
        </div>
        <div className="card__body">
          <div className='card_elements'>
           <h2>ENTERPRICE</h2>
           <p className='discription__text'>ALL THE BASICS FOR STARTING NEW BUSINESS</p>
           <p className='price__text'>$100/<span className='span_text'>Months</span></p>
           <SubsBtn />
          </div>
        </div>
      </div>
    </div>
  )
}