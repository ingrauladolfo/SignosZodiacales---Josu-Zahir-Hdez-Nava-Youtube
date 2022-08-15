const zood = () => {
  let day, month, image;
  day = parseInt(document.form.day.value);
  month = parseInt(document.form.month.value);
  image = document.getElementById("images");
  if ((day >= 21 && month === 3) || (day <= 20 && month === 4))
    document.getElementById("images").src = "./assets/img/signos/aries.jpeg";

  if ((day >= 24 && month === 9) || (day <= 23 && month === 10))
    document.getElementById("images").src = "./assets/img/signos/libra.jpeg";

  if ((day >= 21 && month === 4) || (day <= 21 && month === 5))
    document.getElementById("images").src = "./assets/img/signos/tauro.jpeg";

  if ((day >= 24 && month === 10) || (day <= 22 && month === 11))
    document.getElementById("images").src = "./assets/img/signos/escorpio.jpeg";

  if ((day >= 22 && month === 5) || (day <= 21 && month === 6))
    document.getElementById("images").src = "./assets/img/signos/geminis.jpeg";

  if ((day >= 23 && month === 11) || (day <= 21 && month === 12))
    document.getElementById("images").src =
      "./assets/img/signos/sagitario.jpeg";

  if ((day >= 21 && month === 6) || (day <= 23 && month === 7))
    document.getElementById("images").src = "./assets/img/signos/cancer.jpeg";

  if ((day >= 22 && month === 12) || (day <= 20 && month === 1))
    document.getElementById("images").src =
      "./assets/img/signos/capricornio.jpeg";

  if ((day >= 24 && month === 7) || (day <= 23 && month === 8))
    document.getElementById("images").src = "./assets/img/signos/leo.jpeg";

  if ((day >= 21 && month === 1) || (day <= 19 && month === 2))
    document.getElementById("images").src = "./assets/img/signos/acuario.jpeg";

  if ((day >= 24 && month === 8) || (day <= 23 && month === 9))
    document.getElementById("images").src = "./assets/img/signos/virgo.jpeg";

  if ((day >= 20 && month === 2) || (day <= 20 && month === 3))
    document.getElementById("images").src = "./assets/img/signos/piscis.jpeg";
};
