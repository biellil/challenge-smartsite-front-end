import Bebedouro2 from '../../assets/images/forbidden-fountain.png'
import Vestiários3 from '../../assets/images/forbidden-lockerroom.png'
import Bebedouro1 from '../../assets/images/partial-fountain.png'
import Vestiários2 from '../../assets/images/partial-lockerroom.png'
import Mascara2 from '../../assets/images/recommended-mask.png'
import Toalha2 from '../../assets/images/recommended-towel.png'
import Vestiários1 from '../../assets/images/required-lockerroom.png'
import Mascara1 from '../../assets/images/required-mask.png'
import Toalha1 from '../../assets/images/required-towel.png'

export function Legend() {
  return (
    <section className="container">
      <div>
        <p>Máscara</p>
        <img src={Mascara1} alt="" />
        <img src={Mascara2} alt="" />
      </div>

      <div>
        <p>Toalha</p>
        <img src={Toalha1} alt="" />
        <img src={Toalha2} alt="" />
      </div>

      <div>
        <p>Bebedouro</p>
        <img src={Bebedouro1} alt="" />
        <img src={Bebedouro2} alt="" />
      </div>

      <div>
        <p>Vestiários</p>
        <img src={Vestiários1} alt="" />
        <img src={Vestiários2} alt="" />
        <img src={Vestiários3} alt="" />
      </div>
    </section>
  )
}
