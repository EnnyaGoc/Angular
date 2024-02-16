//decorators
function ExibirNome(target: string) {
    return(target: any) => {
    Object.assign(target.prototype, { __version: version, __name:"ana"});
    };
 }
    

 //attribute decorator
 function minLength(length:number) {
    return (target: any, key: string)=> {
        let _value = target[key];
        const getter = () => "[play]" + _value;
        const setter = (value: string) =>{
            if(value.length < length){
                throw new Error(`Tamanho menor do que ${length}`);
                
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
   };
 }

class API{
    @minLength(20)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const api = new Api("reuhtriueferhfrh");
console.log(api.name);
