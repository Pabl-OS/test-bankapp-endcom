export interface Account {
    cuenta: cuenta[];
}   
export interface cuenta {
    cuenta      : string;
    nombre      : string;
    ultimaSesion: Date ,
    id          : string    
}