export class Convert_date{
    public static convert(date:string):Date{
        return new Date(date)
    }

    public static convert_date_dot(date:string):Date{
        const date_arr=date.split(".")
        const date_minus=`${date_arr[2]}-${date_arr[1]}-${date_arr[0]}`
        return Convert_date.convert(date_minus)

    }

}