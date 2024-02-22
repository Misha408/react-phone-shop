import './HotPrise.scss';
import { ProductsSlider } from '../ProductsSlider';

export const HotPrise = () => {
  return (
    <div className="prise">
      <div className="container">

        <ProductsSlider
          title="Hot prices"
          sale
        />
      </div>
    </div>
  );
};
