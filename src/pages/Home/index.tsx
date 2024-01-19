import hour from '../../assets/images/icon-hour.png'
import InputComponent from '../../components/input'

export function HOME() {
  return (
    <main>
      <div className="container">
        <div>
          <img src={hour} alt="" srcSet="" />
          <h3>Horário</h3>
          <p>Qual período quer treinar?</p>
        </div>

        <form action="/submit-form" method="post">
          <div>
            <label>
              <InputComponent type="radio" name="periodo" value="manha" />
              Manhã
            </label>
            <span>06:00 às 12:00</span>
          </div>

          <div>
            <label>
              <InputComponent type="radio" name="periodo" value="tarde" />
              Tarde
            </label>
            <span>12:01 às 18:00</span>
          </div>

          <div>
            <label>
              <InputComponent type="radio" name="periodo" value="noite" />
              Noite
            </label>
            <span>18:01 às 23:00</span>
          </div>

          <div>
            <label>
              <InputComponent type="checkbox" name="unidades-fechadas" />
              Exibir unidades fechadas
            </label>
            <span>Resultados encontrados: 0</span>
          </div>

          <div>
            <InputComponent
              type="submit"
              // className="button button-primary"
              value="ENCONTRAR UNIDADE"
              name="ENCONTRAR"
            />
            <InputComponent
              type="reset"
              // className="button button-clear"
              value="LIMPAR"
              name="LIMPAR"
            />
          </div>
        </form>
      </div>
    </main>
  )
}
