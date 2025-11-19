const Contact = () => {
  return (
    <section className="contact-part" style={{ margin: "30px 5%" }}>
      <h2>Contact</h2>
      <p>
        Intéressé pour travailler ensemble ? Vous pouvez me contacter en
        m’envoyant un message via le formulaire ci-dessous.
      </p>
      <form
        action=""
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
            gridTemplateAreas: '"name email" "text text"',
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
              htmlFor="name"
            >
              Nom
            </label>
            <input
              type="name"
              id="name"
              autoComplete="none"
              style={{
                padding: "10px 25px",
                borderRadius: "10px",
              }}
            />
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
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gridArea: "text",
            }}
          >
            <label
              htmlFor="text"
              style={{ margin: "0 0 5px", fontSize: "1.1rem" }}
            >
              Contenu du message
            </label>
            <input
              type="text"
              id="text"
              autoComplete="none"
              style={{
                padding: "10px 25px",
                borderRadius: "10px",
                minHeight: "250px",
              }}
            />
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
