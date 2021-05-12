import {posts} from "../Data/_post_data"
import{Convert_date} from "../Date_string_util"

export class Post{
    id:number=0
    img:string=""
    title:string=""
    content:string=""
    publish_date:string=""
    country:string=""

    public constructor(data?:any) {
        if(data!=undefined){
            this.id=data.id
            this.img=data.img
            this.title=data.title
            this.content=data.content 
            this.publish_date=data.publish_date
            this.country=data.country 

        }
    }

    public static all(){
        const posts_obj=[]
        //logic for DB/service
        for (let post of posts){
            posts_obj.push(new Post(post))
        }
        return posts_obj
    }

    public static one_post(id:number){
        let post_obj:any={}
        for(let post of posts){
            if(post.id==id){
                post_obj=post
                break
            }
        }
        return post_obj
    }

    public static filter_posts( start_date:string="" , end_date:string="",category:string="0"):any{
        const start_post_obj=Convert_date.convert(start_date)
        const end_post_obj=Convert_date.convert(end_date)
        let posts_obj:any=[]
        const posts_obj_filter_date=[]
        
       if(start_date!="" && end_date!=""){
            for(let post of posts){
                let publish_date=Convert_date.convert_date_dot(post.publish_date)
                if(publish_date>start_post_obj&&publish_date<end_post_obj){
                    posts_obj_filter_date.push(new Post(post))
                }
            }  
        }else{
            for(let post of posts){
                posts_obj_filter_date.push(new Post(post))
            }
        }
        if(category!="0"){
            for(let post of posts_obj_filter_date){
                if(post.country==category){
                    posts_obj.push(post)
                }
            }
            
        }else{
            posts_obj=posts_obj_filter_date
        }
        return posts_obj

    }
    public static get_category():any{
        const categories:string[]=[]
        for(let post of posts){
           let category_found=false
           
            for(let category of categories){
                if(post.country==category){
                    category_found=true
                    break  
                }
            }
           
            if(!category_found){
                categories.push(post.country)
            }
        }

        for(let i=0;i<categories.length-1;i++){  //*********sort category*********
            for(let j=i+1;j<categories.length;j++){  
                if(categories[i].localeCompare(categories[j])==1){
                    let tmp=categories[i]
                    categories[i]=categories[j]
                    categories[j]=tmp  
                }
            }
        }

        return categories

    }
  

}