export default class DateUtil{
    constructor(date){
        this.date=date;
    }
    day(short = false){
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ];
          if (short){
            return days [this.date.getDay()].substring(0,3);
          } else {
            return days [this.date.getDay()];
          }
        }
        time(){
            let minmutes = this.date.getMinutes();
            if (minmutes <10) minmutes =`${0}minutes`;

            return `${this.date.getHours()}:${minmutes}`;
        }

        dayTime(){
            return`${this.day()}${this.time()}`;
        }
}