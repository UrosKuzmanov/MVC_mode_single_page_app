import { Controller } from "./Controller";
import { View } from "../View";
import { Post } from "../Models/Post"

export class Post_controller extends Controller {
  default(): void {
    this.all()
  }

  all(): void {
    const all_posts = Post.all()
    const categories = Post.get_category()

    View.get().render("Posts.njk", { "posts": all_posts, "categories": categories })
  }

  view(args: string[]): void {
    const post = Post.one_post(Number(args[0]))
    View.get().render("Post.njk", {
      "post": post
    })
  }

  search(args: string[]): void {
    const posts = Post.filter_posts(args[0], args[1], args[2])
    const categories = Post.get_category()
    View.get().render("Posts.njk", {
      "posts": posts,
      "categories": categories
    })
  }
}