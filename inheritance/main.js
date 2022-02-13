class Car{
    constructor(brand){
        this.brand = brand
    }
    present(){
        return `I have a car of brand ${this.brand}`
    }
}

class Model extends Car{
    constructor(brand,model){
        super(brand)
        this.model = model
    }

    show(){
       return this.present() + `, and model is ${this.model}`
    }

}

model = new Model("Hyundai","Creata")
console.log(model.show())