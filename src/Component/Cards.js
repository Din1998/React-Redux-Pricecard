
import '../style/card.css'
import BillingComp from './BillingComp'
import SubsBtn from './SubsBtn'
import { useSelector } from 'react-redux'
import { Container,Grid } from '@mui/material'

export default function Cards(){
  const priceValue = useSelector((state) => state.priceCard.value)
  return (
    <div className="card__section">

      <BillingComp />
      <Container>
      <div className="card__wraper">
        <Grid container >
        <Grid item sm={6} md={3}>
          <div className="card__body">
              <div className='card_elements'>
                <h2>HOBBY</h2>
                <p className='discription__text'>ALL THE BASICS FOR STARTING NEW BUSINESS</p>
                <p className='price__text'>${priceValue.hobby}/<span className='span_text'>{priceValue.year}</span></p>
                <SubsBtn />
              </div>
            </div>
        </Grid>
        <Grid sm={6} md={3}>
          <div className="card__body">
              <div className='card_elements'>
                <h2>FREELANCER</h2> 
                <p className='discription__text'>ALL THE BASICS FOR STARTING NEW BUSINESS</p>
                <p className='price__text'>${priceValue.freelancer}/<span className='span_text'>{priceValue.year}</span></p>
                <SubsBtn />   
              </div>   
            </div>
        </Grid>
        <Grid sm={6} md={3}>
        <div className="card__body">
            <div className='card_elements'>
              <h2>STARTUP</h2> 
              <p className='discription__text'>ALL THE BASICS FOR STARTING NEW BUSINESS</p>
              <p className='price__text'>${priceValue.startup}/<span className='span_text'>{priceValue.year}</span></p>
              <SubsBtn />   
            </div>
          </div>
          </Grid> 
          <Grid item sm={6} md={3}>
          <div className="card__body">
            <div className='card_elements'>
            <h2>ENTERPRICE</h2>
            <p className='discription__text'>ALL THE BASICS FOR STARTING NEW BUSINESS</p>
            <p className='price__text'>${priceValue.enterprise}/<span className='span_text'>{priceValue.year}</span></p>
            <SubsBtn />
            </div>
          </div>
          </Grid>
        
        </Grid>
        
      </div>
      </Container>
    </div>
  )
}