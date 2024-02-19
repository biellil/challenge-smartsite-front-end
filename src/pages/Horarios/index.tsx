import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import iconTime from '../../assets/images/icon-hour.png'
import {
  Button1,
  Button2,
  FormContainer,
  Heroicon,
  LabelCheckbox,
  LabelRadio,
  SectionContainer,
  SelectButton,
} from './styles'

const formSchema = z.object({
  período: z.enum(['Manhã', 'Tarde', 'Noite']).optional().refine(Boolean, {
    message: 'Selecione um período: manhã, tarde ou noite',
  }),
  unidades: z.boolean().optional(),
})

type FormData = z.infer<typeof formSchema>

export function Horarios() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  function createHandleSubmit(data: FormData) {
    console.log(data)
    navigate(`?filter=${data.período}`)
  }
  return (
    <SectionContainer className="container">
      <Heroicon>
        <img src={iconTime} alt="Ícone de Horário" />
        <h2>Horário</h2>
      </Heroicon>
      <p>Qual período quer treinar?</p>
      <FormContainer onSubmit={handleSubmit(createHandleSubmit)}>
        <LabelRadio htmlFor="Manhã">
          <div>
            <input
              type="radio"
              id="Manhã"
              value="Manhã"
              {...register('período')}
            />
            <span>Manhã</span>
          </div>
          <span>06:00 às 12:00</span>
        </LabelRadio>

        <LabelRadio htmlFor="Tarde">
          <div>
            <input
              type="radio"
              id="Tarde"
              value="Tarde"
              {...register('período')}
            />
            <span>Tarde</span>
          </div>
          <span>12:01 às 18:00</span>
        </LabelRadio>

        <LabelRadio htmlFor="Noite">
          <div>
            <input
              type="radio"
              id="Noite"
              value="Noite"
              {...register('período')}
            />
            <span>Noite</span>
          </div>
          <span>18:01 às 23:00</span>
        </LabelRadio>

        <LabelCheckbox>
          <div>
            <input
              type="checkbox"
              id="closed-units"
              {...register('unidades')}
            />
            <span>Exibir unidades fechadas</span>
          </div>
          <span>Encontrar unidade :0</span>
        </LabelCheckbox>

        <SelectButton>
          {errors.período && <p>{errors.período.message}</p>}
          <div>
            <Button1 type="submit">ENCONTRAR UNIDADE</Button1>
            <Button2
              type="reset"
              onClick={() => {
                reset()
                navigate('/')
              }}
            >
              LIMPAR
            </Button2>
          </div>
        </SelectButton>
      </FormContainer>
    </SectionContainer>
  )
}
