import { Controller } from "./Controller";
import { View } from "../View";

export class Home_controller extends Controller {
    default(): void {
        View.get().render("Home.njk")

    }

}