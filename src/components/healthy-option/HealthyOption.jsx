import "./HealthyOption.css";
import { test } from "../../data";

export default function HealthyOption() {
  return (
    <>
      <div className="healthy-option">
        <div className="ho-heading">
          <div className="ho-heading-left">
            <img src={test} alt="" srcset="" />
          </div>
          <div className="ho-heading-right">
            <div className="ho-heading-right-wrapper">
              <h2 className="ho-title">KIT 2023 MAIS SAUDÁVEL</h2>
              <div className="ho-description">
                Nossa seleção de refeições prontas congeladas, em kit 10 dias
                para você ter uma rotina mais saudável.
              </div>
              <div className="ho-price-wrapper">
                <div className="ho-whole-price">R$ 345,80</div>
                <div className="ho-price-per-day">R$ 34,58</div>
              </div>
            </div>
          </div>
        </div>
        <div className="ho-content"></div>
      </div>
    </>
  );
}
