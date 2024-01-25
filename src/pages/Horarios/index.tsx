import iconTime from '../../assets/images/icon-hour.png'
import InputComponent from './componests/input'
import {
  FormContainer,
  Heroicon,
  LabelRadio,
  Labelcheckbox,
  SectionContainer,
} from './styles'
export function Horarios() {
  return (
    <SectionContainer className="container">
      <Heroicon>
        <img src={iconTime} />
        <h2>Horário</h2>
      </Heroicon>
      <p>Qual período quer treinar?</p>
      <FormContainer method="get">
        <LabelRadio htmlFor="morning">
          <div>
            <InputComponent
              type="radio"
              id="Manhã"
              name="schedule"
              value="morning"
              label="Manhã"
            />
            <span>Manhã</span>
          </div>
          <span>06:00 às 12:00</span>
        </LabelRadio>
        <LabelRadio htmlFor="afternoon">
          <div>
            <InputComponent
              type="radio"
              id="afternoon"
              name="schedule"
              value="afternoon"
              label="Tarde"
            />
            <span>Tarde</span>
          </div>
          <span>12:01 às 18:00</span>
        </LabelRadio>
        <LabelRadio htmlFor="evening">
          <div>
            <InputComponent
              type="radio"
              id="evening"
              name="schedule"
              value="evening"
              label="Noite"
            />
            <span>Noite</span>
          </div>
          <span>18:01 às 23:00</span>
        </LabelRadio>
        <Labelcheckbox htmlFor="closed-units">
          <div>
            <InputComponent
              type="checkbox"
              id="closed-units"
              label="Exibir unidades fechadas"
            />
            <span>Exibir unidades fechadas</span>
          </div>
          <div>
            <span> Resultados encontrados: </span>
            <samp>0</samp>
          </div>
        </Labelcheckbox>
        <div>
          <button type="submit">ENCONTRAR UNIDADE</button>
          <button type="reset">LIMPAR</button>
        </div>
      </FormContainer>
    </SectionContainer>
  )
}
