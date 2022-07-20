export interface Cards {
    tarjetas: tarjetas[]
}
export interface tarjetas {
    tarjeta: string;
    nombre : string;
    saldo  : number;
    estado : string;
    tipo   : string;
    id     : number;
}