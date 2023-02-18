import '../style/brandSection.css'
import img1 from '../Assist/next.svg'
import img2 from '../Assist/vercel.svg'
import img3 from '../Assist/thirteen.svg'

import img4 from '../Assist/the-tolet.svg'



export default function BrandSection() {
  return(
    <div className="brand__sec">
      <h4>BROUGHT YOU BY</h4>
      <div className='brandImg__wraper'>
        <img className='brand__img img1' src={img1}/>
        <img className='brand__img img2' src={img2}/>
        <img className='brand__img img3' src={img3}/>
        <img className='brand__img img4' src={img4}/>
      </div>
    </div>
  )
}