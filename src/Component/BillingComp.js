import '../style/billingComp.css';
import { useDispatch } from 'react-redux';
import {monthly,yearly} from '../feature/CardData';

export default function BillingComp() {
  const dispatch = useDispatch()

  return (
    <div className="billing__section">
      <div className="billing__btn__wraper">
        <button className='bill_btn'
        onClick={() => {
          dispatch(monthly({hobby:158,freelancer:200,startup:279,enterprise:310,year:"MONTH"}))
        }}
        >MONHTLY BILLING</button>
        <button className='bill_btn r_btn'
          onClick={() => {
            dispatch(yearly({hobby:258,freelancer:690,startup:579,enterprise:910,year:"YEAR"}))
          }}
        
        >YEARLY BILLING</button>
      </div>
    </div>
  )
}