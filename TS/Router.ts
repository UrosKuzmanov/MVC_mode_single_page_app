import { Home_controller } from "./Controllers/Home_controller"
import { Post_controller } from "./Controllers/Post_controller"
import { About_controller } from "./Controllers/About_controller"
import { Gallery_controller } from "./Controllers/Gallery_controller"

export class Router{
    private static instance:Router
    private constructor (){}
    public  static get(){
        if(Router.instance==undefined||Router.instance==null){
            Router.instance=new Router
        }
        return Router.instance
    }

    private registry:any={
        "home": new Home_controller ,
        "posts": new Post_controller,
        "about":new About_controller,
        "gallery":new Gallery_controller,
    }

    public call(parser:any):void{
        const controller=parser.controller
        if(!(controller in this.registry)){
            throw new Error("Eror 404 Page not founded")
        }
        
        if(parser.args.length==0){
           
            this.registry[controller][parser.method]()
        }else{
            
            this.registry[controller][parser.method](parser.args)
        }


    }

}