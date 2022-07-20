export interface Balances {
    saldos:saldos[]
}
export interface saldos {
    cuenta      : number;
    saldoGeneral: number;
    ingresos    : number;
    gastos      : number;
    id          : number;
}