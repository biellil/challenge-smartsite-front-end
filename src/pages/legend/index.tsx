import Bebedouro2 from '../../assets/images/forbidden-fountain.png'
import Vestiários3 from '../../assets/images/forbidden-lockerroom.png'
import Bebedouro1 from '../../assets/images/partial-fountain.png'
import Vestiários2 from '../../assets/images/partial-lockerroom.png'
import Mascara2 from '../../assets/images/recommended-mask.png'
import Toalha2 from '../../assets/images/recommended-towel.png'
import Vestiários1 from '../../assets/images/required-lockerroom.png'
import Mascara1 from '../../assets/images/required-mask.png'
import Toalha1 from '../../assets/images/required-towel.png'
import { LegendContainer, LegendContainer3x1, Sectionlegend } from './styles'

export function Legend() {
  return (
    <Sectionlegend className="container">
      <LegendContainer>
        <p>Máscara</p>
        <div>
          <img src={Mascara1} alt="Mascara Obrigatório" />
          <p>Obrigatório</p>
        </div>
        <div>
          <img src={Mascara2} alt=" Mascara Recomendado" />
          <p>Recomendado</p>
        </div>
      </LegendContainer>

      <LegendContainer>
        <p>Toalha</p>
        <div>
          <img src={Toalha1} alt="" />
          <p>Obrigatório</p>
        </div>
        <div>
          <img src={Toalha2} alt="" />
          <p>Recomendado</p>
        </div>
      </LegendContainer>

      <LegendContainer>
        <p>Bebedouro</p>
        <div>
          <img src={Bebedouro1} alt="" />
          <p>Parcial</p>
        </div>
        <div>
          <img src={Bebedouro2} alt="" />
          <p>Proibido</p>
        </div>
      </LegendContainer>

      <LegendContainer3x1>
        <p>Vestiários</p>
        <div>
          <img src={Vestiários1} alt="" />
          <p>Liberado</p>
        </div>
        <div>
          <img src={Vestiários2} alt="" />
          <p>Parcial</p>
        </div>
        <div>
          <img src={Vestiários3} alt="" />
          <p>Fechado</p>
        </div>
      </LegendContainer3x1>
    </Sectionlegend>
  )
}
