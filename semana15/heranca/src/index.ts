// Exercício 1
// A. Não seria possivel imprimir pois password é uma propriedade privada e a mesma também não possui método get
// B. A Mensage "Chamando o construtor da classe User" é impressa uma vez

// Exercicio 2
// A. Foi chamado apenas uma vez
// B. Foi chamado apenas uma vez porque o construtor da classe pai também é executada quando sua filha é instanciada

// Exercicio 3
// A. Não seria possivel porque é uma propriedade privada e não tem um método para acessala

// Resolução
// const novoUsuario = new User("1","andrius.rochalazarino@gmail.com","Andrius","123456")
// console.log(novoUsuario.getId())
// console.log(novoUsuario.getName())
// console.log(novoUsuario.getEmail())
// console.log(novoCustomerUser.getName())
// console.log(novoCustomerUser.getEmail())
// console.log(novoCustomerUser.getCreditCard())
// console.log(novoCustomerUser.purchaseTotal)
// const novoCustomerUser = new Customer("1","andrius.rochalazarino@gmail.com","Andrius","123456", "432112345698")
// console.log(novoCustomerUser.introduceYourself())

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ){
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }
}

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(id: string, email: string, name: string, password: string, creditCard: string) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

class Employee extends User {
    protected admissionDate: Date
    protected baseSalary: number

    constructor(id: string, email:string, name:string, password:string, admissionDate:Date, baseSalary:number) {
        super(id, email, name, password)
        this.admissionDate = admissionDate
        this.baseSalary = baseSalary
    }

    public getAdmissionDate(): Date {
        return this.admissionDate
    }
    public getBaseSalary(): number {
        return this.baseSalary
    }
}

const funcionario = new Employee("1","andrius@email.com","Andrius","123456",new Date("2020-06-06"),6845)

console.log(funcionario.getId())
console.log(funcionario.getName())
console.log(funcionario.getEmail())
console.log(funcionario.introduceYourself())
console.log(funcionario.getAdmissionDate())
console.log(funcionario.getBaseSalary())







