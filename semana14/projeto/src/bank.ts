import { writeFileSync, readFileSync } from 'fs'
import * as moment from "moment";

type extract = {
    value: number,
    date: Date,
    description: string
}
type account = {
    name: string,
    cpf: string,
    dateNasc: Date,
    balance: number,
    extracts: extract[]
}

const operacao = String(process.argv[2]).toUpperCase()


switch (operacao) {
    case ""
}