export class URLParser{
    hash:string
    public constructor(hash:string){
        this.hash=hash
    }

    private extractor():string[]{
        const no_hash=this.hash.substring(1)
        if(no_hash.length==0){
            return []
        }else{
            return no_hash.split("/")
        }
    }

    public parser():any{
        let pars=this.extractor()
        let controller="home"
        let method="default"
        let args: string[]=[]

        if (pars.length==1){
            controller=pars[0]
        }else if(pars.length==2){
            controller=pars[0]
            method=pars[1]

        }else if(pars.length>2){
            controller=<string>pars.shift()
            method=<string>pars.shift()
            args=pars
        }

        return {
            "controller":controller,
            "method":method,
            "args":args    
        }
    }
}