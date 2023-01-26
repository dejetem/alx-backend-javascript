import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    const LastestCar = super.constructor || super[Symbol.species];
    return new LastestCar();
  }
}
