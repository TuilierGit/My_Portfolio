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
      await fetch("http://localhost:5000/portfolio/message", {
        method: "POST",
        body: urlEncoded,
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      })
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
    <section className="contact-part" style={{ margin: "30px 5%" }}>
      <h2>Contact</h2>
      <p>
        Intéressé pour travailler ensemble ? Vous pouvez me contacter en
        m’envoyant un message via le formulaire ci-dessous.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className="form-container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateAreas: '"name email" "subject subject" "text text"',
            gap: "25px",
            margin: "0 0 25px",
            width: "80%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gridArea: "name",
            }}
          >
            <label
              style={{ margin: "0 0 5px", fontSize: "1.1rem" }}
              htmlFor="fullName"
            >
              Nom et Prénom
            </label>
            <input
              type="name"
              id="fullName"
              autoComplete="none"
              style={{
                padding: "10px 25px",
                borderRadius: "10px",
              }}
              value={formData["fullName"]}
              onChange={handleChange}
            />
            <span style={{ color: "red", fontSize: "0.9rem" }}>
              {errors["fullName"]}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gridArea: "email",
            }}
          >
            <label
              htmlFor="email"
              style={{ margin: "0 0 5px", fontSize: "1.1rem" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              style={{
                padding: "10px 25px",
                borderRadius: "10px",
              }}
              value={formData["email"]}
              onChange={handleChange}
            />
            <span style={{ color: "red", fontSize: "0.9rem" }}>
              {errors["email"]}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gridArea: "subject",
            }}
          >
            <label
              htmlFor="subject"
              style={{ margin: "0 0 5px", fontSize: "1.1rem" }}
            >
              Sujet du message
            </label>
            <input
              type="text"
              id="subject"
              autoComplete="none"
              style={{
                padding: "10px 25px",
                borderRadius: "10px",
              }}
              value={formData["subject"]}
              onChange={handleChange}
            />
            <span style={{ color: "red", fontSize: "0.9rem" }}>
              {errors["subject"]}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gridArea: "text",
            }}
          >
            <label
              htmlFor="message"
              style={{ margin: "0 0 5px", fontSize: "1.1rem" }}
            >
              Contenu du message
            </label>
            <input
              type="text"
              id="message"
              autoComplete="none"
              style={{
                padding: "10px 25px",
                borderRadius: "10px",
                minHeight: "250px",
              }}
              value={formData["message"]}
              onChange={handleChange}
            />
            <span style={{ color: "red", fontSize: "0.9rem" }}>
              {errors["message"]}
            </span>
          </div>
        </div>
        <input
          type="submit"
          value="Envoyer le formulaire"
          className="strong-button"
        />
      </form>
      {/* <div
        style={{
          border: "solid 1px lightgray",
          padding: "25px 5%",
          margin: "25px 0 0",
          borderRadius: "15px",
          display: "none",
        }}
      >
        <h4>Mon Mail</h4>
        <p style={{ margin: "30px 0 20px" }}>
          Si vous préférez éviter les formulaires mais souhaitez tout de même collaborer avec moi, aucune inquiétude : vous pouvez me contacter directement par e-mail. Il vous suffit d’utiliser le bouton ci-dessous, qui ouvrira votre messagerie par défaut.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Strong
            url="mailto:thomas.tuilier@gmail.com"
            text="Envoyer directement un mail"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Contact;
