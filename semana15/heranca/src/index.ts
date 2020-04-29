// Exercício 1
// A. Não seria possivel imprimir pois password é uma propriedade privada e a mesma também não possui método get
// B. A Mensage "Chamando o construtor da classe User" é impressa uma vez

// Exercicio 2
// A. Foi chamado apenas uma vez
// B. Foi chamado apenas uma vez porque o construtor da classe pai também é executada quando sua filha é instanciada

// Exercicio 3
// A. Não seria possivel porque é uma propriedade privada e não tem um método para acessala

// Exercicio 6
// A. A mensagem "Chamando o construtor da classe User" foi impressa uma vez no terminal
// B. id, name, email, introduceYourself, AdmissionDate, baseSalary

// Exercicio 8
// A. id, email, name, password, admissionDate, baseSalary
// B. Imprime todas as propriedades menos o password porque o mesmo é privado e não existe um metodo getter para ele.

// Exercicio 9
// A. Não é possivel imprimir o valor salesQuantity porque o mesmo é private o não existe um metodo getter para o mesmo

// Exercicio 10
// A. Foi impresso o valor de 10054 porque a função caculateTotalSlary esta sobreescrevendo a função da classe pai

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
    static BENEFITS_VALUE:number = 400

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
    public calculateTotalSalary():number {
        return this.baseSalary + Employee.BENEFITS_VALUE
    }
}

class Seller extends Employee{
    private salesQuantity:number = 0
    static SELLING_COMMISSION:number = 5


    public setSalesQuantity(salesQuantity:number):void {
        this.salesQuantity = salesQuantity
    }
    public calculateTotalSalary():number {
        return (this.baseSalary + 400 + (Seller.SELLING_COMMISSION*this.salesQuantity))
    }
}

const funcionario = new Employee("1","andrius@email.com","Andrius","123456",new Date("2020-06-06"),6845)

const vendedor = new Seller("1", "andrius@email.com","Andrius", "123456", new Date("2020-06-06"),9639)

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
// console.log(funcionario.getId())
// console.log(funcionario.getName())
// console.log(funcionario.getEmail())
// console.log(funcionario.introduceYourself())
// console.log(funcionario.getAdmissionDate())
// console.log(funcionario.getBaseSalary())
// console.log(funcionario.calculateTotalSalary())
// console.log(vendedor.getId())
// console.log(vendedor.getName())
// console.log(vendedor.getEmail())
// console.log(vendedor.getAdmissionDate())
// console.log(vendedor.getBaseSalary())
// vendedor.setSalesQuantity(5)
// vendedor.setSalesQuantity(3)
// console.log(vendedor.calculateTotalSalary())



