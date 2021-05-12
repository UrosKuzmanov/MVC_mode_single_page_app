import { URLParser } from "./URLParser"
import {Router} from "./Router"
import {View} from "./View"
import { Post } from "./Models/Post"

function main():void{
    const hash=window.location.hash
    const parse= new URLParser (hash).parser()
    Router.get().call(parse);
  
}
function filter_date_event(e:any):void{
    const input_category=<HTMLInputElement>document.querySelector("#category")
    const input_from_date=<HTMLInputElement>document.querySelector("#from_date")
    const input_to_date=<HTMLInputElement>document.querySelector("#to_date")
    console.log(input_category.value)
    const hash=`#posts/search/${input_from_date.value}/${input_to_date.value}/${input_category.value}`
    const parse= new URLParser (hash).parser()
    Router.get().call(parse);
    window.location.hash=hash

}

function global_click_listener(e:any):void{   
    if(e.target.tagName=="A" && e.target.getAttribute("href").startsWith("#")){
        const hash=e.target.getAttribute("href")
        const parse= new URLParser (hash).parser()
        Router.get().call(parse);
        console.log("uros")

    }
    
    if(e.target.id=="filter_btn"){
        filter_date_event(e)
    }
}

//***********************select app output****************************
View.get().get_app_element(".app_div")
//--------------------------------------------------------------------

main()
document.body.onclick= global_click_listener


