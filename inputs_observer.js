class Observer {
  update(data) {}
}

class Subject {
  subscribe(observer) {}
  unsubscribe(observer) {}
}

class InputsObserved extends Subject {
  constructor(className) {
    super();
    this.observers = [];
    this.inputs = document.getElementsByClassName(className);
    Array.from(this.inputs).forEach((input) => {
      input.addEventListener("input", () => {
        this.notify(input.value);
      });
    });
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    const index = this.observers.findIndex((obs) => {
      return obs === observer;
    });

    this.observers.splice(index, 1);
  }

  notify(data) {
    let inputsLenght = this.inputs.length;
    const hasInputsFilled = [];
    Array.from(this.inputs).forEach((input) => {
      if (input.value) {
        hasInputsFilled.push(input);
      }
    });
    if (hasInputsFilled.length == inputsLenght) {
      this.observers.forEach((observer) => observer.update(true));
    } else {
      this.observers.forEach((observer) => observer.update(false));
    }
  }
}

class EnableSubmitButton extends Observer {
  constructor(idBtn) {
    super();
    this._btnSubmit = document.getElementById(idBtn);
  }

  update(data) {
    if (data) {
      this._btnSubmit.disabled = false;
      this._btnSubmit.classList.remove("disabled-button");
      this._btnSubmit.classList.add("primary-button");
    } else {
      this._btnSubmit.disabled = true;
      this._btnSubmit.classList.remove("primary-button");
      this._btnSubmit.classList.add("disabled-button");
    }
  }
}

/*================================ Observer para el formulario del cuadrado ==============================*/
const ioCuadrado = new InputsObserved("in-cuadrado");
const enBtnCuadrado = new EnableSubmitButton("btnCuadrado");
ioCuadrado.subscribe(enBtnCuadrado);

/*================================ Observer para el formulario del triángulo ==============================*/
const ioTriangulo = new InputsObserved("in-triangulo");
const enBtnTriangulo = new EnableSubmitButton("btnTriangulo");
ioTriangulo.subscribe(enBtnTriangulo);

/*================================ Observer para el formulario del círculo ==============================*/
const ioCirculo = new InputsObserved("in-circulo");
const enBtnCirculo = new EnableSubmitButton("btnCirculo");
ioCirculo.subscribe(enBtnCirculo);
