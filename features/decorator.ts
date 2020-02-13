@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError("Oops boat sunk in ocean")
  pilot(): void {
    throw new Error();
    console.log("swish");
  }

  @logError("something bad")
  backUp(@parameterDecorator speed: string): void {
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("nothing");
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
