class Script{
    protected id:string;
    protected name:string;
    
    constructor(id:string, name: string){
        this.id = id;
        this.name = name;
    }

    run(){
        console.log('Running script...');
        console.log(`${this.id} - ${this.name}`);
        console.log('Ending script...')
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
