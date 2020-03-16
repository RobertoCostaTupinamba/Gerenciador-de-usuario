class Utils {
  static dateFormat(date) {
    let minute = date.getMinutes(),
      hours = date.getHours();
    if (date.getMinutes() < 0) {
      minute = "0" + date.getMinutes();
    }
    if (date.getHours() < 10) {
      hours = "0" + date.getHours();
      console.log();
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
