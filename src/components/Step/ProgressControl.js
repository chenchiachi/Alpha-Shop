import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg';
import { ReactComponent as LeftArrow } from '../../assets/left-arrow.svg';
const ProgressControl = () => {
return (
    <section className='progress-control-container col col-lg-6 col-sm-12'>
        <section className='button-group col col-12' data-phase='address'>
          <button className='next cursor-point'>
            下一步
            <RightArrow className='svg' />
          </button>
        </section>

        <section className='button-group col col-12' data-phase='shipping'>
          <button className='prev cursor-point' >
            <LeftArrow className='svg' />
            上一步
          </button>
          <button className='next cursor-point'>
            下一步
            <RightArrow className='svg' />
          </button>
        </section>
        
        <section className='button-group col col-12' data-phase='credit-card'>
          <button className='prev cursor-point' >
            <LeftArrow className='svg' />
            上一步
          </button>
          <button className='next cursor-point '>
            確認下單
          </button>
        </section>
    </section>
)
};

export default ProgressControl;