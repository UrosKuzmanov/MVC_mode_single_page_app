import { View } from "../View";
import { Controller } from "./Controller";

export class About_controller extends Controller {
    default(): void {
        View.get().render("About.njk")
    }
}