import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateField = (id: string, value: string) => {
    let error = "";
    switch (id) {
      case "fullName":
        if (!value.trim()) error = "Le nom est requis";
        break;
      case "email":
        if (!value.trim()) error = "L'email est requis";
        else if (!/^[\w.-]+@[\w-]+\.[a-z]{2,4}$/i.test(value))
          error = "L'email n'est pas valide";
        break;
      case "subject":
        if (!value.trim()) error = "Le sujet est requis";
        break;
      case "message":
        if (!value.trim()) error = "Le message est requis";
        break;
    }
    setErrors((prev) => ({ ...prev, [id]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    validateField(id, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    Object.entries(formData).forEach(([id, value]) => validateField(id, value));

    const hasErrors = Object.values(errors).some((err) => err !== "");
    const hasEmptyFields = Object.values(formData).some(
      (val) => val.trim() === ""
    );

    if (!hasErrors && !hasEmptyFields) {
      console.log(formData);
      const urlEncoded = new URLSearchParams(formData).toString();
      await fetch(
        "https://message-form-backend-qzki.onrender.com/portfolio/message",
        {
          method: "POST",
          body: urlEncoded,
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
        }
      )
        .then((res) => {
          console.log(res);
          if (res.status !== 200) {
            alert(`Error : ${res.status} - ${res.statusText}`);
          } else {
            alert("Le message a été envoyé!");
          }
        })
        .catch((e) => {
          alert(`Error : ${e}`);
        });

      // Reset
      setFormData({ fullName: "", email: "", subject: "", message: "" });
      setErrors({ fullName: "", email: "", subject: "", message: "" });
    } else {
      alert("Veuillez remplir correctement les champs");
    }
  };

  return (
    <section className="contactSection">
      <h2>Contact</h2>
      <p>
        Intéressé pour travailler ensemble ? Vous pouvez me contacter en
        m’envoyant un message via le formulaire ci-dessous.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="formContainer">
          <div
            style={{
              gridArea: "name",
            }}
          >
            <label htmlFor="fullName">Nom et Prénom</label>
            <input
              type="name"
              id="fullName"
              autoComplete="none"
              value={formData["fullName"]}
              onChange={handleChange}
            />
            <span>{errors["fullName"]}</span>
          </div>
          <div
            style={{
              gridArea: "email",
            }}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData["email"]}
              onChange={handleChange}
            />
            <span>{errors["email"]}</span>
          </div>
          <div
            style={{
              gridArea: "subject",
            }}
          >
            <label htmlFor="subject">Sujet du message</label>
            <input
              type="text"
              id="subject"
              autoComplete="none"
              value={formData["subject"]}
              onChange={handleChange}
            />
            <span>{errors["subject"]}</span>
          </div>
          <div
            style={{
              gridArea: "text",
            }}
          >
            <label htmlFor="message">Contenu du message</label>
            <input
              type="text"
              id="message"
              autoComplete="none"
              value={formData["message"]}
              onChange={handleChange}
            />
            <span>{errors["message"]}</span>
          </div>
        </div>
        <input
          type="submit"
          value="Envoyer le formulaire"
          className="strong-button"
        />
      </form>
    </section>
  );
};

export default Contact;
