import { Router } from "./Router";
import * as  nunjucks from "nunjucks"

export class View{

    private static instance:View
    private constructor (){}
    private app_element?:HTMLElement
    public static get(){
        if(View.instance==undefined||View.instance==null){
            View.instance=new View
            nunjucks.configure("../Templates",{autoescape:false})
        }
        return View.instance
    }

    public  get_app_element(selector:string){
        View.get().app_element=<HTMLElement>document.querySelector(selector)
        
    }

    public render(template:string,data:any=[]){
        
        if(this.app_element!=undefined){
           
            this.app_element.innerHTML=nunjucks.render(template,data)
        }

    }


    
}