import "./Yes.css";
function Yes() {
  const today: string = new Date().toISOString().slice(0, 10);

  return (
    <div className="formContainer">
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Preferred date:
          <input type="date" value={today} />
        </label>
        <div className="radioContainer">
          <p>Preferred type of date:</p>
          <div>
            <input type="radio" id="html" name="fav_language" value="HTML" />{" "}
            <label>food</label>
          </div>
          <div>
            <input type="radio" id="html" name="fav_language" value="HTML" />{" "}
            <label>museum</label>
          </div>
          <div>
            <input type="radio" id="html" name="fav_language" value="HTML" />{" "}
            <label>outdoor activity</label>
          </div>
          <div>
            <input type="radio" id="html" name="fav_language" value="HTML" />{" "}
            <label>show</label>
          </div>
          <div>
            <input type="radio" id="html" name="fav_language" value="HTML" />{" "}
            <label>other</label>
          </div>
          <br></br>
        </div>
        <label>
          Other:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Yes;
