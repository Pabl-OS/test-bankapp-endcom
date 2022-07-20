
export interface Movements {
    movimientos: movimientos[]
}
export interface movimientos {
    fecha      : Date;
    descripcion: string;
    monto      : number;
    tipo       : string;
    id         : number;
}