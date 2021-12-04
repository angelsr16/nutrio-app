import { toast } from "react-toastify";

export const ValidateForm = (formData) => {
  const emailRegex =
    /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
  const vacios = Object.keys(formData).filter((key) => {
    return formData[key] === "";
  });

  const emailValido = emailRegex.test(formData["email"]);
  const phoneNumber = formData["phoneNumber"];

  if (vacios.length > 0) {
    toast.info("¡Faltan campos por rellenar!");
    return false;
  }
  if (!emailValido) {
    toast.info("Email no válido");
    return false;
  }
  if (phoneNumber.length !== 10) {
    toast.info("Número de teléfono debe contener 10 dígitos!");
    return false;   
  }
  return true;
};

export const OnlyNumbers = (e) => {
  if (!/[0-9]/.test(e.key)) {
    e.preventDefault();
  }
};
