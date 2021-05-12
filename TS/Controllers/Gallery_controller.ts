import { Controller } from "./Controller";
import { View } from "../View";
import { Post } from "../Models/Post";

export class Gallery_controller extends Controller {
    default(): void {
        const all_gallery = Post.all()
        View.get().render("Gallery.njk", {
            "gallery": all_gallery
        })
    }
}