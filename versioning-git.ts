interface DatabaseReturnDTO{
    name: string;
    connection: string;
}


class Database{
    protected databaseName:string;
    protected connection: DatabaseReturnDTO;

    initDatabase(name: string): DatabaseReturnDTO{
        return {name: `${name}.sql`, connection: 'connection'};
    }

    constructor(databaseName: string){
        this.databaseName = databaseName;
        this.connection = this.initDatabase(this.databaseName);
    }
}

class Script{
    protected id:string;
    protected name:string;
    protected connection:Database = new Database('Backtracking');

    constructor(id:string, name: string){
        this.id = id;
        this.name = name;
    }

    start(){
        const initDatabase = this.connection;
        console.log('Running script...')
        console.log(initDatabase);
    }

    end(){
        console.log('Ending script...')
    }

    run(){
        this.start();
        console.log(`${this.id} - ${this.name}`);
        this.end();
    }
}

interface QueryParams{
    id: string
    name: string
}

function onlyGit(queryParams: QueryParams){
    const script = new Script(queryParams.id, queryParams.name);
    script.run();
}

const payload:QueryParams = {
    id: '123',
    name: 'Gabriel'
}

onlyGit(payload);
