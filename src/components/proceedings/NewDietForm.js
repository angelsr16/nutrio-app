const NewDietForm = ({ handleChange, formData }) => {
  return (
    <>
      <label htmlFor="desayuno">Desayuno:</label>
      <div className="proceedingRegister-form-grid-2">
        <div className="form-group a-grid">
          <textarea
            name="lunes"
            type="text"
            value={formData.desayuno.lunes}
            onChange={(e) => handleChange(e, "desayuno", e.target.name)}
          />
        </div>
        <div className="form-group b-grid">
          <textarea
            name="martes"
            type="text"
            value={formData.desayuno.martes}
            onChange={(e) => handleChange(e, "desayuno", e.target.name)}
          />
        </div>
        <div className="form-group c-grid">
          <textarea
            name="miercoles"
            type="text"
            value={formData.desayuno.miercoles}
            onChange={(e) => handleChange(e, "desayuno", e.target.name)}
          />
        </div>
        <div className="form-group d-grid">
          <textarea
            name="jueves"
            type="text"
            value={formData.desayuno.jueves}
            onChange={(e) => handleChange(e, "desayuno", e.target.name)}
          />
        </div>
        <div className="form-group e-grid">
          <textarea
            name="viernes"
            type="text"
            value={formData.desayuno.viernes}
            onChange={(e) => handleChange(e, "desayuno", e.target.name)}
          />
        </div>
        <div className="form-group f-grid">
          <textarea
            name="general"
            type="text"
            value={formData.desayuno.general}
            onChange={(e) => handleChange(e, "desayuno", e.target.name)}
          />
        </div>
      </div>

      <label htmlFor="colacion_m">Colación matutina:</label>
      <div className="proceedingRegister-form-grid-2">
        <div className="form-group a-grid">
          <textarea
            name="lunes"
            type="text"
            value={formData.colacion_m.lunes}
            onChange={(e) => handleChange(e, "colacion_m", e.target.name)}
          />
        </div>
        <div className="form-group b-grid">
          <textarea
            name="martes"
            type="text"
            value={formData.colacion_m.martes}
            onChange={(e) => handleChange(e, "colacion_m", e.target.name)}
          />
        </div>
        <div className="form-group c-grid">
          <textarea
            name="miercoles"
            type="text"
            value={formData.colacion_m.miercoles}
            onChange={(e) => handleChange(e, "colacion_m", e.target.name)}
          />
        </div>
        <div className="form-group d-grid">
          <textarea
            name="jueves"
            type="text"
            value={formData.colacion_m.jueves}
            onChange={(e) => handleChange(e, "colacion_m", e.target.name)}
          />
        </div>
        <div className="form-group e-grid">
          <textarea
            name="viernes"
            type="text"
            value={formData.colacion_m.viernes}
            onChange={(e) => handleChange(e, "colacion_m", e.target.name)}
          />
        </div>
        <div className="form-group f-grid">
          <textarea
            name="general"
            type="text"
            value={formData.colacion_m.general}
            onChange={(e) => handleChange(e, "colacion_m", e.target.name)}
          />
        </div>
      </div>

      <label htmlFor="comida">Comida:</label>
      <div className="proceedingRegister-form-grid-2">
        <div className="form-group a-grid">
          <textarea
            name="lunes"
            type="text"
            value={formData.comida.lunes}
            onChange={(e) => handleChange(e, "comida", e.target.name)}
          />
        </div>
        <div className="form-group b-grid">
          <textarea
            name="martes"
            type="text"
            value={formData.comida.martes}
            onChange={(e) => handleChange(e, "comida", e.target.name)}
          />
        </div>
        <div className="form-group c-grid">
          <textarea
            name="miercoles"
            type="text"
            value={formData.comida.miercoles}
            onChange={(e) => handleChange(e, "comida", e.target.name)}
          />
        </div>
        <div className="form-group d-grid">
          <textarea
            name="jueves"
            type="text"
            value={formData.comida.jueves}
            onChange={(e) => handleChange(e, "comida", e.target.name)}
          />
        </div>
        <div className="form-group e-grid">
          <textarea
            name="viernes"
            type="text"
            value={formData.comida.viernes}
            onChange={(e) => handleChange(e, "comida", e.target.name)}
          />
        </div>
        <div className="form-group f-grid">
          <textarea
            name="general"
            type="text"
            value={formData.comida.general}
            onChange={(e) => handleChange(e, "comida", e.target.name)}
          />
        </div>
      </div>

      <label htmlFor="colacion_v">Colación vespertina:</label>
      <div className="proceedingRegister-form-grid-2">
        <div className="form-group a-grid">
          <textarea
            name="lunes"
            type="text"
            value={formData.colacion_v.lunes}
            onChange={(e) => handleChange(e, "colacion_v", e.target.name)}
          />
        </div>
        <div className="form-group b-grid">
          <textarea
            name="martes"
            type="text"
            value={formData.colacion_v.martes}
            onChange={(e) => handleChange(e, "colacion_v", e.target.name)}
          />
        </div>
        <div className="form-group c-grid">
          <textarea
            name="miercoles"
            type="text"
            value={formData.colacion_v.miercoles}
            onChange={(e) => handleChange(e, "colacion_v", e.target.name)}
          />
        </div>
        <div className="form-group d-grid">
          <textarea
            name="jueves"
            type="text"
            value={formData.colacion_v.jueves}
            onChange={(e) => handleChange(e, "colacion_v", e.target.name)}
          />
        </div>
        <div className="form-group e-grid">
          <textarea
            name="viernes"
            type="text"
            value={formData.colacion_v.viernes}
            onChange={(e) => handleChange(e, "colacion_v", e.target.name)}
          />
        </div>
        <div className="form-group f-grid">
          <textarea
            name="general"
            type="text"
            value={formData.colacion_v.general}
            onChange={(e) => handleChange(e, "colacion_v", e.target.name)}
          />
        </div>
      </div>

      <label htmlFor="colacion_v">Cena:</label>
      <div className="proceedingRegister-form-grid-2">
        <div className="form-group a-grid">
          <textarea
            name="lunes"
            type="text"
            value={formData.cena.lunes}
            onChange={(e) => handleChange(e, "cena", e.target.name)}
          />
        </div>
        <div className="form-group b-grid">
          <textarea
            name="martes"
            type="text"
            value={formData.cena.martes}
            onChange={(e) => handleChange(e, "cena", e.target.name)}
          />
        </div>
        <div className="form-group c-grid">
          <textarea
            name="miercoles"
            type="text"
            value={formData.cena.miercoles}
            onChange={(e) => handleChange(e, "cena", e.target.name)}
          />
        </div>
        <div className="form-group d-grid">
          <textarea
            name="jueves"
            type="text"
            value={formData.cena.jueves}
            onChange={(e) => handleChange(e, "cena", e.target.name)}
          />
        </div>
        <div className="form-group e-grid">
          <textarea
            name="viernes"
            type="text"
            value={formData.cena.viernes}
            onChange={(e) => handleChange(e, "cena", e.target.name)}
          />
        </div>
        <div className="form-group f-grid">
          <textarea
            name="general"
            type="text"
            value={formData.cena.general}
            onChange={(e) => handleChange(e, "cena", e.target.name)}
          />
        </div>
      </div>

      {/*

      <label htmlFor="desayuno">Comida:</label>
      <div className="proceedingRegister-form-grid-2">
        <div className="form-group a-grid">
          <textarea type="text" />
        </div>
        <div className="form-group b-grid">
          <textarea type="text" />
        </div>
        <div className="form-group c-grid">
          <textarea type="text" />
        </div>
        <div className="form-group d-grid">
          <textarea type="text" />
        </div>
        <div className="form-group e-grid">
          <textarea type="text" />
        </div>
        <div className="form-group f-grid">
          <textarea type="text" />
        </div>
      </div>

      <label htmlFor="desayuno">Colación vespertina:</label>
      <div className="proceedingRegister-form-grid-2">
        <div className="form-group a-grid">
          <textarea type="text" />
        </div>
        <div className="form-group b-grid">
          <textarea type="text" />
        </div>
        <div className="form-group c-grid">
          <textarea type="text" />
        </div>
        <div className="form-group d-grid">
          <textarea type="text" />
        </div>
        <div className="form-group e-grid">
          <textarea type="text" />
        </div>
        <div className="form-group f-grid">
          <textarea type="text" />
        </div>
      </div>

      <label htmlFor="desayuno">Cena:</label>
      <div className="proceedingRegister-form-grid-2">
        <div className="form-group a-grid">
          <textarea type="text" />
        </div>
        <div className="form-group b-grid">
          <textarea type="text" />
        </div>
        <div className="form-group c-grid">
          <textarea type="text" />
        </div>
        <div className="form-group d-grid">
          <textarea type="text" />
        </div>
        <div className="form-group e-grid">
          <textarea type="text" />
        </div>
        <div className="form-group f-grid">
          <textarea type="text" />
        </div>
      </div> */}
    </>
  );
};

export default NewDietForm;
