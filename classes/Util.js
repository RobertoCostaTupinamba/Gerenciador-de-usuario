class Utils {
  static dateFormat(date) {
    let minute, hours;
    if (date.getMinutes() < 0) {
      minute = "0" + date.getMinutes();
    }
    if (date.getHours() < 10) {
      hours = "0" + date.getHours();
    }

    return (
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear() +
      " " +
      hours +
      ":" +
      minute
    );
  }
}
