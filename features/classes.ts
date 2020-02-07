class Vehicule {
  constructor(public color: string) {}

  private honk(): void {
    console.log("Biip Biip");
  }
}

const vehicule = new Vehicule("red");
console.log(vehicule.color);
// vehicule.honk();

class Car extends Vehicule {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("Chugga Chugga");
  }

  startDrivingProcess(): void {
    this.drive();
    // this.honk();
  }
}

const superCar = new Car(4, "red");
superCar.startDrivingProcess();
// car.honk();
