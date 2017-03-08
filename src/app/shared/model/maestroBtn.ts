

export class MaestroBtn {

    constructor(
        public $key:string,
        public apellidos:string,
        public asignatura:string,
        public dni: string,
        public nombre:string,
        public url: string) {

    }

    static fromJson({$key, apellidos, asignatura, dni, nombre, url}) {
        return new MaestroBtn($key, apellidos, asignatura, dni, nombre, url);
    }

    static fromJsonArray(json : any[]) : MaestroBtn[] {
        return json.map(MaestroBtn.fromJson);
    }


}
